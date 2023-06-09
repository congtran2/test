/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: "Login",

  description: "Login user.",

  inputs: {
    email: {
      description: "user email.",
      type: "string",
      required: true,
    },
    password: {
      description: "user password.",
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 200,
      responseType: "json",
    },
  },

  test: async function (inputs, exits) {
    // All done.
    return;
  },
};
