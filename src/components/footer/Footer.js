import styled from '@emotion/styled'
import { ListItem, Stack } from '@mui/material'

const List = styled(ListItem)({
  px:{xs:'10px', md:'16px'},
  '&:hover':{
    color:'#e6ff00'
  }
})
export default function Footer({title}) {
  var date = new Date(); 
  return (
    <div style={{
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'center', color:'#fff',
        fontSize:'.7rem',
        marginTop: '30px'
        }}>
        <p style={{opacity:'.7'}}>Copyright {date.getFullYear()} - All right reserved</p>
        <Stack component={'ul'}  direction={'row'}>
            <List sx={{px:{xs:'10px', md:'16px'}}}>Instagram</List>
            <List sx={{px:{xs:'10px', md:'16px'}}}>Facebook</List>
            <List sx={{px:{xs:'10px', md:'16px'}}}>Twitter</List>
            <List sx={{px:{xs:'10px', md:'16px'}}}>LinkedIn</List>
        </Stack>
    </div>
  )
}