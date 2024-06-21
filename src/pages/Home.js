import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../Components/Exercises.js";
import SearchExercises from '../Components/SearchExercies.js'
import HeroBanner from "../Components/HeroBanner";
export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}
