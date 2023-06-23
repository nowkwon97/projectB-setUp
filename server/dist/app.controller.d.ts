import { Response } from 'express';
import { TestDbService } from './test-db.service';
export declare class AppController {
    private readonly testDbService;
    constructor(testDbService: TestDbService);
    root(res: Response): Promise<void>;
    getUsers(res: Response): Promise<void>;
}
