const { QueryInterface, UniqueConstraintError, DATE } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/lib/utils');
const { password } = require('../src/database/migrations');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await QueryInterface.createTable('useres',{
    id:{
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      Unique: true,
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    create_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize,DATE,
      allowNull: false,
    },
   })
    
  },

  async down (queryInterface) {
    await queryInterface.dropAllTables('users');
  },
};
