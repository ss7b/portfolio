import React, { useEffect } from 'react'
import "./portfolio.css"
import { useDispatch, useSelector } from 'react-redux'
import {getdata } from '../../redux/slices/homeSlice'
import Hadding from '../../components/hadding/Hadding'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeInVaraint = {
  initial:{
    opacity:0,
    y:-100,
  },
  animate: (index)=>({
    opacity:1,
    
    y:0,
    transition:{
        delay: 0.1 * index,
        type:"tween"
      }
  }),
  
}

export default function Portfolio() {
  // redux
  const {works}= useSelector((state) => state.home)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getdata())
  },[])

  const imagesList = works.map((image,index)=>{
    return(
      <motion.span
      key={image.id}
      variants={fadeInVaraint}
      initial= 'initial'
      whileInView="animate"
      viewport={{once:true, amount:0.5}}
      custom={index}
      >
      <Link key={image.id} to= {`/${image.id}`}>

          <div className="image">
            <img src={image.cover} alt=""/>
          </div>
       </Link>
      </motion.span>
      
    )
  })
  return (
    <>
      <Hadding title={'PORTFOLIO'}/>
      <div style={{marginTop:'100px'}}>
        <div className="col-3" >
          {imagesList}
        </div>
      </div>
    </>
  )
}
