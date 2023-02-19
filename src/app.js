import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import morgan from 'morgan'


const app = express()


app.use(morgan('dev'))

app.use(express.json())
app.use('/API',indexRoutes)
app.use('/API',employeesRoutes)

//Para  otras rutas 
app.use((req,res,next)=>{
    res.status(404).json({
      "message": "endpoint not found"
    })
})


export default app