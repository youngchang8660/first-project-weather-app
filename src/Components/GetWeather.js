import React, { Component } from "react";
import Display from "./Display";
import axios from "axios";

class GetWeather extends Component {
  constructor() {
    super();
    this.state = {
      newYork: [],
      miami: [],
      seattle: [],
      newWeather: "",
      userInputCity: '',
      userInputDay: '',
      userInputWeather: '',
      userInputPrecipitation: '',
      userInputHumidity: '',
      userInputTemp: ''
    };
    this.deleteWeather = this.deleteWeather.bind(this);
    this.handleChangeOne = this.handleChangeOne.bind(this)
    this.handleChangeTwo = this.handleChangeTwo.bind(this)
    this.handleChangeThree = this.handleChangeThree.bind(this)
    this.handleChangeFour = this.handleChangeFour.bind(this)
    this.handleChangeFive = this.handleChangeFive.bind(this)
    this.handleChangeSix = this.handleChangeSix.bind(this)
  }

  clickCity = city => {
    axios.get(`/api/weather/${city}`).then(res =>
      this.setState({
        [city]: res.data
      })
    );
  };

  deleteWeather(city) {
    axios.delete(`api/weather/${city}`).then(res => {
      this.setState({
        [city]: res.data
      });
    });
  }

  editWeather = (id, body, city) => {
    axios.put(`/api/weather/${id}`, body).then(res => {
      this.setState({
        [city]: res.data
      });
    });
  };

  addNewWeather = (city, body) => {
      axios.post(`/api/weather/${city}`, body).then (res => {
          this.setState({
              [city]: res.data
          })
      })
  }

  handleChangeOne(e) {
    this.setState({
        userInputCity: e.target.value,
    })
  }
  handleChangeTwo(e) {
    this.setState({
        userInputDay: e.target.value,
    })
  }
  handleChangeThree(e) {
    this.setState({
        userInputWeather: e.target.value,
    })
  }
  handleChangeFour(e) {
    this.setState({
        userInputPrecipitation: e.target.value,
    })
  }
  handleChangeFive(e) {
    this.setState({
        userInputHumidity: e.target.value,
    })
  }
  handleChangeSix(e) {
    this.setState({
        userInputTemp: e.target.value,
    })
  }
  

  render() {
      console.log(this.state.userInputCity)
      console.log(this.state.userInputDay)
      console.log(this.state.userInputWeather)
      console.log(this.state.userInputPrecipitation)
      console.log(this.state.userInputHumidity)
      console.log(this.state.userInputTemp)
    const newYorkWeatherDisplay = this.state.newYork;
    // console.log(newYorkWeatherDisplay)
    const miamiWeatherDisplay = this.state.miami;
    // console.log(miamiWeatherDisplay)
    const seattleWeatherDisplay = this.state.seattle;
    // console.log(seattleWeatherDisplay)
    return (
      <body>
        <div class="body-images">
          <div
            onClick={() => this.clickCity("newYork")}
            className="newYork-box"
          >
            <div className="text">New York</div>
          </div>
          <div onClick={() => this.clickCity("miami")} className="miami-box">
            <div className="text">Miami</div>
          </div>
          <div
            onClick={() => this.clickCity("seattle")}
            className="seattle-box"
          >
            <div className="text">Seattle</div>
          </div>
        </div>
        <div className="addNewDay">
          <input onChange={e => this.handleChangeOne(e)} className="add-input" placeholder="City Name" />
          <input onChange={e => this.handleChangeTwo(e)} className="add-input" placeholder="Day" />
          <input onChange={e => this.handleChangeThree(e)} className="add-input" placeholder="Weather" />
          <input onChange={e => this.handleChangeFour(e)} className="add-input" placeholder="Precipitation" />
          <input onChange={e => this.handleChangeFive(e)} className="add-input" placeholder="Humidity" />
          <input onChange={e => this.handleChangeSix(e)} className="add-input" placeholder="Temperature" />
          <button onClick={() => this.addNewWeather("newYork")}>Add</button>
        </div>
        <div className="clear-buttons">
          <button
            onClick={() => this.deleteWeather("newYork")}
            className="clear"
          >
            New York Clear
          </button>
          <button onClick={() => this.deleteWeather("miami")} className="clear">
            Miami Clear
          </button>
          <button
            onClick={() => this.deleteWeather("seattle")}
            className="clear"
          >
            Seattle Clear
          </button>
        </div>
        {newYorkWeatherDisplay && newYorkWeatherDisplay[0] && (
          <Display
            deleteWeather={this.deleteWeather}
            clickCity={this.clickCity}
            cityInformation={newYorkWeatherDisplay}
            editWeather={this.editWeather}
          />
        )}
        {miamiWeatherDisplay && miamiWeatherDisplay[0] && (
          <Display
            deleteWeather={this.deleteWeather}
            clickCity={this.clickCity}
            cityInformation={miamiWeatherDisplay}
          />
        )}
        {seattleWeatherDisplay && seattleWeatherDisplay[0] && (
          <Display
            deleteWeather={this.deleteWeather}
            clickCity={this.clickCity}
            cityInformation={seattleWeatherDisplay}
          />
        )}
      </body>
    );
  }
}

export default GetWeather;
