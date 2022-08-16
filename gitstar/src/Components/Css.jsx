import React, { useEffect, useState } from 'react'

export default function Css() {

    const [git, setGit] = useState([]);


  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:css')
      .then(response => response.json())
      .then(data => setGit(data))
      .catch(error => console.log(error))
  } , []);

  console.log("css",git);
  return (
    <div>
      
    </div>
  )
}
