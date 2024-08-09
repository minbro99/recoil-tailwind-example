import React, { useState } from "react";
import { Dialog } from '@headlessui/react';
// import { atom, selector } from 'recoil' // 사용하지 않는다면 주석 처리 또는 삭제

export default function Main() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className={"lg:hidden"}>
            <div className=""/>
            {/* 
            // fixed: 요소를 고정, inset-y-0: 요소의 상하 위치 0으로 설정, right-0: 요소를 오른쪽에 배치하고 0만큼 떨어진 곳에 고정
            // z-50: 다른 요소들 위에 겹치게 한다, w-full: 요소의 너비를 100%로 설정
            // overflow-y-auto: 요소의 세로방향으로 내용이 넘칠 경우 자동 스크롤
            // px, py-6: x, y축의 패딩을 1.5rem(24px)로 고정
            // sm:max-w-sm: 작은 화면에서 요소의 최대 너비를 sm 크기 보통으로 제한
            // sm:ring-1: 작은 화면에서 요소에 1px 두께의 ring 추가
            */}
            <Dialog.Panel className={"main1"}>
                <div className="flex items-center justify-between">
                    <a href="#" className="main2">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
}
