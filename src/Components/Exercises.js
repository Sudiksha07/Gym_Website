import { Box, Stack, Typography } from '@mui/material';

export default function Exercises({ exercises,setExercises,bodyPart }) {
  console.log(exercises);

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' }}}
     mt="50px" p= '20px' >
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exercises.map((exercise, index) => (
          <p >{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
}
