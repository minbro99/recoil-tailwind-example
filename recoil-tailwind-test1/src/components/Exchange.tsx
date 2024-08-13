// components/DollarConverter.tsx
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { wonState, dollarState } from "../states/exchnageState";

const Exchange: React.FC = () => {
  const [won, setWon] = useRecoilState<number>(wonState); // 원화 상태
  const dollar = useRecoilValue<number>(dollarState);     // 달러 상태
  const [input, setInput] = useState<string>(won.toString());

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // 입력값을 문자열로 저장
  };

  const handleConvertToDollar = () => {
    const wonValue = Number(input); // 입력값을 숫자로 변환
    if (!isNaN(wonValue)) {
      setWon(wonValue); // 원화 상태를 업데이트
    }
  };

  useEffect(() => {
    setInput(won.toString()); // 원화 상태가 변할 때마다 입력값을 업데이트
  }, [won]);

  return (
    <div>
      <h2 className="text-5xl text-center text-gray-300">💱 환전 계산기</h2>
      <div className="flex flex-col justify-center items-center min-h-screen">
  <label className="text-3xl items-center text-blue-400">
    원화를 입력하세요:
    <input
      type="text"
      value={input}
      onChange={handleInputChange}
      className="ml-2 border rounded px-2 py-1 bg-gray-300"
    />
  </label>
  <button
    className="bg-red-100 text-green-800 mt-4 px-4 py-2 rounded"
    onClick={handleConvertToDollar}
  >
    환전하기
  </button>
  <div className="text-blue-400 mt-4">
    <p>💲 환전된 달러: ${dollar.toFixed(2)}</p>
  </div>
</div>
</div>
  );
};

export default Exchange;
