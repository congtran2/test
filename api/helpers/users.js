module.exports = {


  friendlyName: 'Users',


  description: 'Users something.',


  inputs: {
    name: {
      type: 'string',
      require: true,
      example: 'Example',
      description: 'Description',
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    const result = `Hello, ${inputs.name}`;
    return exits.success(result);
  }
};

