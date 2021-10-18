import {useState, useEffect} from "react";

// kinda hacky, but don't really want a global store yet. So use a global variable
const globalObj: {[key:string] : any} = {}

export const useFetch = <T>(url: string) => {
    const [status, setStatus] = useState(!globalObj[url] ? 'idle': 'fetched');
    const [data, setData] = useState<T>(!globalObj[url] ? undefined : globalObj[url]);

    useEffect(() => {
        const fetchData = async () => {
            if (!!globalObj[url]) {
                const data = globalObj[url];
                setData(data);
                setStatus('fetched');
            } else {
                setStatus('fetching');
                const response = await fetch(url);
                const data = await response.json();
                globalObj[url] = data; // set response in cache;
                setData(data);
                setStatus('fetched');
            }
        };

        fetchData();
    }, [url]);

    return { status, data };
};