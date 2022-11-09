// import axios from 'axios';

 const fetchData = async(st)=>{
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: st || 'Mumbai'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    const data = await fetch(options);
    const parsed = await data.json();
    console.log(parsed);
    return parsed;
}

export default fetchData;