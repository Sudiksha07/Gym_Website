import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from '../Components/Exercises.js';
import SearchExercies from '../Components/SearchExercies';
import HeroBanner from '../Components/HeroBanner';
export default function Home() {
  const [bodyPart,setBodyPart]=useState("all")
  const [exercise,setExercises]=useState([])
  return (
<Box>
  <HeroBanner/>
  <SearchExercies setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercise} setExercises={setExercises} bodyPart={bodyPart} />
</Box>
  )
}
