import React, {Component} from 'react'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            toggleDropdown: false
        }
    }

    menuDropdown = () => {
        this.setState({
            toggleDropdown: !this.state.toggleDropdown
        })
    }


    render() {
      return (
        <header>
            <div className='icons'>
                <button onClick={this.menuDropdown} className='header-button'>MENU &#9776; </button>
                <div><img className='sunny' src='https://static.euronews.com//weather/icons/SVGs/wsymbol_0001_sunny.svg'/></div>
                <div><img className='cloudy' src='https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png'/></div>
                <div><img className='snow' src='https://getdrawings.com/free-icon/cloudy-weather-icon-73.png'/></div>
                <div><img className='windy' src='https://cdn4.iconfinder.com/data/icons/weather-conditions/512/cloud_wind-512.png'/></div> 
            </div>
            <nav className={this.state.toggleDropdown ? 'clicked-menu move-down' : 'clicked-menu'}>
                <p className='dropdown-items'>New York</p>
                <p className='dropdown-items'>Miami</p>
                <p className='dropdown-items'>Seattle</p>
            </nav>
            
        </header>
    )  
    }
    
}

export default Header