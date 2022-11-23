import { Router } from "express";

import { dataQad } from "../controllers/index.controller.js";

const router = Router();

//Prueba
router.get('/ping', dataQad )


export default router;