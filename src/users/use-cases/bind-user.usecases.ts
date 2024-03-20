import { UsersService } from "../users.service";

export class BindUserUsecases {
  constructor(private readonly usersService: UsersService) {}
}
