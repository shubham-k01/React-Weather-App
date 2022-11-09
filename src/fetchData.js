import axios from 'axios';

 const fetchData = async(st)=>{
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: st || 'Mumbai'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_WEATHER_API_KEY,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      axios.request(options).then(function(response){
          console.log(response.data);
        //   return response.data;
      }).catch(function (error) {
          console.error(error);
      });
}

export default fetchData;