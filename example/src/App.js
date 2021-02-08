import React from 'react'

import { ExampleComponent } from 'example'
import { RandomComponent } from 'example'
import 'example/dist/index.css'

const App = () => {
  return <React.Fragment>
    
    <ExampleComponent text="Create React Library Example 😄" />
    <RandomComponent text1={'yo'} text2={'yo2'}/>
    </React.Fragment>
}

export default App
