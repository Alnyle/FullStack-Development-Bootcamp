import React from 'react'
import ReactDOM from 'react-dom/client'

import React from 'react'

const App = () => {
  return (
    <div>
        <h1>Hello React</h1>
    </div>
  )
}

export default App


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)