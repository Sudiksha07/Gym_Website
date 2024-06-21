import React from 'react'
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from "../utils.js/FetchData";
import HorizontalScrollbar from './HorizontalScrollbar';


export default function SearchExercies({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("")

  const [bodyParts, setBodyParts] = useState([])
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData();
  }, [])
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      const searchedExercises = exerciseData.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('')
      setExercises(searchedExercises)
      console.log(exerciseData)
    }
  }
  return (
    <Stack alignItems='center' mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }} mb="50px" textAlign="center">
        Awesome Execises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input:
            {
              fontWeight: '700'
              , border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          placeholder="search Exercise"
          type="text"

        />
        <Button className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff'
            , textTransform: 'none',
            width: { lg: '200px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            right: '0',
            position: 'absolute'
          }} onClick={handleSearch}>Search</Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {/* <Hori data={bodyParts}/> */}
        <HorizontalScrollbar data={bodyParts}
          bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}
