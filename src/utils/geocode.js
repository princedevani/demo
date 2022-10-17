const request = require('request')

const geocode = (address, callback) => {
    // const url ="http://api.weatherstack.com/current?access_key=219464118c4c098527cc51cfdc2f38c2&query=New%20York"
    const url ="http://api.weatherstack.com/current?access_key=219464118c4c098527cc51cfdc2f38c2&query="+ address // passsing perticular city
  //   request({ url: url, json: true},(error, Response)=>{
  //       if(error){
  //           console.log('errror',error)
  //        callback("unable to connect the location service",undefined)
  //      } 
  //      else {
  //       callback(undefined,{   
  //         latitude: Response.body.location.lat,
  //         longitude:  Response.body.location.lon,
  //       })
  //      }
      
  //   })
  // }

  // ------------- destructuring ---------
  request({ url, json: true},(error,{body})=>{
    console.log("body......",body)
    if(body.error){
        console.log('errror',error)
     callback("unable to connect the location service",undefined)
   } else {
    // console.log(body)
    callback(undefined,{   
      latitude:body.location.lat,
      longitude:body.location.lon,
     
    })
   
   }
  
})
}

  
  module.exports = geocode