

const { Router } = require("express")


module.exports = function ({ UserController }) {
  const router = Router();

  router
      .get('/', UserController.getUsers.bind(UserController))
      .get('/:id', UserController.getUser.bind(UserController))
      .post('/', UserController.createUser.bind(UserController))
      .put('/:id', UserController.updateUser.bind(UserController))
      .delete('/:id', UserController.deleteUser.bind(UserController));

  return router;
}

