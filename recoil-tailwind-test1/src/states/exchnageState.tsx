import { atom, selector } from "recoil";

// wonState의 타입은 number로 지정
export const wonState = atom<number>({
  key: "wonState",  // 고유한 키 값
  default: 0,  // 기본값
});

// dollarState의 타입은 selector의 get 함수에서 반환하는 값과 set 함수에서 받을 값을 기반으로 결정
export const dollarState = selector<number>({
  key: "dollarState",  // 고유한 키 값
  get: ({ get }) => {
    const won = get(wonState);  // wonState에서 현재 값을 가져옴
    return won / 1400;  // 달러로 변환
  },
  set: ({ set }, dollar) => {
    const newWonValue = (dollar as number) * 1400;  // dollar 값을 원으로 변환
    set(wonState, newWonValue);  // wonState를 업데이트
  },
});
