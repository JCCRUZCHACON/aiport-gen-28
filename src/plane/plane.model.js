import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Plane = sequelize.define('plane', {
    plane_id : {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  plane_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  max_capacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  airline: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },

})

export default Plane



  




