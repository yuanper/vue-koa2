const mysql = require('mysql')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'theme'
})

let query = function(sql,values){
    return new Promise((resolve,reject) => {
        pool.getConnection(function(err,connection){
            if(err){
                reject(err)
            }else{
                connection.query(sql,values,(err,rows) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

let createTable = function(sql){
    return query(sql,[])
}

let findDataById = function(table,id){
    let sql = "SELECT * FROM ?? WHERE id=?";
    return query(sql,[table,id,start,end])
}

let findDataByPage = function(table,keys,start,end){
    let sql = "SELECT ?? FROM ?? LIMIT ?,?"
    return query(sql,[keys,table,start,end])
}

let insertData = function(table,values){
    let sql = "INSERT INTO ?? SET ?"
    return query(sql,[table,values])
}

let updateData = function(table,values,id){
    let sql = "UPDATE ?? SET ? WHERE id=?"
    return query(sql,[table,values,id])
}

let deleteDataById = function(table, id){
    let sql = "DELETE FROM ?? WHERE id=?"
    return query(sql,[table,id])
}

let select = function(table,keys){
    let sql = "SELECT ?? FROM ??"
    return query(sql,[keys,table])
}

let count = function(table){
    let sql = "SELECT COUNT(*) AS total_count FROM ??"
    return query(sql,[table])
}
module.exports = {
    query,
    createTable,
    findDataById,
    findDataByPage,
    deleteDataById,
    insertData,
    updateData,
    select,
    count
}