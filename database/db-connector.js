const fs = require('fs');
const sql_string = fs.readFileSync("database/database.sql", 'utf8').toString();
const { QueryTypes } = require('sequelize');

class DbConnector {
    constructor({db}) {
        this.db = db;
    }
    
    async startConnection(){
        let retries = 5;
        while(retries){
            try{
                await this.db.sequelize.sync();
                const dataArr = sql_string.toString().split(';');    
                for (let i = 0; i<=1; i++){
                    await this.db.sequelize.query(dataArr[i]+";");
                }
                break;
            }catch (err){
                console.log(err);
                retries -= 1;
                console.log('retries lef: ', retries);
                await new Promise(res => setTimeout(res, 20000));
            }
        }
    }
}

module.exports = DbConnector;