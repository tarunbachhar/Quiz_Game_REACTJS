import React from 'react'
import ReactDOM from 'react-dom'
import QuestionAnswer from './components/QuestionAnswer'
import './styles/style.css'

window.React = React
class App extends React.Component {
  render(){
    return(
      <div>
        <QuestionAnswer/>
      </div>
    )
}
}


ReactDOM.render(<App/>,document.getElementById('root'))
