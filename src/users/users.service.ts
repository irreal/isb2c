import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: "test",
        hashedPassword:
          "$2b$10$.VzQaU7aebMgjOclfIaig.e7uRd0.IB9ZwqTUlwgYM5lyVhS6p/WW"
      },
      {
        userId: 2,
        username: "optiweb",
        hashedPassword:
          "$2b$10$AU/zeYSlgA/ZSPgHDp9p7Ov..I9..xbjfUuvTQfDGi7pG.gikYJAy"
      }
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
