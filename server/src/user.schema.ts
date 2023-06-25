import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// User 클래스를 Mongoose 스키마로 선언합니다.
@Schema()
// User 클래스를 Document를 상속하는 Mongoose 문서로 정의합니다. 이는 MongoDB의 데이터를 표현하는 데 사용됩니다.
export class User extends Document {
  // @nestjs/mongoose의 Prop 데코레이터를 사용하여 각 프로퍼티를 정의합니다. name과 age 프로퍼티는 각각 문자열과 숫자 타입이며, required: true로 설정되어 필수 항목임을 나타냅니다.
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;
}

// SchemaFactory.createForClass()를 사용하여 User 클래스의 Mongoose 스키마를 생성하고, UserSchema 상수로 내보냅니다. 이렇게 생성된 스키마는 MongoDB와의 상호 작용을 위해 사용됩니다.
export const UserSchema = SchemaFactory.createForClass(User);
