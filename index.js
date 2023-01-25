import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'

// Import environment
// import { PORT, MONGODB_CONNECTION_STRING } from './config/environment.js'


const MONGODB_CONN_STRING = process.env.MONGODB_CONNECTION_STRING
const PORT = process.env.PORT

// import { getSinglePark, showParks } from './controllers/parks.js'

// Import model
// import Park from './models/parks.js'

// Import router
import router from './config/router.js'

// Logger
const logger = (req, res, next) => {
  // console.log('req.body ->', req.body)
  console.log(`🚨 - Incoming request on ${req.method} - ${req.url}`)
  next()
}

// Initialise express server
const startServer = async () => {

  const app = express()

  app.use(logger)
  app.use(express.json())


  app.get('/', (req, res, next) => {
    return res.end('Welcome to our API')
  })

  // Connect to router
  app.use('/api', router)

  // Connect to database with mongoose
  await mongoose.connect(MONGODB_CONN_STRING)
  console.log('Connected to MongoDB!')

  // ! for deployment to render.com
  if (process.env.NODE_ENV === 'production') {
    //* Set static folder
    app.use(express.static('client/build'));
  // !
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

  app.listen(PORT, () => console.log(`🏔  - Server listening on port ${PORT}`))
}

startServer()