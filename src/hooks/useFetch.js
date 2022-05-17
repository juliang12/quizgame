import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [loading, setLoading] = useState(false)
    let controller = new AbortController();

    const fetchData = async (axiosCall)=>{
        if(axiosCall.controller) controller = axiosCall.controller;
        setLoading(true)
        let result = {};
        try {
            result = await axiosCall 
        } catch (error) {
        setLoading(false)
        throw error    
        }
        setLoading(false)
        return result
    }

    const cancelEndpoint = ()=>{
        setLoading(false)
        controller && controller.abort();
    }

    useEffect(() => {
        return ()=>{
            cancelEndpoint()
        }  
    }, [])

    return{loading, fetchData}
    
    
}

export {useFetch}