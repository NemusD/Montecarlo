import app from './app.js'
import { PORT } from './config.js'

//Conexión 
app.listen(PORT)
console.log('Server running on port', PORT)
