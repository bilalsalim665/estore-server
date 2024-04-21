const express = require('express');
const productCategories = express.Router();
const pool = require('../shared/pool');

productCategories.get('/',(req,resp)=>{
    pool.getConnection((err,connection)=>{
        if(err){
            resp.status(500).send(err)
        } else {
            pool.query('select * from categories',(error, categories)=>{
                if(error){
                    resp.status(500).send(error);
                }
                else {
                    resp.status(200).send(categories);
                }
            });
        }
    })
});

module.exports = productCategories;