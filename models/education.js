import { sequelize } from "../config/sqlite_db";
import { DataTypes } from "sequelize";


export const Education = sequelize.define('Education',{
    title: {
        type: DataTypes.TEXT(30),
        allowNull: false,
    },
    desde: {
        type: DataTypes.TEXT(30),
        allowNull: false,
    },
    hasta: {
        type: DataTypes.TEXT(30),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT(100),
        allowNull: false,
    }
})


//Hay hacer la sincronizacion