import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "./style.css";
export default function FilledAlerts({text , color}) {
  return (
    <Stack className='toaster' sx={{ width: '100%' }} style={{borderRadius:"50px"}} spacing={2}>
      <Alert variant="filled" severity={color} style={{borderRadius:"50px 0 50px 50px"}}>
       {text}
      </Alert>
    </Stack>
  );
}