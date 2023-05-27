const express = require("express");
const empleado = express.Router();
const db = require("../config/database")

empleado.get("/", async(req, res, next)=>{
    const emp = await db.query("SELECT * FROM employees");
    return res.status(200).json({code: 200, message: emp});
})

empleado.get("/:name([A-Za-z]+)", async(req, res, next)=>{
    const name = req.params.name;

    const emp = await db.query(`SELECT * FROM employees WHERE first_name = '${name.toLocaleLowerCase()}'`);
    (emp.length > 0) ?
    res.status(200).json({code: 200, message: emp}) : 
    res.status(404).send({code: 404, message: "Empleado no encontrado"});
})

empleado.post("/", async(req, res, next)=>{
    const { first_name, last_name, phone_number, email, address } = req.body;

    if(first_name && last_name && phone_number && email && address){
        let query = "INSERT INTO employees (first_name, last_name, phone_number, email, address)";
        query += ` VALUES('${first_name}', ${last_name}, ${phone_number}, ${email}, ${address})`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(201).json({code:201 , message: "Empleado insertado correctamente"});
        }
        
        return res.status(500).json({code:500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code:500, message: "Campos incompletos"})
})

empleado.put("/:id([0-9]{1,3})", async(req, res, next)=>{

    const { first_name, last_name, phone_number, email, address } = req.body;

    if(first_name && last_name && phone_number && email && address){
        
        let query = `UPDATE employees SET first_name = '${first_name}', last_name='${last_name}',`;
        query += `phone_number='${phone_number}' , email= '${email}', address='${address}' WHERE employee_id=${req.params.id};`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({code:200 , message: "Empleado actualizado correctamente"});
        }
        
        return res.status(500).json({code:500, message: "Ocurrió un error"});
    }
    
    return res.status(500).json({code:500, message: "Campos incompletos"})
   
});

empleado.delete("/:id([0-9]{1,3})", async(req, res, next)=>{
    const query = `DELETE FROM employees WHERE employee_id=${req.params.id}`;

    const rows = await db.query(query);

    if(rows.affectedRows == 1){
        return res.status(200).json({code:200, message: "Empleado borrado correctamente"});
    }

    return res.status(404).json({code: 404, message: "Empleado no encontrado"})
});

module.exports = empleado;