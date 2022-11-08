import React from 'react'
import { useContext } from 'react'
import { Typography ,Box} from '@mui/material'
import location from '../location.png'
import SearchContext from '../contexts/Search/SearchContext'

const Main = () => {
  const s = useContext(SearchContext)

  return (
    <Box display='flex' sx={{justifyContent:'center',alignItems:'center',backgroundImage:'url(https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_960_720.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPositionX:'center',backgroundPositionY:'center',height:'86vh'}}>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'500px',width:'700px',backgroundColor:'orange',border:'5px solid brown',borderRadius:'50px',opacity:'0.7'}}>
            {s.loading && 
            <div>
              <img src={location} alt=""  style={{height:'150px',width:'150px'}}/>
              <Typography variant='h6' sx={{margin:{md:'15px',sm:'10px'}}}>
                Loading...
              </Typography>
            </div>
            }
            {
              s.search && 
              <div>
                

              </div>
            }
          </Box>
    </Box>
  )
}

export default Main