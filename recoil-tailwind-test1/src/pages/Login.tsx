import React, { useState } from "react";

export const Login = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const validUserName = 'admin';
        const validPassword = 'nuri1004!';
        const englishRegex = /^[A-Za-z]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        

        if (!englishRegex.test(userName)) {
            setErrorMessage('아이디 형식이 잘못되었습니다.');
            return;
        } else if (!passwordRegex.test(userPassword)) {
            setErrorMessage('비밀번호 형식이 잘못되었습니다. 최소 8자, 영어, 숫자 및 특수문자가 포함되어야 합니다.');
            return;
        } else {
            setErrorMessage('');
        }

        if (userName === validUserName && userPassword === validPassword) {
            window.location.href = '/loginsuccess';
        } else {
            alert('잘못된 사용자 이름 또는 비밀번호입니다.');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-800">
            <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center">
                <h3 className="text-3xl text-gray-800">로그인</h3>
                <form className="flex flex-col mt-5 px-5" onSubmit={handleLoginClick}>
                <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            ID 찾기
                        </a>
                    </div>
                    <input
                        type="text"
                        placeholder="Email"
                        className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            비밀번호 찾기
                        </a>
                    </div>
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 py-3 px-5 rounded-lg"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    {errorMessage && (
                        <div className="text-red-500 text-sm mt-1">{errorMessage}</div>
                    )}
               
                    <button
                        type="submit"
                        className="py-3 px-5 bg-gray-600 text-white mt-3 text-lg rounded-lg focus:outline-none hover:opacity-90"
                    >
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
};
