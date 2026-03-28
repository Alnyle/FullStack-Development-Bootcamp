 
```js
import { useState, useEffect } from "react"


const Card = ({title}) => {


  const [count, setCounter] = useState(0)
  // like brain of component use it to mange state of componet
  const [hasLiked, setHasLiked] = useState(false)

  // OM. When the component gets successfully inserted into the DOM, the component is said to be mounted.
  // arg: callback function and dependancy array "if variable change it's state triger useEffect callback function"
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked]);

  // this callback function only run once when component get mount
  useEffect(() => {
    console.log('CARD RENDERED')
  }, [])

  function handleCounter() {
    setCounter(count + 1)
  }

  return (
    <div className="card" onClick={handleCounter}>
      <h2>{title} - {count}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍" }
      </button>
    </div>
  )
}

const App = () => {

  

  return (
    
    <div className='card-container'>
      <Card title="Star war"/>
      <Card title="Naturo" />
      <Card title="Wind breaker" />
    </div>
  )
}

export default App

```