import cors from 'cors'; // cors - Cross Origin Resource Sharing
import express from 'express'
import { Response, Request } from 'express';
import { AppDataSource } from './config/data-source';
import { User } from './entities/user.entity';
import { UserController } from './controllers/users.controller';
const userController = new UserController()


const app = express();

AppDataSource.initialize()
.then(() => console.log("Database Connected Successfully...!"))
.catch((error) => console.log(`Database not connected...! Error: ` + error))

app.use(express.json())

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({message: "Hello from Backend...!"})
})

app.listen(3000,() => {
    console.log(`Server started...!`);
    
})