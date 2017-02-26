module.exports = function(sequelize, Datatypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    devoured: {
      type: Datatypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
}