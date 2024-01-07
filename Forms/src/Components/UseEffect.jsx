import { useEffect, useState } from "react"

const UseEffect = () => {
    
    const [data, setData] = useState(null);
    
    // const description = data["description"];
    useEffect(()=>{
        ( async ()=>{

           let response = await fetch("https://dummyjson.com/products/1");
           let json = await response.json();
           setData(json)
        }) 
        
        ()
    }, [])

  
  return (
    <>
    <div>UseEffect</div>
    <div>
        
        {data ? JSON.stringify(data["description"]) : "Loading..."}
    </div>

    </>
  )
}

export default UseEffect