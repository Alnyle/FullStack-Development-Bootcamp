import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const github = () => {

//   const [data, setData] = useState([]);

const data = useLoaderData();

//   useEffect(() => {

//     const fetchData = async() => {
//         try {
//             const response = await fetch('https://api.github.com/users/hiteshchoudhary');  
//             const myData = await response.json();
//             setData(myData);
//         } catch(error) {
//             console.error(error);
//         }
//     }

//     fetchData();

//   }, []);

//   useEffect(() => {
//     console.log(data);
//   }, [data])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        github followers: {data.followers}
        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default github


export const githubInfoLoader = async() => {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');  
        return await response.json();
        
    } catch(error) {
        console.error(error);
    }
}