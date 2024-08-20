import React, { ChangeEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { plusState, plusResultState, minusResultState } from "../states/CounterState";

const Counter: React.FC = () => {
  const [inputValue, setInputValue] = useRecoilState(plusState); // 하나의 입력 값을 관리
  const result1 = useRecoilValue(plusResultState);
  const result2 = useRecoilValue(minusResultState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value)); // 입력 값을 숫자로 변환하여 상태 업데이트
  };

  const increment = () => {
    setInputValue(inputValue + 1); 
  };

  const decrement = () => {
    setInputValue(inputValue - 1); 
  };

  return (
    <div className="text-center bg-blue-100">
      <h1 className="text-3xl">계산기</h1>
      <p>
        <label>
          Current Value:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="ml-2 border rounded px-2 py-1 bg-gray-300"
          />
        </label>
      </p>
      <button
        className="bg-red-100 text-green-800 mt-4 px-4 py-2 rounded"
        onClick={increment}
      >
        더하기
      </button>
      <p>결과값 (입력값 + 1): {result1}</p>
      <button
        className="bg-red-100 text-green-800 mt-4 px-4 py-2 rounded"
        onClick={decrement}
      >
        빼기
      </button>
      <p>결과값 (입력값 - 1): {result2}</p>
    </div>
  );
};

export default Counter;
