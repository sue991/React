import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data);
        })
    }, [url]); //렌더링 직후 딱 한번만 실행됨


    return data;
}

export default useFetch;