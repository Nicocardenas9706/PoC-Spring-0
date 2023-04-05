import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './authh/authh.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Nc_dbUser:<password>@atlascluster.mzuz0m3.mongodb.net/test',{
      
    }
    ),
    
    AuthModule,
  ],
})
export class AppModule {}