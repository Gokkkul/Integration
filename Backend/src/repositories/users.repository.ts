import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user.entity";
import * as bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config()

export class UserRepository{
    private appDataSource = AppDataSource.getRepository(User);

    async addUser(user: Partial<User>){
        const result = await this.appDataSource.create(user);
        await this.appDataSource.save(result);
        return `User added successfully...!`
    }

    async getAllUsers(){
        const result = await this.appDataSource.find();
        return result;
    }
    async getUserById(id: number){
        const result = await this.appDataSource.find({where: {id: id}})
        return result;
    }

    async updateUser(id: number, user: Partial<User>){
        const result = await this.appDataSource.update(id,user);
        return `User updated successfully...!`
    }

    async deleteUser(id: number){
        const result = await this.appDataSource.delete(id);
        return `User deleted successfully...!`
    }

    async registerUser(user: Partial<User>) {
        const newUser = await this.appDataSource.create(user)
        await this.appDataSource.save(newUser);
        return `User registered successfully!`;
    }

    async loginUser(email: string, password: string) {
        const user = await this.appDataSource.findOne({ where: { email } });
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password!); // Compare hashed password
            if (isPasswordValid) {
                const secret = process.env.SECRET_KEY || 'lavanya'
                const token = await jwt.sign({email,password},secret)
                return `User logged in successfully! token: ${token}` ;
            } else {
                return `Invalid credentials!`;
            }
        } else {
            return `User not found!`;
        }
        
    }
}

