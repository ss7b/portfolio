import React, { useContext, useEffect } from 'react'
import { getDataWork, getdata } from '../../redux/slices/homeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useSearchParams, useLocation, useNavigate} from 'react-router-dom'
// nui
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WindowIcon from '@mui/icons-material/Window';

// css
import './style.css'
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

export default function WorkDetails() {
  const {works,isLoading}= useSelector((state) => state.home)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(()=>{
    dispatch(getdata())
  },[])
  const {workId} = useParams()
  const navigate = useNavigate()
  
  const dec = () => {
    let id = Number(workId)
    if( workId === '1'){
      id = works.length 
    }else if(Number(workId) <= works.length || Number(workId) >= 1){
      id = Number(workId) - 1
    }
    navigate(`/${id}`)
	};
  const inc = () => {
    let id = Number(workId)
    if( Number(workId) >= works.length ){
      id = 1
    }else{
      id = Number(workId) + 1
    }
    navigate(`/${id}`)
	};

  const work = works.find((w)=> w.id == workId)
  return (
    <div className='content' style={{marginBottom:'80px'}}>
      {isLoading || work == undefined ? <h1>loading....</h1>:
        (
          
      <div >
        <Typography sx={{marginBottom:'15px', fontSize:{xs:'25px', sm:'50px'}}}>{work.title}</Typography>
        <Box height={{xs:'100%', md:'500px'}} overflow= 'hidden'>
          <img src={work.cover} alt=''  style={{maxWidth:'100%'}}/>
        </Box>
          
        <Box my='30px'>
          <Grid container justifyContent='space-between'>
            <Grid item><h4 style={{marginBottom: '10px', fontSize: '30px'}}>About the Project</h4></Grid>
            <Grid item>
              <Button variant="contained" sx={{background:'primary.main'}}><a href={work.webSite} target="_blank" style={{color:'#000', fontWeight:600}}>Go To Site</a></Button>
            </Grid>
            
          </Grid>
          
          <p className='info__desc'>{work.desc}</p>
        </Box>

        <Grid container columnSpacing={4}>
          {
            work.images.map((img,i)=> {
              return(
              <Grid item xs={6} key={i} height={{xs:'150px',md:'250px'}} overflow='hidden'>
                <img src={img} alt='' style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  }}/>
              </Grid>
              )
            })
          }
          
        </Grid>
      </div>
      )}
      <Stack direction='row' sx={{justifyContent:'space-between', my:{xs:'20px', md:'50px'}}}>

           <span className={'arrow'} onClick={dec}><ArrowBackIcon/></span>

        <Link to="/portfolio">
          <span className='window'><WindowIcon/></span>
        </Link>
          <span className='arrow' onClick={inc}><ArrowForwardIcon/></span>
      </Stack>
    </div>
  )
}
