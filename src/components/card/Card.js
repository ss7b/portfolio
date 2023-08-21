import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

// css 
import "./card.css"

export default function CardComp({date, title, body}) {
  return (
    <Card sx={{ maxWidth: '100%'}} className='card' >
      <CardContent>
      <Typography sx={{ fontSize: 16 }} className='date'>
          {date}
        </Typography>
        <Typography variant="h5" className='title'>
            {title}
        </Typography>
        <Typography variant="body2" className='body'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}