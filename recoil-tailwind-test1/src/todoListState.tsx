import { atom } from "recoil";

export type todoItemType={              //TodoItemType=todoListItem의 타입 정의
    id:number,
    text:string,
    isComplete:boolean;
}

export const todoListstate = atom<todoItemType[]>({
    key:'todoListstate',                                                                            
    default: [],
})