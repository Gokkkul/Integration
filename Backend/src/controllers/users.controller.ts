import { Request, Response } from "express";
import { UserService } from "../services/users.service";

const userService = new UserService();

export class UserController {
  addUser = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const user = await userService.addUser(data);
      res.status(201).json(user);
      res.json({ Message: `User Added Successfully...!` });
      return
    } catch (error) {
        res.json({Message: `${error}`})
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
        await userService.deleteUser(Number(req.params.id));
        res.json({ Message: `User Deleted Successfully...!` });
        return
    } catch (error) {
        res.json({Message: `${error}`})
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const result = await userService.updateUser(id, data);
        res.json({ Message: `User Updated Successfully...!` });
        return
    } catch (error) {
        res.json({Message: `${error}`})
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
        const user =  await userService.getAllUser();
        res.status(201).json(user);
        return
    } catch (error) {
        res.json({Message: `${error}`})
    }
  };

  getUsersById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const user = await userService.getUsersById(id);
        res.status(201).json(user);
        return
    } catch (error) {
        res.json({Message: `${error}`})
    }
  };

}
