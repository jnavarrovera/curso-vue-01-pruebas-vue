import { User } from "@/models/user";

export interface ICartState {
  users: User[];
  isOpen: boolean;
}

function state(): ICartState {
  return {
    users: [],
    isOpen: false,
  };
}

export default state;
