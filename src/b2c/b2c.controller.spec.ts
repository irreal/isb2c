import { Test, TestingModule } from "@nestjs/testing";
import { B2cController } from "./b2c.controller";
import { SqlService } from "../sql/sql.service";

describe("B2c Controller", () => {
  let controller: B2cController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [B2cController],
      providers: [{ provide: SqlService, useValue: {} }],
    }).compile();

    controller = module.get<B2cController>(B2cController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
