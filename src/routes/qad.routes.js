import { Router } from "express";
import { getQad, createQad, updateQad, update2Qad, deleteQad, getAllQad } from '../controllers/qad.controller.js'
const router = Router()

//Endpoint 
router.get('/QAD', getQad)

router.get('/QAD/:id', getAllQad)

router.post('/QAD', createQad)
router.put('/QAD/:id', updateQad)
router.patch('/QAD/:id', update2Qad )
router.delete('/QAD/:id', deleteQad )

export default router