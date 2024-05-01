const{createPool}= require('mysql')

const pool = createPool({
    host:  "localhost",
    user:  "root",
    password:  "",
    database: "Swaad",
    connectionlimit: 10
})

pool.query('select * from staff', (err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})