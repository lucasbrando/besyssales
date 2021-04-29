require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

//app.use(cors({origin: process.env.CORS_ORIGIN}))
app.use(cors({origin: '*'}))

app.use(express.json());
app.use(routes)

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})
        
app.listen(process.env.PORT || 3030)

