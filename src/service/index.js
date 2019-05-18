import axios from 'axios';


export const getList = (keyword, offset=0) => {
    const res = axios({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search',
      params: {
        api_key: 'BfmB0JOT7JOaRjSsHk1mE48EkrYuBqbM',
        q: keyword,
        offset: offset,
        limit: 10,
        
      },
      headers: {
        'Content-Type': 'application/json',
      },
    
    });

    return res;
    
  };
