import { selector } from "recoil";
import { userDataState } from "./atom";

export const userBirthState = selector({
  key: "userBirthState",
  get: ({ get }) => {
    const { birth } = get(userDataState);
    const bDate = new Date(birth);
    const y = bDate.getFullYear();
    const m = bDate.getMonth() + 1;
    const d = bDate.getDate();
    return `${y}. ${m}. ${d}.`;
  },
});

export const userAgeState = selector({
  key: "userAgeState",
  get: ({ get }) => {
    const { birth } = get(userDataState);
    const bDate = new Date(birth);
    const today = new Date();
    const YEAR = 1000 * 60 * 60 * 24 * 365;
    const age = Math.floor((today.getTime() - bDate.getTime()) / YEAR);
    return age;
  },
});
