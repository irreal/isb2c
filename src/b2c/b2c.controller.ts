import { Controller, UseGuards, Get, Param, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBasicAuth } from "@nestjs/swagger";
import { SqlService, Parameter } from "../sql/sql.service";

@UseGuards(AuthGuard("basic"))
@ApiBasicAuth()
@Controller("")
export class B2cController {
  constructor(private sql: SqlService) {}
  @Get("items")
  async GetAllItems(@Request() req): Promise<any> {
    const items = await this.sql.executeQuery(`select * from _webSifarnik`, []);
    console.log(
      `returning ${items.recordset.length} items. Username: ${req.user.username}`
    );
    return items.recordset;
  }
  @Get("items/:id")
  async GetItemById(@Request() req, @Param("id") id: string): Promise<any> {
    const items = await this.sql.executeQuery(
      `select * from _webSifarnik where "Šifra artikla" = @id`,
      [Parameter("id", id)]
    );
    console.log(
      `returning ${items.recordset.length} items for items with id ${id} Username: ${req.user.username}`
    );
    return items.recordset;
  }

  @Get("stock")
  async GetStock(@Request() req): Promise<any> {
    const items = await this.sql.executeQuery(`select * from _webLager`, []);
    console.log(
      `returning ${items.recordset.length} stock info Username: ${req.user.username}`
    );
    return items.recordset;
  }

  @Get("stock/:id")
  async GetStockById(@Request() req, @Param("id") id: string): Promise<any> {
    const items = await this.sql.executeQuery(
      `select * from _webLager where "Šifra artikla" = @id`,
      [Parameter("id", id)]
    );
    console.log(
      `returning ${items.recordset.length} stock info for item with id ${id} Username: ${req.user.username}`
    );
    return items.recordset;
  }
}
