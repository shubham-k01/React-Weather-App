import React , {useContext} from 'react'
import { Typography, Box } from '@mui/material'
import SearchContext from '../contexts/Search/SearchContext'
import location from '../location.png'

const Weather = () => {
    const s = useContext(SearchContext)
    const pred =[
        {prop:'Local time',value:s?.data?.location?.localtime},
        {prop: 'Temperature in C',value: s?.data?.current?.temp_c},
        {prop:'Temperature in F',value: s?.data?.current?.temp_f},
        {prop:'Prediction',value: s?.data?.current?.condition?.text},
        {prop:'pr_icon',value: s?.data?.current?.condition?.icon},
        {prop:'Wind in MPH',value: s?.data?.current?.wind_mph},
        {prop:'Wind in KPH',value: s?.data?.current?.wind_kph},
        {prop: 'Wind Degree',value: s?.data?.current?.wind_degree},
        {prop: 'Wind Direction',value: s?.data?.current?.wind_dir},
        {prop: 'Humidity',value:s?.data?.current?.humidity},
        {prop: 'Clouds',value: s?.data?.current?.cloud},
        {prop: 'Feelslike(C)',value: s?.data?.current?.feelslike_c},
        {prop: 'Feelslike(F)',value: s?.data?.current?.feelslike_f}
      ]

      const capitalize = (s)=>{
        return s[0].toUpperCase()+s.slice(1)
      }
  return (
    <Box display='flex' sx={{justifyContent:'center',alignItems:'center',backgroundImage:'url(https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPositionX:'center',backgroundPositionY:'center',height:'86vh'}}>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'500px',width:'700px',backgroundColor:'orange',border:'5px solid brown',borderRadius:'50px',opacity:'0.7'}}>
            
          {s.loading===true ? (<div>
        <img src={location} alt=""  style={{height:'150px',width:'150px'}}/>
        <Typography variant='h6' sx={{margin:{md:'15px',sm:'10px'}}}>
            Loading...
        </Typography>
        </div>): 
        (s.data.location ? (<div>
            <Typography variant='h4'>
            {capitalize(s.search)}
            </Typography>
            <div>
            {pred.map((element) => {
            if(element.prop==='pr_icon'){
                return (<Typography variant='body1' key={element.prop}>
                <span>Most Likely : </span>
                <img src={element.value} alt="" style={{width:'25px',height:'20px'}}/>
                </Typography>)
            }
            else{
                return (<Typography variant='body1' key={element.prop}>
                <span>{element.prop} : </span>
                <span>{element.value}</span>
            </Typography>)
            }
            })}
            </div>
        </div>):(
            <div>
                <Typography variant='h2'>
                    ERROR
                </Typography>
                <Typography>
                    Please provide a valid input
                </Typography>
            </div>
        ))}
        
              
          </Box>
    </Box>
    

  )
}

export default Weather