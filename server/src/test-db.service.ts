import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class TestDbService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    console.log(users); // DB 정보를 서버 콘솔에 출력
    return users;
  }
}
