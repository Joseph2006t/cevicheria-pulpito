import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';


const app = express(); 



const __dirname = dirname(fileURLToPath(import.meta.url)); // pega o diretório actual
app.set('views', join(__dirname, 'views')); // especifica o diretório de views 
app.set('view engine', 'ejs'); // especifica o motor de renderizacion


// Define la carpeta de archivos estáticos
app.use(express.static(join(__dirname, 'public')));


app.get('/', (req, res) => res.render('index')); // renderiza a vista index.ejs
app.use(router)
app.listen(3000); 
console.log('Server is running on port 3000'); // mensaje de confirmacion





// el app.use se usa para traer rutas de algo agregado y el app.set carpetas y archivos de un formato