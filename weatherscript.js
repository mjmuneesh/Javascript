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

// async function getWeather(city) {
//     let apikey = '61a88622a478ed95525e30e8d767f872'
//     try {
//         let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
//         if (!raw.ok) {
//             throw new Error('city not found');
//         }
//         let realdata = await raw.json();
//         if (realdata.main.temp > 30) {
//             throw new Error("Too Hot Outside")
//         } else {
//             console.log("You can play Outside")
//         }
//     }
//     catch (err) {
//         console.error(err)
//     }

// };

// getWeather('Jammu'); 