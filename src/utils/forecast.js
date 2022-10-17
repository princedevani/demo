const request = require('request')

const forecast = (latitude,longitude,callback) => {
  const url='http://api.weatherstack.com/current?access_key=219464118c4c098527cc51cfdc2f38c2&query=' + latitude + ',' + longitude +'&units=f'
                                                                                          
  request({ url: url, json: true},(error,Response)=>{
    
      if(error){
       
      callback("unable to connect the whether service",undefined)
   
     } else if(Response.body.error){
       callback("unable to find location ",undefined)
     } else {
        callback(undefined, 'it is current ' + Response.body.current.temperature + 'degress out .there is a ' + Response.body.current.weather_code )
    }
     })
}

// ---------------- destructuring ----------------
// request({url, json: true},(error,{body})=>{
    
//     if(error){
     
//     callback("unable to connect the whether service",undefined)
 
//    } else if(body.error){
//      callback("unable to find location ",undefined)
//    } else {
//       callback(undefined, 'it is current ' +body.current.temperature + 'degress out .there is a ' +body.current.weather_code )
//   }
//    })
// }

module.exports = forecast