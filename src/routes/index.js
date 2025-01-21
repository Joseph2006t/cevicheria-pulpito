import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index',{title:'La Cevicheria El Pulpito'}));
router.get('/about', (req, res) => res.render('about',{title:'Acerca de nosotros'}));
router.get('/contacto', (req,res) => res.render('contacto',{title:'Contactanos'}));

router.get('/promociones', (req,res) => res.render('promociones',{title:'Acerca de las Promociones'}));

router.get('/redes-sociales', (req,res) => res.render('redes-sociales',{title:'Redes Sociales'}));

router.get('/catalogo', (req,res) => res.render('catalogo',{title:'Catalogo de Productos'}));


router.get('/bot', (req,res) => res.render('bot',{title:'ChatBot'}));


router.get('/preguntas-frecuentes', (req,res) => res.render('preguntas-frecuentes',{title:'Preguntas'}));

export default router; // exporta el router para ser utilizado en otros archivos