import mongoose from 'mongoose'

const connectDB = async ()=> {
  // Attempting to get the connection
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log("Database successfully connected")
    console.log(`DB host: ${connect.connection.host} | DB name: ${connect.connection.name}`)
  } catch(error: any) {
    console.error(`Database connection failed: ${error.message || error}`)
    process.exit(1)
  }
}

export default connectDB