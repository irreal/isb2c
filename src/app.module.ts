import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ConfigModule } from "@nestjs/config";
import { SqlService } from "./sql/sql.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { B2cController } from "./b2c/b2c.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController, B2cController],
  providers: [SqlService]
})
export class AppModule {}
