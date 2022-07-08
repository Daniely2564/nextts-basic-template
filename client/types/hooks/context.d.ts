import { User } from "../models/user";

export interface GlobalState {
  theme: "white" | "black";
  user: User | null;
}

export interface GlobalAction extends Action {
  type: "THEME_BLACK" | "THEME_WHITE";
  payload: "black" | "white";
}
