import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class TestDbService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getUsers(): Promise<User[]>;
}
