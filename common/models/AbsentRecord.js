const { DataTypes } = require("sequelize");
const { productPriceUnits } = require("../../config");

const AbsentRecordModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  formName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  relationship: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("absent", AbsentRecordModel)
  },

  createAbsentRecord: (record) => {
    return this.model.create(record);
  },

  findAbsentRecords: (query) => {
    return this.model.findOne({
      where: query,
    });
  },

  updateAbsentRecord: (query, updatedValue) => {
    return this.model.update(updatedValue, {
      where: query,
    });
  },

  findAllAbsentRecords: (query) => {
    return this.model.findAll({
      where: query
    });
  },

  deleteAbsentRecord: (query) => {
    return this.model.destroy({
      where: query
    });
  }
}
