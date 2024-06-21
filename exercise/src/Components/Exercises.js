import { useEffect, useState } from "react";
import { Pagination } from "@mui/material/Pagination";
import {Box,Stack,Typography} from '@mui/material/';


export default function Exercises({exerices,setExercises,bodyPart  }) {
  console.log(exerices)
  return (
<Box id="exercises"
sx={{mt:{lg:'110px'}}}
mt="50px"
p='20px'>
<Typography variant="h3" mb="46px">
  Showing Result
</Typography>
<Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
flexWrap="wrap" justifyContent="center">


     {exerices?.map((exercise,index)=>(
       <p>{exercise.name}</p>
     ))}
</Stack>

</Box>
  )
}
