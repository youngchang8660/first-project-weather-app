import React, {Component} from 'react'
import Header from './Components/Header'
import GetWeather from './Components/GetWeather'
import axios from 'axios'
import Display from './Components/Display'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div className='body'>
        <Header />
        <GetWeather />
      </div>
    )
  }
}

export default App
