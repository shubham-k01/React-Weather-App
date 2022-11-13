import React from 'react'
import { useContext } from 'react'
import { Typography ,Box} from '@mui/material'
import SearchContext from '../contexts/Search/SearchContext'

const Home = () => {
  const s = useContext(SearchContext)

  return (
    <Box display='flex' sx={{justifyContent:'center',alignItems:'center',backgroundImage:'url(https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPositionX:'center',backgroundPositionY:'center',height:'86vh'}}>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'500px',width:'700px',backgroundColor:'orange',border:'5px solid brown',borderRadius:'50px',opacity:'0.7'}}>
            <Typography variant='h4'>Welcome To Wheather</Typography>
            <Typography variant='body1' sx={{width:'252px'}}>
              {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-face-smile" /> */}
              Search for weather of any city,town or village and get results within seconds
            </Typography>
              
          </Box>
    </Box>
  )
}

export default Home