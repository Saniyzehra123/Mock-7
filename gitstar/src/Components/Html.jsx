import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Html() {

    const [html, setHtml] = useState([]);


    useEffect(() => {
      fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:html')
        .then(response => response.json())
        .then(data => setHtml(data))
        .catch(error => console.log(error))
    } , []);
  
    console.log("html",html);


  return (
    <div>
      
    </div>
  )
}
