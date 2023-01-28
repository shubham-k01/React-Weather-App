const fetchAuto = async(str)=>{
    const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${str}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '745046de4bmsh909f8c8f44e661dp165c94jsne2589e585634',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try{
      const data = await fetch(url, options);
      const parsedData = await data.json();
      return parsedData
    }
    catch(err){
      console.log(err);
    }

}
 export default fetchAuto;