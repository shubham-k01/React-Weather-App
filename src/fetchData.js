import axios from 'axios';

 const fetchData = async(st)=>{

  const url = 'https://weatherapi-com.p.rapidapi.com/current.json'
  const options = {
    method: 'GET',
    // url : 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: st || 'Mumbai'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try{
    // axios is a promise based HTTP-client so we can use  async await , we can also use the promise based approach
  //  and in the axios response we get data in data attribute 
  const { data } = await axios.get(url,options)

  // This is another way to use axios to get data
  // const data =  axios.request(options).then((res)=>{return res.data}).catch((err)=>{console.log(err)})

  // when we use fetch API we need to convert the HTTP reponse to json
  // const parsed = await data.json();
  return data;
  }
  catch(err){
    const {code, config, message} = err
    return {code, config, message}
  }
}

export default fetchData;