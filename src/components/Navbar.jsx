import React , {useContext , useRef} from 'react'
import {Stack , Paper ,IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'
import logo from '../logo.png'
import SearchContext from '../contexts/Search/SearchContext'
import fetchData from '../fetchData'

const Navbar = () => {

  const s = useContext(SearchContext);
  const r = useRef(null);

  const handleClick = async ()=>{
    const value = r.current.value || 'Mumbai';
    s.setLoading(true)
    s.setSearch(value);
    const data = await fetchData(s.search);
    s.setLoading(false)

  }
  return (
    <Stack direction='row' sx={{alignItems:'center',justifyContent:'space-between',position:'sticky',
    background: 'linear-gradient(90deg, rgba(27,131,112,1) 0%, rgba(0,212,255,1) 100%)'
    }}>
        <img src={logo} alt="" style={{width:'200px',height:'105px',marginLeft:'25px'}}/>
        <Paper
        component='form'
        sx={{width:'300px',borderRadius:'20px',height:'25px',border:'2px solid blue',display:'flex',justifyContent:'space-between'}}>
            <input type="text" placeholder='Search...' style={{border:'none',outline:'none',marginLeft:'10px'}} ref={r}/>
            <IconButton  onClick={handleClick}>
                <Search sx={{color:'red'}}/>
            </IconButton>
        </Paper>
    </Stack>
  )
}

export default Navbar