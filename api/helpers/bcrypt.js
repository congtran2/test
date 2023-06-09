const bcrypt = require('bcrypt');

module.exports = {


  friendlyName: 'Bcrypt',


  description: 'Bcrypt data',


  inputs: {
    data: {
      type: 'string',
      require: true
    }
  },


  exits: {

    success: {
      description: 'Brcypt success',
    },
    
  },


  fn: async function (inputs, exits) {
    const saltRounds = 10;
    const dataHash = await bcrypt.hash(inputs.data, saltRounds);
    return exits.success(dataHash);
  }
};

