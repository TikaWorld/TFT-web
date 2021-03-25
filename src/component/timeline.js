import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { useSelector, useDispatch } from 'react-redux';
import { moveChampion } from 'action/champion'

function TimeItem(props) {
  const dispatch = useDispatch();
  const id = props.log.champion.uuid
  const data = useSelector(state => state.champion[id]);
  const action = props.log.action
  
  return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot onClick={()=>moveChampion(dispatch, id, data, {x:0,y:0})}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{action}</TimelineContent>
      </TimelineItem>
    )
  
}

export default function BasicTimeline() {
  const timeline = useSelector(state => state.timeline);
  let i = 0;
  return (
    <div style={{position: "absolute", right: 0, width: "268px"}}>
    <Timeline align="right">
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