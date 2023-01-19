import { User } from "@/models/user";

export interface IUsersState {
    users: User[];
    isLoading: boolean;
}

function state(): IUsersState {
    return {
        users: [],
        isLoading: false,
    }
}
 export default state;