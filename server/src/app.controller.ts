import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path'; // 추가

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response) {
    // index.html 파일 반환
    res.sendFile(path.join(__dirname, './public/index.html'));
  }
}
