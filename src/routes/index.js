import { Routes } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index',{title:'La Cevicheria El Pulpito'}));
router.get('/about', (req, res) => res.render('about',{title:'Acerca de nosotros'}));