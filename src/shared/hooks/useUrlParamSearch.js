import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useUrlParamSearch = (urlParamName) => {
  const [urlParamValue, setUrlParamValue] = useState('')
  const history = useHistory();
  
  useEffect(() => {
    const stringUrlSearchParams = window.location.search;
    let urlSearchParams = new URLSearchParams(stringUrlSearchParams);
    let urlParamValueFound = urlSearchParams.get(urlParamName)
    setUrlParamValue(urlParamValueFound)
    console.log('history', history)
  }, [history.location.search])

  return { urlParamValue }
}

export default useUrlParamSearch;