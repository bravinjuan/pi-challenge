module.exports = {
    db: {
        database: 'DB', 
        username: '', 
        password: '', 
        params: {
            dialect: 'sqlite', 
            storage: "DB.sqlite", 
            define: {
                underscore: true 
            }
        }
    }
};