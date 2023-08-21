import { menuClasses } from '@mui/material'
import { createSlice } from '@reduxjs/toolkit'



export const menuSlice = createSlice({
  name: 'toggle',
  initialState:{
    isMenuOpen: false,
    menuClass:'hidden',
  },
  reducers: {
    toggled: (state, action)=>{

            console.log(state.isMenuOpen)
            // if (state.isMenuOpen) {

            //     state.menuClass='visible'
            // } else {
            //     state.menuClass='hidden'
            // }
    
    },
    updated: (state, action)=>{
        state.isMenuOpen = false
        state.menuClass='hidden'
         
    }
    
  },
})

export const {toggled, updated} = menuSlice.actions

export default menuSlice.reducer