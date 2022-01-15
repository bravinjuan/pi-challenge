const express = require("express");

class Server {
    constructor({ router }) {
        this._express = express();
        this._express.set('view engine', 'ejs');
        this._express.use(express.urlencoded({extended: false}))
        this._express.use(router);
        this._express.use(express.json())
    }

    start() {
        return new Promise((resolve, reject) => {
            const http = this._express.listen(3000, () => {
            console.log("Application running on port 3000");
            resolve();
            });
        });
    }
}

module.exports = Server;