import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { useSelector, useDispatch } from 'react-redux';
import { actionChampion } from 'action/champion'
import styled from 'styled-components'

const Cont = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: #d6d6d6;
`

function TimeItem(props) {
  const dispatch = useDispatch();
  const action = props.log.action;
  
  return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot onClick={()=>actionChampion(dispatch, props.log)}/>
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
    <Cont>
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
    </Cont>
  );
}