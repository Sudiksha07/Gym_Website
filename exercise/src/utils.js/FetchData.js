import axios from "axios"
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '353cd8d301mshab75c8336f92a20p1e1e5bjsn664fa4f5550d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

  }

};


export const fetchData=async(url,options)=>{
           const response = await fetch(url,options);
           console.log(response)
           const data = await response.json()
           return data;
}