const dotenv = require('dotenv')
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

app.use(cors({origin: "*"}))
//https://syssales-git-develop-lucasbrando.vercel.app
app.use(express.json());
app.use(routes)

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})
        
app.listen(process.env.PORT || 3030)

