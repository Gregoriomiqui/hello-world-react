import queryString from 'query-string';

//config
import config from '../../config';

export function apiEndpoint(endpoint, qs){
  let query='';

  if (qs){
    query = `?${qs}`;
  }

  return `${config.api.url}&{endpoint}&{query}`;


}

export function apiFetch(endpoint, options={}, query=false){
  let qs;
  if (query){
    qs=queryString.stringify(query);
  }

  const getPromise = async () =>{
    try{
      const fecthOptions = apiOptions(options);
      const fecthEnpoint = apiEndpoint(endpoint,qs);
      const response = await fecth(fecthEnpoint, fecthOptions);
      return response.json();
    }catch (e){
      throw e;
    }

  };

  return getPromise();

}

export function apiOptions(options={}){
  const {
    method ='GET',
    headers={
      'Content-Type':'application/json'
    },
    body=false
  }= options;

  const newOptions ={
    method,
    headers,
    credentials:'include'
  };

  if (body){
    newOptions.body=body;
  }

  return newOptions;
}
