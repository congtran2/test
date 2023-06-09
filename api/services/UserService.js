module.exports = {
  createUser: async function(data) {
    const {username, email, password} = data;
    
    const hashPassword = await sails.helpers.bcrypt.with({data: password});
    
    return Users.create({
      username: username,
      password: hashPassword,
      email: email,
    }).fetch();
  },

  findUserByEmail: async function(email) {
    return await Users.find({
      where: {
        email: email
      },
      select: ['username', 'email', 'isActive']
    })
  },

  getAllUsers: async function() {
    return await Users.find({
      where: {},
      select: ['username', 'email', 'isActive']
    })
  },

  getUserById: async function(id) {
    return await Users.find({
      where: {
        id: id,
      },
      select: ['username', 'email', 'isActive']
    })
  }
}