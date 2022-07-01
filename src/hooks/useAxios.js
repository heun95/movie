import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const callUrl = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
        setLoading(false);
      } catch {
        setError("error");
      } finally {
        
      }
    };
    useEffect(() => {
      callUrl();
    }, []);
    
    return { data, loading, error };
}

export default useAxios;