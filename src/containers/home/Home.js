import React, { useEffect} from 'react'
import { getdata } from '../../redux/slices/homeSlice';
import Hadding from '../../components/hadding/Hadding';
import { useDispatch, useSelector } from 'react-redux';

// mui
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import { Avatar, Box, Card, CardActions, CardContent, Grid, Stack, Typography } from '@mui/material';

// css
import "./Home.css"


// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

// animations
import { motion} from 'framer-motion'
import {  fadeInToRight, fadeInToTop, itemFadeIn} from '../../animations/variants';
import { useTypewriter, Cursor } from 'react-simple-typewriter';





export default function Home() {
  // typeTyper config
  const [text] = useTypewriter({
    words: ['Web Developer'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed:10,
    delaySpeed: 2000,
  })

  // redux 
  const {info, services, comments}= useSelector((state) => state.home)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getdata())
  },[])

  // maping
  const infoList = info.map((info, index)=>{
    return(<Grid item xs={6} lg={4} mb={{xs:2, md:4, lg:6}} fontSize={'1rem'} component={motion.li} key={info.id}
      variants={fadeInToRight}
      initial='initial'
      whileInView='animate'
      viewport={{once:true}}
      custom={index}
    >
       <Box component='i' sx={{color: 'primary.main',mr: '10px'}} className={info.icon} color='primary.main'></Box>
        <span>{info.info}</span>
       </Grid>)
  })
  const servicesList = services.map((service, index)=>{
    return(
    <Grid item  xs={6} md={4} mb={{xs:4, md:6, lg:8}}  key={service.id}
    component={motion.div}
    variants={itemFadeIn}
    initial= 'initial'
    whileInView="animate"
    viewport={{once:true, amount:0.5}}
    custom={index}

    > 
    <Box component='i' fontSize={{xs:'2rem', sm: '3rem'}} color='secondary.main' className={`${service.icon}`}></Box>
    <Box component={'span'} fontSize='.9rem' ml={{xs:'20px', md:'45px'}}>{service.title}</Box>
    </Grid>
    )
  })

  const commentsList = comments.map((comment)=>{
    return(
      <SwiperSlide key={comment.id}>
          <Stack direction="row">
            <FormatQuoteOutlinedIcon  sx={{
              marginRight:'20px',
              fontSize: '4rem',
              color: 'primary.main',}}/>
            <Card sx={{background:'transparent'}}>
              <CardContent>
                <Typography sx={{
                  fontSize: '.853rem',
                  lineHeight: '1.4rem ',
                  color: 'secondary.main',
                  opacity: '0.7',
                }}>{comment.comment}</Typography>
              </CardContent>
              <hr />
              <CardActions>
              <Stack direction="row" spacing={2} style={{alignItems:'center'}}>
                <Avatar alt="Remy Sharp" src={comment.avatar} />
                <Stack direction= 'column' spacing={0}>
                  <Typography variant='h6' sx={{ color:'secondary.main'}}>{comment.name}</Typography>
                  <Typography variant='subtitle2' sx={{ color:'secondary.light'}}>Founder</Typography>
                </Stack>
              </Stack>
              </CardActions>
            </Card>
          </Stack >
      </SwiperSlide>
    )
  })
  

  return (
    <>
    {/* hero section */}
    <motion.section 
      variants={fadeInToTop}
      initial = "initial"
      animate = "animate"
      transition={{staggerChildren:0.5}}
    >
        <Grid container columnSpacing={10} alignItems='center' mb='30px'>
          <Grid item xs={12} md={5} lg={4} mb={{xs:'20px', md:'0px'}} sx={{position:"relative"}}>
            <Box className="profile-img">
              <img src='imgs/profile.jpg' alt=''/>
            </Box>
              <ul className="socail-links">
                <li><a href="/"><FacebookIcon/></a></li>
                <li><a href="/"><TwitterIcon/></a></li>
                <li><a href="/"><InstagramIcon/></a></li>
                <li><a href="/"><LinkedInIcon/></a></li>
              </ul>
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <Typography  mb='10px'
              component={motion.h5}
              variants={fadeInToTop}
              initial = "initial"
              whileInView= "animate"
              viewport={{once:true}}
            >Hello Everyone👋</Typography>
            <Typography variant='h1' fontWeight='600' fontSize={{xs:'1.7rem' , md:'2.2rem'}} lineHeight='1.6'
              component={motion.h1}
              variants={fadeInToTop}
              initial='initial'
              whileInView= "animate"
              viewport={{once:true}}
            >
                I'm Suhail<br/> I am a {' '}
              <Box component='span' color='primary.main'>
                <span>
                  {text}
                  <Cursor
                    cursorBlinking= {true}
                    cursorColor='#e6ff00'
                    cursorStyle='|'
                  />

                </span>
              </Box>
            </Typography>
            <div ></div>
            <Box my={{xs:'30px',md :'50px'}}  component='hr'/>
            <Grid container component={'ul'}>
             {infoList}
            </Grid>
          </Grid>
        </Grid>
        <Typography lineHeight='1.7' className='p-title' fontSize='1.2rem'
          component={motion.p}
          variants={fadeInToTop}
          initial = "initial"
          whileInView= "animate"
          viewport={{once:true,amount:0.5}}
        >
          I'm a Creative Developer for interactive projects that usually are apps, VR and Creative websites. I Spend most of time coding outstanding projects or studying new technologies.  to improve my
          development stack. I develop compelling designs that spring to life using transition and animations that suit my clients, using the most sophisticated technologies available today for fully interactive and responsive websites and apps.
        </Typography>
    </motion.section>
    {/*======= hero section===========*/}
    
      {/* what I do section */}
      <Box 
       className='section-m '>
        <Hadding title={'What I do'}/>
        <Grid container className='services'>
          {servicesList}
        </Grid>
      </Box>
      {/*========== what I do section =========*/}

      {/* comment secion */}
      <div className='section-m '>
        <Hadding title={'What The People Saying'}/>
        <Swiper
           modules={[ Pagination,Autoplay]}
           spaceBetween={50}
           slidesPerView={3}

           pagination={{ clickable: true }}
           grabCursor= {true}

           autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {commentsList}
        </Swiper>

      </div>
      {/* ========comment secion========= */}
    </>
  )
}
