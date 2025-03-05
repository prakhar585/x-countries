import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Card from './Components/Card';

function App() {
  const [maps, setMaps] = useState([]);


  //fetch the data
  useEffect(()=>{
    const getData= async () =>{
      try{
        const response = await axios.get(`https://xcountries-backend.azurewebsites.net/all`);
        setMaps(response.data);
        
      }catch(error){
        console.log(error);
      }
    }


    getData();
  },[])




  return (
      <>
    <Grid container spacing={1}>
     
        {maps.map((item) => (
        <Grid sx={{height:'250px', padding:'10px'}} size={{ xs: 2, sm: 4, md:3 }}>
          <Card key={item.name} mapObj={item}/>
        </Grid>
        ))}
    </Grid>
      
      </>
    
  );
}

export default App;
