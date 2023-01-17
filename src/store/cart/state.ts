import { User } from "@/models/user";

export interface ICartState {
  users: User[];
}

function state(): ICartState {
  return {
    users: [],
  };
}

export default state;
