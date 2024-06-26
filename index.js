const env = require('dotenv')
env.config({ path: './config.env' })
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const mongoose = require('mongoose')

const cookieParser = require('cookie-parser')

const uri = process.env.URI

const authRoutes = require('./routes/authRoutes')

app.use(
  cors({
    credentials: true,
    origin: 'https://mern-auth-react.vercel.app/',
  })
)
// credentials: Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted.

app.use(express.json())
app.use(cookieParser())

mongoose
  .connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

app.use(authRoutes)

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
