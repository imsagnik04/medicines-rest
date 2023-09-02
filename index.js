const express = require('express')
const medicines = require('./medicines')


const app = express()

app.use(express.json())



app.get('/api/medicines',(req,res) => {
    const medicine = JSON.stringify(medicines)
    if(!medicine)
        return res.status(404).send('Data Not Found')
    res.send(medicine)
})

const port = process.env.PORT || 3000

app.listen(port,() => console.log(`Listening on port ${port}`))