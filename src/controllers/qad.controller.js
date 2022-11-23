import { pool } from "../db.js";

//Obtener todos los elemeentos
export const getQad = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }    
};

//obtener un elemento por el id
export const getAllQad = async (req, res) => {
    try {
        console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        if (rows.length <= 0 ) return res.status(404).json({
            message: 'Employee not found'
        })
        res.json(rows[0])
    } catch(error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
};

//Crear un elemento definiendo los valores
export const createQad = async (req, res) => {
    try {
        const {name, salary} = req.body
        const [rows] = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
};

//Modificación de un elemento por el id, se dan todos los parámetros
export const updateQad = async (req, res) => {
    try {
        const {id} = req.params
        const {name, salary} = req.body

        const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?', [name, salary, id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        })
        const [rows] = pool.query('SELECT * FROM employee WHERE id = ?', [id])
        //console.log(id, name, salary)
        console.log(result)
        res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
};
//Modificación de un elemento por el id, se da uno o más parámetros a modificar
export const update2Qad = async (req, res) => {
    try {
        const {id} = req.params
        const {name, salary} = req.body

        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Employee not found'
        })
        const [rows] = pool.query('SELECT * FROM employee WHERE id = ?', [id])
        //console.log(id, name, salary)
        console.log(result)
        res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
    
};
//res.send('actualizando uno o más elemento de los empleados');

//Eliminar un elemento por el id
export const deleteQad = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        res.sendStatus(204)
    } catch(error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
};