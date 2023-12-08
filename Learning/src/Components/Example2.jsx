import React from 'react';

const example2Data = [
    {
      "textTitle": "Software Developer",
      "age": 20
    },
    {
      "textTitle": "FullStack Developer",
      "age": 21
    },
    {
      "textTitle": "BackEnd Developer",
      "age": 22
    }
  ]
  

const Example2 = () => {
    const name = "IBM"
  return (
    <div>
        <h1>This is the example 2 code base.</h1>
        <h1 style={{textAlign: "center", color:"white", backgroundColor:"black"}}>{name}</h1>
        {example2Data.map((data, index) => {
            return (
              <>
              
                <div style={{backgroundColor:"orange"}} key={index}>
                    <h2>{data.textTitle}</h2>
                    <p>{data.age}</p>
                </div>
                <div style={{backgroundColor:"red"}} key={index}>
                    <h2>{data.textTitle}</h2>
                    <p>{data.age}</p>
                </div>
                </>
            )
        })}
    </div>
  )
}

export default Example2
