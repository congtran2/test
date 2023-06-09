/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  register: async function (req, res) {
    const existUser = await UserService.findUserByEmail(req.body.email);

    if (!_.isEmpty(existUser)) {
      return res.send("User exist");
    }

    const newUser = await UserService.createUser(req.body);

    return res.send(newUser);
  },

  login: async function (req, res) {},

  getAllUsers: async function (req, res) {
    const users = await UserService.getAllUsers();

    return res.send(users);
  },

  getUserById: async function (req, res) {
    const user = await UserService.getUserById(req.params.id);

    console.log(req.flash());

    if (!user) {
      return res.send("1");
    }

    return res.send(user);
  },
};
