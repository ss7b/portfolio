import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getdata = createAsyncThunk(
  'information',
  async () => {
    const response = await axios.get('js/data.json')
    const informations = response.data.info
    const services = response.data.services
    const comments = response.data.comments
    const experiences = response.data.experiences
    const educations = response.data.educations
    const skills = response.data.skills
    const design = response.data.design
    const coding = response.data.coding
    const works = response.data.works

    return ({informations,services,comments,experiences,educations,skills,design,coding, works})
  }
)


export const homeSlice = createSlice({
  name: 'counter',
  initialState:{
    isLoading:false,
    info:[],
    services:[],
    comments:[],
    experiences: [],
    educations:[],
    skills:[],
    design:[],
    coding:[],
    works:[],
    work:[]
  },
  reducers: {

    
  },
  extraReducers: (builder) => {

    builder
    .addCase(getdata.pending, (state, action)=>{
      state.isLoading= true

    }).addCase(getdata.fulfilled, (state, action) => {

      state.info = action.payload.informations
      state.services = action.payload.services
      state.comments = action.payload.comments
      state.experiences = action.payload.experiences
      state.educations = action.payload.educations
      state.skills = action.payload.skills
      state.design = action.payload.design
      state.coding = action.payload.coding
      state.works = action.payload.works

      state.isLoading = false
    })
  },
})

// export const { } = homeSlice.actions

export default homeSlice.reducer