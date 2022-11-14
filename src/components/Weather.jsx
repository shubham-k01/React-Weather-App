import React , {useContext} from 'react'
import { Typography, Box, Stack } from '@mui/material'
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
    <Box sx={{background: 'linear-gradient(90deg, rgba(27,131,112,1) 0%, rgba(0,212,255,1) 100%)',height:'86vh'}}>
          <Box>
            {s.loading===true ? (<div>
            <img src={location} alt=""  style={{height:'150px',width:'150px'}}/>
            <Typography variant='h6' sx={{margin:{md:'15px',sm:'10px'}}}>
                Loading...
            </Typography>
            </div>): 
            (s.data.location ? (
            <div>
                <Typography variant='h4' color='#000' sx={{fontSize:'50px'}}>
                    {capitalize(s.search)}
                </Typography>
                <Stack sx={{width:'700px',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Stack direction='row' sx={{width:'350px',justifyContent:'space-evenly',alignItems:'center',marginRight:'15px'}}>
                        <Typography variant='body1' sx={{fontSize:'75px'}}>{pred[1].value}°C </Typography>
                        <img src={pred[4].value} alt="" style={{height:'150px',width:'155px',opacity:'1'}}/>
                    </Stack>
                    <Typography variant='body1'>
                        Local Time : {pred[0].value}
                    </Typography>
                </Stack>
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