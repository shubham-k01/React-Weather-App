import React , {useContext} from 'react'
import { Typography, Box, Stack } from '@mui/material'
import SearchContext from '../contexts/Search/SearchContext'
import location from '../location.png'
import weatherIcons from '../utilities/constants'

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
    <Box sx={{background: 'linear-gradient(90deg, rgba(27,131,112,1) 0%, rgba(0,212,255,1) 100%)',height:'100vh'}}>
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
                    {capitalize(s.data.location.name)}
                </Typography>
                {/* <Stack sx={{width:'700px',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Stack direction='row' sx={{width:'350px',justifyContent:'space-evenly',alignItems:'center',marginRight:'15px'}}>
                        <Typography variant='body1' sx={{fontSize:'75px'}}>{pred[1].value}°C </Typography>
                        <img src={pred[4].value} alt="" style={{height:'150px',width:'155px',opacity:'1'}}/>
                    </Stack>
                    <Typography variant='body1'>
                        Local Time : {pred[0].value}
                    </Typography>
                </Stack> */}
            <div>
            {/* {pred.map((element) => {
            if(element.prop==='pr_icon'){
                return (<Typography variant='body1' key={element.prop}>
                <span>Most Likely : </span>
                <img src={element.value} alt="" style={{width:'25px',height:'20px'}}/>
                </Typography>)
            }
            else{
                if(element.prop in weatherIcons){
                    return (<Typography variant='body1' key={element.prop}>
                        <span>{element.prop}</span>
                        <span>{weatherIcons[element.prop]}: </span>
                        <span>{element.value}</span>
                        </Typography>)
                }

            }
            })} */}
            <Box sx={{margin:{md:'25px',sm:'10px'},width:'80vw',height:{xs:'85vh',md:'55vh',sm:'75vh'},backgroundColor:'#99ff99',boxShadow:'10px 20px 10px',borderRadius:'50px',margin:'auto'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Typography variant='h4' sx={{textAlign:'center'}}>
                            Prediction :
                        </Typography>
                        <span><img src={pred[4].value} alt="" style={{width:'75px',height:'85px'}}/></span>    
                    </div> 
                <Typography variant='h6'>
                            {pred[0].prop} <span><i class="fa-solid fa-clock"></i></span> : {pred[0].value}
                </Typography>
                <Stack sx={{display:'flex',flexDirection:{xs:'column',md:'row'},width:'95%',justifyContent:'center',alignItems:'center',marginTop:{sm:'15px',md:'25px'}}}>
                    <Box sx={{paddingRight:{xs:'20px',md:'35px'},borderRight:{md:'2px solid black'},borderBottom:{xs:'2px solid black',md:'0'},paddingBottom:{xs:'25px'}}}>
                        <Stack sx={{flexDirection:{sm:'column',md:'row'},marginRight:{sm:'5px',md:'25px'}}}>
                        <i className="fa-solid fa-temperature-three-quarters fa-10x" style={{color:' #ff9900'}}></i>
                        <Box sx={{margin:'auto',marginLeft:{md:'20px',xs:'5px'}}}>
                            <Typography variant='h6'>
                                {pred[1].prop} : {pred[1].value}
                            </Typography>
                            <Typography variant='h6'>
                                {pred[2].prop} : {pred[2].value}
                            </Typography>
                            <Typography variant='h6'>
                                {pred[11].prop} : {pred[11].value}
                            </Typography>
                            <Typography variant='h6'>
                                {pred[12].prop} : {pred[12].value}
                            </Typography>
                        </Box>
                        </Stack>
                    </Box>
                    <Box sx={{paddingLeft:{xs:'20px',md:'35px'},paddingTop:{xs:'25px',md:'0px'}}}>
                        <Stack sx={{flexDirection:{sxs:'column',md:'row'}}}>
                        <i className="fa-solid fa-wind fa-10x" style={{color:' #6666ff'}}></i>
                            <Box sx={{margin:'auto',marginLeft:{md:'20px',xs:'5px'}}}>
                                <Typography variant='h6'>
                                    {pred[5].prop} : {pred[5].value}
                                </Typography>
                                <Typography variant='h6'>
                                    {pred[6].prop}  : {pred[6].value}
                                </Typography>
                                <Typography variant='h6'>
                                    {pred[7].prop} : {pred[7].value}
                                </Typography>
                                <Typography variant='h6'>
                                    {pred[8].prop} : {pred[8].value}
                                </Typography>

                            </Box>
                        </Stack>
                    </Box>
                </Stack>
                <Stack>

                </Stack>

            </Box>
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