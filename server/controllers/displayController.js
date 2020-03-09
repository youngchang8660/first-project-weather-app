const weatherData = require('./weather.json')
let newYorkId = 8
let seattleId = 8
let miamiId = 8

module.exports = {
    getWeather: (req, res) => {
        const {city} = req.params
        // console.log(req.params.city)
        const cityWeather = weatherData[city]
        res.status(200).send(cityWeather)
    },
    deleteWeather: (req, res) => {
        const {city} = req.params
        // const cityWeather = weatherData[city]
        cityWeather = []
        res.status(200).send(cityWeather)
    },
    editWeather: (req, res) => {
        // console.log(req.params)
        const {id} = req.params
        const {weather, city} = req.body
        // console.log(weather, city)
        const index = weatherData[city].findIndex(element => element.id === +id)
        
        const cityWeather = weatherData[city]
        // console.log(cityWeather)
        cityWeather[index].weather = weather
        res.status(200).send(cityWeather)
    },
    addNewWeather: (req, res) => {
        const {city} = req.params
        const {day} = req.body
        const {weather} = req.body
        const {precipitation} = req.body
        const {humidity} = req.body
        const {temp} = req.body
        const newData = {
            day,
            weather,
            precipitation,
            humidity,
            temp
        }
        if(city === 'newYork'){
            newData.id = newYorkId
            newYorkId++
            newData.city = 'New York'
        } else if (city === 'miami'){
            newData.id = miamiId
            miamiId++
            newData.city = 'Miami'
        } else {
            newData.id = seattleId
            seattleId++
            newData.city = 'Seattle'
        }
        weatherData[city].push(newData)
        res.status(200).send(weatherData[city])
    }
}