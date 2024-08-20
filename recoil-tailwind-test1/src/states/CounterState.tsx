import { atom, selector } from "recoil";

export const plusState = atom<number>({
    key: "plusState",
    default: 0,
});

export const minusState = atom<number>({
    key: "minusState",
    default: 0,
});

export const multipleState = atom<number>({
    key: "multipleState",
    default: 0,
});

export const divideState = atom<number>({
    key: "divideState",
    default: 0,
});

export const plusResultState = selector<number>({
    key: "plusResultState",
    get: ({ get }) => {
        const plus = get(plusState);
        return plus + 1;
    },
    set: ({ set }, result1) => {
        const newPlusValue = (result1 as number) + 1;
        set(plusState, newPlusValue);
    },
});

export const minusResultState = selector<number>({
    key: "minusResultState",
    get: ({ get }) => {
        const minus = get(minusState);
        return minus - 1;
    },
    set: ({ set }, result2) => {
        const newMinusValue = (result2 as number) - 1;
        set(minusState, newMinusValue);
    },
});

export const multipleResultState = selector<number>({
    key: "multipleResultState",
    get: ({ get }) => {
        const multiple = get(multipleState);
        return multiple * 2;
    },
    set: ({ set }, result3) => {
        const newMultipleValue = (result3 as number) * 2;
        set(multipleState, newMultipleValue);
    },
});

export const divideResultState = selector<number>({
    key: "divideResultState",
    get: ({ get }) => {
        const divide = get(divideState);
        return divide / 2;
    },
    set: ({ set }, result4) => {
        const newDivideValue = (result4 as number) / 2;
        set(divideState, newDivideValue);
    },
});
