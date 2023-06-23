import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestDbService } from './test-db.service';
import { User, UserSchema } from './user.schema'; // 추가

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // 수정
  ],
  controllers: [AppController],
  providers: [AppService, TestDbService], // TestDbService를 providers에 추가
})
export class AppModule {}
