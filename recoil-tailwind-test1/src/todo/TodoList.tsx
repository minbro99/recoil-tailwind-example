import { useRecoilValue } from "recoil";
import { todoListstate } from "../states/todoListState";
import TodoItemCreater from './TodoItemCreator';
import TodoItem from './TodoItem';

export default function TodoList() {
    const todolist=useRecoilValue(todoListstate)
    return(
        <div>
            <TodoItemCreater />
            {
                todolist.map((todoItem,index)=>(
                    <TodoItem key={index} item={todoItem} />
                ))
            }
        </div>
    )
}