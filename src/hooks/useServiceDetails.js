import { useEffect, useState } from "react";

const useServiceDetails =servicesId=>{
    const [service ,setService]=useState({});

    useEffect(()=>{
        const url=`https://mighty-ocean-08356.herokuapp.com/service/${servicesId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data));

    },[servicesId]);
    return [service]
}
export default useServiceDetails;