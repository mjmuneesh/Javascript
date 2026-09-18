// one way to do it 

// function getWeather(city) {
//     let apikey = '61a88622a478ed95525e30e8d767f872'
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
//         .then((raw) => {
//             return raw.json()
//         })
//         .then((realdata) => {
//             console.log(realdata);
//         })
// };

// getWeather('Bhopal')

// another way  

async function getWeather(city) {
    let apikey = '61a88622a478ed95525e30e8d767f872'
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)

    let realdata = await raw.json();
    console.log(realdata)

};

getWeather('Jammu and Kashmir')
