import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/users.repository";
import * as bcrypt from 'bcrypt'

const userRepo = new UserRepository();

export class UserService {
  async addUser(user: Partial<User>) {
    try {
      const result = await userRepo.addUser(user);
      return result;
    } catch (error) {
      return `Error: ${error}`;
    }
  }

  async updateUser(id: number, user: Partial<User>) {
    try {
      const result = await userRepo.updateUser(id, user);
      return result;
    } catch (error) {
      return `Error: ${error}`;
    }
  }

  async deleteUser(id: number) {
    try {
      const result = await userRepo.deleteUser(id);
      return result;
    } catch (error) {
      return `Error: ${error}`;
    }
  }
  async getAllUser() {
    try {
      const result = await userRepo.getAllUsers();
      return result;
    } catch (error) {
      return `Error: ${error}`;
    }
  }
  async getUsersById(id: number) {
    try {
      const result = await userRepo.getUserById(id);
      return result;
    } catch (error) {
      return `Error: ${error}`;
    }
  }

  async registerUser(user: Partial<User>) {
    try {
      const hashedPassword = await bcrypt.hash(user.password!, 10); // Hash password with salt rounds
      user.password = hashedPassword;
      const result = await userRepo.registerUser(user);
      return result;
    } catch (error) {
      return `Error: ${error}`;
    }
  }

  async loginUser(email: string, password: string) {
    try {
      const result = await userRepo.loginUser(email, password);
      return result;
    } catch (error) {
      return `Error: ${error}`;
    }
  }
}
