import axios from 'axios';

let isRequset = false;

export const getList = (keyword, offset=0) => {
    
    if(isRequset) return false;
    isRequset = true;
    console.log(offset)
    let res = axios({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search',
      params: {
        api_key: '5jAu4p6gh8P4bAUJzhn99DWSKcKZS14r',
        q: keyword,
        offset: offset,
        limit: 10,
        
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.then(()=>{isRequset = false;})
    return res;
    
  };
