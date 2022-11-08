import React from 'react'
import { useContext } from 'react'
import { Typography ,Box} from '@mui/material'
import location from '../location.png'
import SearchContext from '../contexts/Search/SearchContext'

const Main = () => {
  const s = useContext(SearchContext)
  const pred =[
    {prop:'Local time',val:s?.search?.location?.localtime},
    {prop: 'Temperature in C',value: s?.search?.current?.temp_c},
    {prop:'Temperature in F',value: s?.search?.current?.temp_f},
    {prop:'Prediction',value: s?.search?.current?.condition?.text},
    {prop:'pr_icon',value: s?.search?.current?.condition?.icon},
    {prop:'Wind in MPH',value: s?.search?.current?.wind_mph},
    {prop:'Wind in KPH',value: s?.search?.current?.wind_kph},
    {prop: 'Wind Degree',value: s?.search?.current?.wind_degree},
    {prop: 'Wind Direction',value: s?.search?.current?.wind_dir},
    {prop: 'Humidity',value:s?.search?.current?.humidity},
    {prop: 'Clouds',value: s?.search?.current?.cloud},
    {prop: 'Feelslike(C)',value: s?.search?.current?.feelslike_c},
    {prop: 'Feelslike(F)',value: s?.search?.current?.feelslike_f}
  ]

  return (
    <Box display='flex' sx={{justifyContent:'center',alignItems:'center',backgroundImage:'url(https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPositionX:'center',backgroundPositionY:'center',height:'86vh'}}>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'500px',width:'700px',backgroundColor:'orange',border:'5px solid brown',borderRadius:'50px',opacity:'0.7'}}>
            {s.loading ? (<div>
              <img src={location} alt=""  style={{height:'150px',width:'150px'}}/>
              <Typography variant='h6' sx={{margin:{md:'15px',sm:'10px'}}}>
                Loading...
              </Typography>
            </div>) : 
            (<div>
                <Typography variant='h4'>
                  {s.search}
                </Typography>
                {pred.map((element) => {
                  if(element.name==='pr_icon'){
                    return (<Typography variant='body1' key={element.name}>
                      <span>{element.name} : </span>
                      <img src={element.value} alt="" style={{width:'25px',height:'20px'}}/>
                    </Typography>)
                  }
                  else{
                   return (<Typography variant='body1' key={element.name}>
                    <span>{element.name} : </span>
                    <span>{element.value}</span>
                  </Typography>)
                  }
                })}
              </div>)
            } 
              
          </Box>
    </Box>
  )
}

export default Main