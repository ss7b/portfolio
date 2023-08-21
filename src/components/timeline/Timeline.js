import { Stack } from '@mui/material'
import './timeline.css'
export default function Timeline({TimelineTitle,children}) {
  const childrenLIst = children.map((card)=>{
    return(<div className='timeline-item' key={Math.random()}>
      {card}
    </div>)
  })
    
  return (
    <>
        <div className='timeline-caption-outer'>
            <div className='timeline-caption'>
            👨‍💻 <span>{TimelineTitle}</span>
            </div>
        </div>
        <Stack direction="row" className='timeline'>
          {childrenLIst}
        </Stack>
    </>
  )
}
