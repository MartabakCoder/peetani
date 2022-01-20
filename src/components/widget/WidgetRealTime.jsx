import {LinearProgress,Typography, Box} from '@mui/material';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 1}}>
      <Box sx={{ width: '100%', mr: 1 }}>
      <Typography variant="body2" color="text.secondary">{props.title}</Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}/100`}</Typography>
      </Box>
    </Box>
  );
}

export default function WidgetRealTime() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Real Time Condition</span>
      <Box sx={{alignItems: 'center', p: 4}}>
      <img src={"./img/realtime.png"}/>
      </Box>
      
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={70} title="Location A" color="success"/>
        <LinearProgressWithLabel value={75} title="Location B" color="success"/>
        <LinearProgressWithLabel value={80} title="Location C" color="success"/>
        
      </Box>
    </div>
  );
}
