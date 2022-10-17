const path = require('path')
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const PORT = 3000;

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
console.log("path....",__dirname)
const publicdirectorypath = path.join(__dirname, '../public')
const viewpath = path.join(__dirname, '../view')
const PartialsPath = path.join(__dirname, '../public/partical')


app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(PartialsPath)


app.get('',(req,res)=> {
    res.render('../view/index',{
        title: 'weather app',
        name: 'prince devani'
    })
})


app.get('/about',(req,res)=> {
    res.render('../view/about',{
        title: 'About me',
        name: 'prince devani'
    })
})

app.use(express.static(publicdirectorypath))
app.get('/help',(req,res)=> {
    res.render('../view/help',{
        helptext: 'this is some helpful text.',
        title: 'help me',
        name: 'prince devani'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title : '404',
        name: 'andrew Mead',
        errorMessage: 'help artical not a found.'
    })
})

// app.get('/weather',(req,res)=> {
//     res.render('../view/index',{
//         title: 'weather',
//         name: 'prince devani'
//     })
// })
app.get('/weather',(req,res)=>{
    // res.send('hello express!')
   if(!req.query.address){
     return res.send({
        error: 'you must be provide a search terms'
     })
   }
   console.log("req.query.address...",req.query.address)
   geocode(req.query.address,(error,{latitude, longitude, location } = {}) =>{
    console.log("in geocode")
       if(error){
        return res.send({error})
       }

       forecast(latitude, longitude,(error,forecastData) => {
        if (error){
           return res.send({ error })
        }
   
        res.send({
            forecast: forecastData,
           location,
           address: req.query.address
        })
      })
   })


    
    // res.send({
    //     forcast: 'it is snowing',
    //     location: 'philadelphia',
    //     address: req.query.address
    // })
   
})

app.get('/products',(req,res)=>{
if(!req.query.search) {
    return res.send({
        error: 'you must provide a search  terms '
    })
} +
+

    console.log(req.query.search)
    res.send({
        product: []
    })
})

app.get('*',(req, res)=>{
    res.render('404',{
        title : '404',
        name: 'andrew Mead',
        errorMessage: 'Page not a found.'
    })
})



// app.get('/help',(req,res)=> {
    // res.send('this is a help page')
    // res.send({
    //     name: 'prince',
    //     age:19
    // })
//2.......
//     res.send([{
//         name: 'prince',
//         age:19
//     },{
//         name:'heny',
//         age:19
//     }])
// })

// app.get('/about',(req,res)=> {
//     res.send('this is a about page')
// })

// chalange

// app.get('/about',(req,res)=> {
//     res.send('<h1>this is a about page</h1>')
// })


// app.get('/weather',(req,res)=> {
//     res.send('this is a weather page')
// })
// chanllange
// app.get('/weather',(req,res)=> {
//     res.send([{
//          forcast:31,
//          location:'surat'
//     }])
// })

// app.com
// app.com/help
// app.com/about

 app.listen(PORT,()=>{
    console.log('server is up to port ',PORT)
})

// ---------------------------------------- new video 56 script------------------- 
