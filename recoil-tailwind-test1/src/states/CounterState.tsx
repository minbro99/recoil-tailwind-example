import { atom,selector } from "recoil";

export const plusState = atom<number>({
    key: "plusState",
    default: 0,
});

export const resultState = selector<number>({
    key: "resultState",
    get: ({ get }) => {
        const plus = get(plusState);  
        return plus + 1 ;  
    },
    set: ({ set }, result) => {
        const newPlusValue = (result as number) +1; 
        set(plusState, newPlusValue);  
      },
})