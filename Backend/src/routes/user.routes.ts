import { UserController } from "../controllers/users.controller";
import { jwtAuth } from "../middleware/auth.middleware";

const express = require('express');

const router = express.Router()

const userController = new UserController();

router.post('/add-user', userController.addUser);
router.delete('/delete-user', userController.deleteUser);
router.post('/update-user', userController.updateUser);
router.get('/get-users', jwtAuth,userController.getAllUsers);
router.get('/get-user/:id', userController.getUsersById);
router.post('/login',userController.loginUser);

export{router as userRouter }