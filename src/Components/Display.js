import React, { Component } from "react";
import axios from "axios";

class Display extends Component {
  constructor() {
    super();
    this.state = {
        userInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
      this.setState({userInput: event.target.value})
  }

  render() {
    //   console.log(this.props.cityInformation)
    return (
      <body className="display-body">
          <div className="city-box">
            <div className="day-one-image">
              <div className="day-one">
                <div className="text-box">
                  <p className="text-city">
                    {this.props.cityInformation[0].city}
                  </p>
                  <p className="text-day">
                    {this.props.cityInformation[0].day}
                  </p>
                  <p className="text-weather">
                    {this.props.cityInformation[0].weather}
                    <input onChange={event => this.handleChange(event)} className='edit-weather'/>
                    <button onClick={() => this.props.editWeather(this.props.cityInformation[0].id, {weather: this.state.userInput, city: "newYork"}, "newYork")}>Edit</button>
                  </p>
                  <p className="text-temp">
                    {this.props.cityInformation[0].temp}
                  </p>
                  <p className="text-prec">
                    Precipitation: {this.props.cityInformation[0].precipitation}
                  </p>
                  <p className="text-humidity">
                    Humidity: {this.props.cityInformation[0].humidity}
                  </p>
                </div>
              </div>
            </div>
            <div className="day-two-image">
              <div className="day-two">
                <div className="text-box">
                  <p className="text-city">
                    {this.props.cityInformation[1].city}
                  </p>
                  <p className="text-day">
                    {this.props.cityInformation[1].day}
                  </p>
                  <p className="text-weather">
                    {this.props.cityInformation[1].weather}
                  </p>
                  <p className="text-temp">
                    {this.props.cityInformation[1].temp}
                  </p>
                  <p className="text-prec">
                    Precipitation: {this.props.cityInformation[1].precipitation}
                  </p>
                  <p className="text-humidity">
                    Humidity: {this.props.cityInformation[1].humidity}
                  </p>
                </div>
              </div>
            </div>
            <div className="day-three-image">
              <div className="day-three">
                <div className="text-box">
                  <p className="text-city">
                    {this.props.cityInformation[2].city}
                  </p>
                  <p className="text-day">
                    {this.props.cityInformation[2].day}
                  </p>
                  <p className="text-weather">
                    {this.props.cityInformation[2].weather}
                  </p>
                  <p className="text-temp">
                    {this.props.cityInformation[2].temp}
                  </p>
                  <p className="text-prec">
                    Precipitation: {this.props.cityInformation[2].precipitation}
                  </p>
                  <p className="text-humidity">
                    Humidity: {this.props.cityInformation[2].humidity}
                  </p>
                </div>
              </div>
            </div>
            <div className="day-four-image">
              <div className="day-four">
                <div className="text-box">
                  <p className="text-city">
                    {this.props.cityInformation[3].city}
                  </p>
                  <p className="text-day">
                    {this.props.cityInformation[3].day}
                  </p>
                  <p className="text-weather">
                    {this.props.cityInformation[3].weather}
                  </p>
                  <p className="text-temp">
                    {this.props.cityInformation[3].temp}
                  </p>
                  <p className="text-prec">
                    Precipitation: {this.props.cityInformation[3].precipitation}
                  </p>
                  <p className="text-humidity">
                    Humidity: {this.props.cityInformation[3].humidity}
                  </p>
                </div>
              </div>
            </div>
            <div className="day-five-image">
              <div className="day-five">
                <div className="text-box">
                  <p className="text-city">
                    {this.props.cityInformation[4].city}
                  </p>
                  <p className="text-day">
                    {this.props.cityInformation[4].day}
                  </p>
                  <p className="text-weather">
                    {this.props.cityInformation[4].weather}
                  </p>
                  <p className="text-temp">
                    {this.props.cityInformation[4].temp}
                  </p>
                  <p className="text-prec">
                    Precipitation: {this.props.cityInformation[4].precipitation}
                  </p>
                  <p className="text-humidity">
                    Humidity: {this.props.cityInformation[4].humidity}
                  </p>
                </div>
              </div>
            </div>
            <div className='weekend'>
              <div className="day-six-image">
                <div className="day-six">
                  <div className="text-box">
                    <p className="text-city">
                      {this.props.cityInformation[5].city}
                    </p>
                    <p className="text-day">
                      {this.props.cityInformation[5].day}
                    </p>
                    <p className="text-weather">
                      {this.props.cityInformation[5].weather}
                    </p>
                    <p className="text-temp">
                      {this.props.cityInformation[5].temp}
                    </p>
                    <p className="text-prec">
                      Precipitation:{" "}
                      {this.props.cityInformation[5].precipitation}
                    </p>
                    <p className="text-humidity">
                      Humidity: {this.props.cityInformation[5].humidity}
                    </p>
                  </div>
                </div>
              </div>
              <div className="day-seven-image">
                <div className="day-seven">
                  <div className="text-box">
                    <p className="text-city">
                      {this.props.cityInformation[6].city}
                    </p>
                    <p className="text-day">
                      {this.props.cityInformation[6].day}
                    </p>
                    <p className="text-weather">
                      {this.props.cityInformation[6].weather}
                    </p>
                    <p className="text-temp">
                      {this.props.cityInformation[6].temp}
                    </p>
                    <p className="text-prec">
                      Precipitation:{" "}
                      {this.props.cityInformation[6].precipitation}
                    </p>
                    <p className="text-humidity">
                      Humidity: {this.props.cityInformation[6].humidity}
                    </p>
                    
                  </div>
                </div>
              </div>
          </div>
        </div>
        
      </body>
    );
  }
}

export default Display;
