import {todoItemType, todoListstate} from "./todoListState";
import {useRecoilState} from "recoil";
import {ChangeEventHandler, useCallback} from "react";

type Props = {
    item: todoItemType;
}

export default function TodoItem(props: Props) {
    const [todoList, setTodoList] = useRecoilState(todoListstate);
    const index = todoList.findIndex((listItem) => listItem === props.item);

    const editItemText: ChangeEventHandler<HTMLInputElement> = useCallback(({target: {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {...props.item, text: value});
        setTodoList(newList);
    },[index, props.item, setTodoList, todoList]);

    const toggleItemCompletion = useCallback(() => {
        const newList = replaceItemAtIndex(todoList, index, {...props.item, isComplete: !props.item.isComplete});
        setTodoList(newList);
    }, [index, props.item, setTodoList, todoList]);

    const deleteItem = useCallback(() => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    },[index, setTodoList, todoList]);

    return (
        <div>
            <input type="text" value={props.item.text} onChange={editItemText} />
            <input type="checkbox" checked={props.item.isComplete} onChange={toggleItemCompletion}/>
            <button onClick={deleteItem}> X </button>
        </div>
    )
}

function replaceItemAtIndex(arr: todoItemType[], index: number, newValue: todoItemType): todoItemType[] {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: todoItemType[], index: number): todoItemType[] {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}