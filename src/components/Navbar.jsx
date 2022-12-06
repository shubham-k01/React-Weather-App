import React , {useContext , useRef} from 'react'
import {Stack , Paper ,IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'
import logo from '../logo.png'
import { Link, useNavigate } from 'react-router-dom';
import SearchContext from '../contexts/Search/SearchContext'
import fetchData from '../fetchData'

const Navbar = () => {

  const s = useContext(SearchContext);
  const navigate = useNavigate();
  const r = useRef(null);

  const handleClick = async ()=>{
    const value = r.current.value || 'Mumbai';
    // console.log(value);
    await s.setLoading(true)
    // console.log(s.loading);
    await s.setSearch(value);
    // console.log(s.search);
    const d = await fetchData(value);
    console.log(d)
    await s.setLoading(false)
    // console.log(s.loading);
    await s.setData(d)
    navigate('/weather')
  }
  const handleEnter = (event)=>{
    // get the target button by event.target
    event.target.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        handleClick();
      }})
  }
  return (
    <Stack direction='row' sx={{alignItems:'center',justifyContent:'space-between',position:'sticky',
    background: 'linear-gradient(90deg, rgba(27,131,112,1) 0%, rgba(0,212,255,1) 100%)'
    }}>
        <Link to='/'>
          <img src={logo} alt="" style={{width:'200px',height:'105px',marginLeft:'25px'}}/>
        </Link>
        <Paper
        component='form'
        sx={{width:'300px',borderRadius:'20px',height:'25px',border:'2px solid blue',display:'flex',justifyContent:'space-between'}}>
            <input type="text" onKeyDown={handleEnter} placeholder='Search...' style={{border:'none',outline:'none',marginLeft:'10px'}} ref={r}/>
            <IconButton  onClick={handleClick}>
                <Search sx={{color:'red'}}/>
            </IconButton>
        </Paper>
    </Stack>
  )
}

export default Navbar