import React, { useEffect } from 'react'
import Hadding from '../../components/hadding/Hadding'
import CardComp from '../../components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../../redux/slices/homeSlice'
import Timeline from '../../components/timeline/Timeline'

// css
import "./resume.css"

// mui
import { Grid, Stack } from '@mui/material'

// animation
import {motion} from 'framer-motion'

export default function Resume() {
  // redux
  const {experiences,educations,skills,design,coding}= useSelector((state) => state.home)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getdata())
  },[])
  // maping

  const experiencesList = experiences.map((experience)=>{
    const {id, date, title, body} = experience
    return(<CardComp key={id} date={date} title={title} body={body}/>)
  })

  const educationsList = educations.map((education)=>{
    const {id, date, title, body} = education
    return(<CardComp key={id} date={date} title={title} body={body}/>)
  })
  
  // circuler progress
  const skillsList = skills.map((skill)=>{
    const {id,percent,title} = skill
    return(
      <Grid item xs={6} sm={6} md={3} mb={{xs:'40px' , md:"0"}} key={id}>
        <Stack direction='column' alignItems='center'>
          <motion.div
            initial= {{background: `conic-gradient(#d1ed5d 0%, #ffffff33 0deg)`}}
            whileInView={{background: `conic-gradient(#d1ed5d ${percent}%, #ffffff33 0deg)`}}
            transition={{duration:0.8}}
            viewport={{once:true}}
            className="circular-progress" >
            <span className="percent">
              {percent}%
            </span>
          </motion.div>
          <span>{title}</span>
        </Stack>

      </Grid>
    )
  })
  // liner progress
  const designList = design.map((design)=>{
    const {id,percent,title} = design
    return(
      <div className="liner-progress" key={id}>
        <h3>{title} <span>{percent}</span></h3>
        <div className="the-progress">
          <motion.span
            initial= {{width:.0}}
            whileInView={{width:`${percent}%` }}
            transition={{duration:0.8}}
            viewport={{once:true}}
          >
           </motion.span>
        </div>
      </div>
    )
  })

  const codingList = coding.map((code)=>{
    const {id,percent,title} = code
    return(
      <div className="liner-progress" key={id}>
        <h3>{title} <span>{percent}</span></h3>
        <div className="the-progress">
        <motion.span
            initial= {{width:.0}}
            whileInView={{width:`${percent}%` }}
            transition={{duration:0.8}}
            viewport={{once:true}}
          >
           </motion.span>
        </div>
      </div>
    )
  })
  //======= liner progress
  


  return (
    <>
      <Hadding title={'My Resume'}/>
      <div className='content'>
        {/* time line sction */}
        <div className='section-m'>
        <Timeline TimelineTitle='Experiences'>
             {experiencesList}
        </Timeline>          
        </div>
        <div className='section-m'>
        <Timeline TimelineTitle='Educations'>
             {educationsList}
        </Timeline>          
        </div>
        {/* =======time line sction======= */}

        {/* progress section */}
        <div className='section-m'>
          <Hadding title={'My skills'}/>

          <Grid container columnSpacing={5} columnGap={3} className='section-m'>
            <Grid item xs={1}>
              <h2 className='skills-hading'>LANGUAGE</h2>
            </Grid>

            <Grid item xs={10}>
              <Grid container justifyContent='space-around'>
                  {skillsList}
              </Grid>
            </Grid>


          </Grid>
          <hr/>
          
          <Grid container columnSpacing={10} className='section-m'>

            <Grid item xs={12} md={6} mb={{xs:'40px', md:'0'}}>
              <Grid container columnSpacing={4} textAlign='center'>
              <Grid item xs={1} >
                <h2 className='skills-hading'>DESIGN</h2>
              </Grid>

              <Grid item xs={11}>
              {designList}
              </Grid>

              </Grid>
              
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container columnSpacing={4} textAlign='center'>
                <Grid item xs={1} >
                  <h2 className='skills-hading'>CODING</h2>
                </Grid>
                <Grid item xs={11}>
                  {codingList}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/*======= progress section========= */}
      </div>
    </>
  )
}
