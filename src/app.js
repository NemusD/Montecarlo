import express from 'express';
import qadRoutes from './routes/qad.routes.js';
import indexRoutes from './routes/index.routes.js';


const app = express();

app.use(express.json())


//Rutas
app.use('/api',qadRoutes)
app.use(indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint no found'
    })
}) 


export default app;