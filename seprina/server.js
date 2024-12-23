const express =require('express')
const app = express()
const port = 3000   

const routes = require('./src/routes/index.js')



app.use('/', routes)
app.use('/about', routes)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})