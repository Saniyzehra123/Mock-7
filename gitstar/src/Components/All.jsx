 
  import React, { useEffect } from 'react'
 
  import axios from 'axios';
import { useState } from 'react';

// const getGithubUsersall =  (page=1) => {
//     return axios("https://api.github.com/search/repositories?q=stars:%3E1+language:all", {
//         method:"GET",
//         params: {
            
//             per_page: 5,
//             page 
//         }       
//     }) 
// } 

export default function All() {
    const [data, setData]  = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:all')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  } , []);

  console.log("user",data);

//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState(false);


//           useEffect(() => {
//             setLoading(true);
//              data(page)

//             .then(res => {
//                 setLoading(false)
//                 setData(res.data);
//                 setError(true);
//             })
//             .catch(err => {
//                 setLoading(false);
//                 setError(true);
//                 console.log(err)
//             })
//             console.log(2)
//         }, [ page]);
            
//         console.log(3)

  return (
    <div>
       
             
               {/* {git.map(item => {
                  return  <div  item={item} key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.avatar_url}</p>
                        <p>{item.stargazers_count}</p>
                       
                        <p>{item.language}</p>
                        <p>{item.forks_count}</p>
                    </div>
                })}   */}

           
        
         
        
      
    </div>
  )
}
