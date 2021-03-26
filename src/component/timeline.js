import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { useSelector, useDispatch } from 'react-redux';
import { actionChampion } from 'action/champion'

function TimeItem(props) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.champion);
  const action = props.log.action;
  
  return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot onClick={()=>actionChampion(dispatch, props.log, data)}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{action}</TimelineContent>
      </TimelineItem>
    )
  
}

export default function BasicTimeline() {
  const dispatch = useDispatch();
  const champions = useSelector(state => state.champion);
    const timeline = useSelector(state => state.timeline);
  let i = 0;
  const play = () => {
    for (let log in timeline){
      setTimeout(()=>{actionChampion(dispatch, timeline[log], champions)}, Number(timeline[log].time)*1000);
    }
  }
  return (
    <div style={{position: "absolute", right: 0, width: "268px"}}>
    <Timeline align="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot onClick={()=>play()}/>  
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Play</TimelineContent>
      </TimelineItem>
      {timeline.map((log)=>{return <TimeItem key={i++} log={log}/>})}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>End</TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}