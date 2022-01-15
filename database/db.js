const { Sequelize } = require ('sequelize');

module.exports = ({config}) => {
    let db = {};
    
    const sequelize = new Sequelize(
        config.db.database,
        config.db.username,
        config.db.password,
        config.db.params
    );
    
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db;
}