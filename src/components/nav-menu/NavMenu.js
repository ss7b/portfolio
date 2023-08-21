// menu
import { Twirl as Hamburger } from 'hamburger-react'
import { NavLink  } from 'react-router-dom';
import { motion } from "framer-motion";
// css
import "./NavMenu.css"
import { useState } from 'react';
import { Box } from '@mui/material';

const nav = {
  position: 'fixed',
  right: {xs:'30px', md:'100px'},
  top: {xs:'30px', md:'80px'},
  zIndex:'99'
}

const item = {
    closed: { opacity: 0, x: "100%" },
    open: { x: 0, opacity: 1 ,
    },
    
};
export default function NavMenu() {
   
  const [isMunuOpen, setIsMunuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState('hidden');
  
  const updateMenu =()=>{
    setMenuClass('hidden')
    setIsMunuOpen(false)
  }

    return (
      <>
      
      <Box  sx={nav}>
        <Hamburger toggled={isMunuOpen} toggle={setIsMunuOpen} 
          onToggle={toggled => {
            if (toggled) {
              setMenuClass('visible')
            } else {
              setMenuClass('hidden')
            }
          }}/>
        <ul style={{ justifyContent:'center', flexDirection:'column',position: 'fixed'}} className={menuClass}>
            <motion.li variants={item}  animate={isMunuOpen?'open':'closed'}transition={{ duration: 0.2 }}><NavLink  to='/' onClick={updateMenu}>home</NavLink ></motion.li>
            <motion.li variants={item}  animate={isMunuOpen?'open':'closed'}transition={{ duration: 0.3 }}><NavLink  to='/resume' onClick={updateMenu}>resume</NavLink ></motion.li>
            <motion.li variants={item}  animate={isMunuOpen?'open':'closed'}transition={{ duration: 0.4 }}><NavLink  to='/portfolio' onClick={updateMenu}>portfolio</NavLink ></motion.li>
            <motion.li variants={item}  animate={isMunuOpen?'open':'closed'}transition={{ duration: 0.5 }}><NavLink  to='/contact' onClick={updateMenu}>contact</NavLink ></motion.li>
        </ul>
      </Box>
        {
          isMunuOpen? 
          <div style={{
            background: 'rgb(0 0 0 / 44%)',
            height: '100%',
            width: '100%',
            zIndex: '98',
            position: 'absolute',
            left: '0',
            top: '0',
          }}></div>
          :''
        }
      
      </>
    );
}


  