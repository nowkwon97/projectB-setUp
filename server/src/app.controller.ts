import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import { TestDbService } from './test-db.service';
import { User } from './user.schema';

@Controller()
export class AppController {
  constructor(private readonly testDbService: TestDbService) {}

  // '/' 경로로 요청이 들어올 시
  @Get()
  async root(@Res() res: Response) {
    // 데이터베이스에서 사용자 정보를 가져옴
    // const users: User[] = await this.testDbService.getUsers();

    // // 조회된 데이터를 콘솔에 출력
    // console.log(users);

    // index.html 파일 반환
    res.sendFile(path.join(__dirname, './public/index.html'));
  }

  // '/api/users'경로로 요청이 들어올 시
  @Get('/api/users')
  async getUsers(@Res() res: Response) {
    try {
      // 데이터베이스에서 사용자 정보를 가져옴
      const users: User[] = await this.testDbService.getUsers();

      // 사용자 정보를 JSON 형식으로 반환
      res.json(users);
    } catch (error) {
      // 에러 처리
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
