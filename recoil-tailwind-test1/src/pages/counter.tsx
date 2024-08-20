import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { plusState, resultState } from "../states/CounterState"; // state 파일에서 plusState와 resultState를 가져옵니다.

const Counter: React.FC = () => {
  // plusState는 값을 직접 수정할 수 있는 상태입니다.
  const [plus, setPlus] = useRecoilState(plusState);
  
  // resultState는 plusState에 기반한 파생된 값이지만, set을 통해 직접 수정할 수도 있습니다.
  const result = useRecoilValue(resultState);
  
  // 증가 버튼을 클릭했을 때 plusState를 증가시킵니다.
  const increment = () => setPlus(plus + 1);

  return (
    <div className="text-center">
      <h1 className="text-3xl">계산기</h1>
      <p>Current Value: {plus}</p>
      <p>Result Value (plus + 1): {result}</p>
      <button onClick={increment} className="bg-black text-white ">Increment</button>
    </div>
  );
};

export default Counter;
