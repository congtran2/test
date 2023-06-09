/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    username: {
      type: "string",
      required: true,
      custom: function (value) {
        return (
          _.isString(value) &&
          value.lenght > 6 &&
          value.match(/[a-z]/i) &&
          value.match(/[0-9]/)
        );
      },
    },

    email: {
      type: "string",
      unique: true,
      required: true,
      isEmail: true,
    },

    isActive: {
      type: "boolean",
      defaultsTo: false,
    },

    password: {
      type: "string",
      required: true,
    },
  },
};
