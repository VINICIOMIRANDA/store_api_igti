import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Supplier from "./supplier.model.js";

const Product = db.define(
  "products",
  {
    productID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }  
  },
  { underscored: true });

Product.belongsTo(Supplier, { foreingKey: "supplierId"});

export default Product;
