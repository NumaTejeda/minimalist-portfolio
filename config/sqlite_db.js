    import { Sequelize } from "sequelize";


    // Instanciacion de bd
    export const sequelize= new Sequelize({
        dialect: 'sqlite',
        storage: './config/database.sqlite'
    })