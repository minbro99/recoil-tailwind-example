import React, { ChangeEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { plusState, resultState } from "../states/CounterState";

const Counter: React.FC = () => {
  const [plus, setPlus] = useRecoilState(plusState);
  const result = useRecoilValue(resultState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlus(Number(e.target.value));  // 입력 값을 숫자로 변환하여 상태 업데이트
  };

  const increment = () => setPlus(plus + 1);

  return (
    <div className="text-center bg-blue-100">
      <h1 className="text-3xl">계산기</h1>
      <p>
        <label>
          Current Value:
          <input
            type="text"
            value={plus}
            onChange={handleInputChange}
            className="ml-2 border rounded px-2 py-1 bg-gray-300"
          />
        </label>
      </p>
      <button
        className="bg-red-100 text-green-800 mt-4 px-4 py-2 rounded"
        onClick={increment}
      >
        증감
      </button>
      <p>결과값 (입력값 + 1): {result}</p>
    </div>
  );
};

export default Counter;
