import dotenv from "dotenv"
dotenv.config()
import mongoose from 'mongoose'

// Import national park model
import Park from '../models/parks.js'
import User from '../models/users.js'

// Import seed data
import parkData from './data/parksRec.js'
import userData from './data/users.js'

const MONGODB_CONN_STRING = process.env.MONGODB_CONNECTION_STRING

const seedDatabase = async () => {
  try {
    // Connect to database
    await mongoose.connect(MONGODB_CONN_STRING)
    console.log(`🚀 Database connected`)

    // Remove data
    await mongoose.connection.db.dropDatabase()
    console.log('✅ Database dropped')

    // Add user data
    const usersAdded = await User.create(userData)
    console.log('users added ->', usersAdded)

    // Add seed data back in
    const parksAdded = await Park.create(parkData)
    console.log(`🌱 Database seeded with ${parksAdded.length} national parks and ${usersAdded.length} users.`)

    // Close connection to database
    await mongoose.connection.close()
    console.log('👋 Bye')

  } catch (error) {
    console.log('💔 Something went wrong')
    console.log(error)

    // Close connection to database
    await mongoose.connection.close()
    console.log('❌ Connection closed due to failure')
  }
}

// Execute seed function
seedDatabase()