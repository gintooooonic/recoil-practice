import { atom } from "recoil";

export const userDataState = atom({
  key: "userDataState",
  default: { id: "", nickname: "", birth: "" },
});
