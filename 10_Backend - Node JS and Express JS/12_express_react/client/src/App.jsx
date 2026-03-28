import React from 'react'
import { useState, useEffect } from "react"

const App = () => {

  const [youtubeCTA, setYoutubeCTA] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch("http://localhost:8000/api/youtube");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setYoutubeCTA(data);

      } catch(error) {
        console.log(`Error fetching data: ${error.message}`);
      }
    }

    fetchData();
  }, [])

  return (
    <div>
      <h1>{youtubeCTA.like}</h1>
      <h2>{youtubeCTA.subscribe}</h2>
    </div>
  )
}

export default App