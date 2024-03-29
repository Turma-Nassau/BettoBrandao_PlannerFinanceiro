'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_banco: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      saldo_banco: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
          isNumeric: true,
          min: 0
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UsuariosId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      }
   });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Conta');
  }
};