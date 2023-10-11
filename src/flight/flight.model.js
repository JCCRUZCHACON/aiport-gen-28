import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Flight = sequelize.define('flight', {
    flight_id : {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  origin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  destination_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plane_id: {
    type: DataTypes.INTEGER,
  },
  departure_time: {
    type: DataTypes.timestamp,
    allowNull: false
  },
  check_in: {
    type: DataTypes.timestamp,
  },
  flight_status: {
    defaultValue: "pending"
  }

})

export default Flight







