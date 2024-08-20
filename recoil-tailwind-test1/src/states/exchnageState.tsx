import { atom, selector } from "recoil";

// wonState의 타입은 number로 지정
export const wonState = atom<number>({
  key: "wonState",  
  default: 0,  
});

export const dollarState = selector<number>({
  key: "dollarState",  
  get: ({ get }) => {
    const won = get(wonState);  
    return won / 1400;  
  },
  set: ({ set }, dollar) => {
    const newWonValue = (dollar as number) * 1400; 
    set(wonState, newWonValue);  
  },
});

export const enhwaState = selector<number>({
  key: "enhwaState",  
  get: ({ get }) => {
    const won = get(wonState);  
    return won / 900;  
  },
  set: ({ set }, enhwa) => {
    const newWonValue = (enhwa as number) * 900; 
    set(wonState, newWonValue);  
  },
});

export const poundState = selector<number>({
  key: "poundState",  
  get: ({ get }) => {
    const won = get(wonState);  
    return won / 1700;  
  },
  set: ({ set }, pound) => {
    const newWonValue = (pound as number) * 1700; 
    set(wonState, newWonValue);  
  },
});
