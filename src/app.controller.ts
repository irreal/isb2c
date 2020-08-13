import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getInfo(): { msg: string } {
    return { msg: "Iglu Šport is running :)" };
  }
}
