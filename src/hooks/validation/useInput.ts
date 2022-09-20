import {  useState, useEffect } from "react"

export const useInput = (obj: any) => {
    const [error, setError] = useState<boolean>(false)
    useEffect(()=>{
        obj.forEach((item: any) =>{
            console.log(item)
            if(item.length === 0 || item === 0){
                setError(true)
            }else{
                setError(false)
            }
        })
    }, [obj])
    return {
        error
    }
    
}

