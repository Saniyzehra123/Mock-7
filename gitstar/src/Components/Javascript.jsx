 
import React, { useEffect } from 'react'
import { useState } from 'react';
export default function Javascript() {


    const [js, setJs] = useState([]);


    useEffect(() => {
      fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:css')
        .then(response => response.json())
        .then(data => setJs(data))
        .catch(error => console.log(error))
    } , []);
  
    console.log("javascript",js);


  return (
    <div>
      
    </div>
  )
}
