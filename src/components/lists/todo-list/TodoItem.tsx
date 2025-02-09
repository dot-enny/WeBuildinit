import { useCheckTodoItem } from "../../../hooks/lists/todo-lists/useCheckTodoItem";
import { Spinner } from "../../ui/Spinner";
import { useDeleteTodoItem } from "../../../hooks/lists/todo-lists/useDeleteTodoItem";
import { useEffect } from "react";

export const TodoItem = ({ task, listItems, getListItems }: { task: any, listItems: any, setListItems: (items: any) => void, getListItems: (id: string) => void }) => {

    const { checkItem, isChecking } = useCheckTodoItem();
    const { deleteItem, isDeleting } = useDeleteTodoItem();

    const handleCheckItem = async () => {
        // store previous state for rollback
        // console.log(listItems)
        // const prevTasks = listItems.items;
        // const updatedTasks = prevTasks.map((t: any) =>
        //     t.id === task.id ? { ...t, checked: !t.checked } : t
        // );
        // optimistic UI update
        // setListItems({ ...listItems, items: updatedTasks });
        try {
            await checkItem(listItems.id, task.id, !task.checked);
            getListItems(listItems.id);
        } catch (error) {
            console.error('Error checking item in item component', error);
            // rollback UI update
            // setListItems({ ...listItems, items: prevTasks });
        }
    }

    const handleDeleteItem = async () => {
        // const prevTasks = [...listItems.items];
        console.log(task.id)
        console.log(listItems);
        const updatedTasks = listItems.items.filter((t: any) => t.id !== task.id);
        console.log(updatedTasks)
        // setListItems({ ...listItems, items: updatedTasks });
        try {
            await deleteItem(listItems.id, task.id);
            getListItems(listItems.id);
        } catch (error) {
            console.error('Error deleting item in item component', error);
            // setListItems({ ...listItems, items: prevTasks });
        }
    }

    useEffect(() => {
        const checkedStates = listItems.items.map((item: any) => { item.label, item.checked });
        console.log(checkedStates)
    }, [listItems])


    return (
        <div key={task.id} className="border border-[#34383A] flex items-center p-4 rounded my-3">
            {/* {
                checkError &&
                <span className="text-xs text-red-500">failed</span>
            } */}
            <div className="relative">
                <Spinner className={`w-[12px] h-[12px] inset-0 ${!isChecking ? 'invisible' : ''}`} />
                <input
                    type="checkbox"
                    checked={task.checked}
                    className={`accent-[#CFCFCF] rounded size-4 cursor-pointer transition duration-1000 ${isChecking ? 'invisible' : ''}`}
                    onChange={handleCheckItem}
                    disabled={isChecking}
                />
                {/* <Checkbox checked={task.checked} onChange={handleCheckItem} isChecking={isChecking} /> */}
            </div>
            <p className="text-[#CFCFCF] ml-2 mr-3">{task.label}</p>
            <button onClick={handleDeleteItem} className="relative ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${isDeleting ? 'opacity-0' : 'size-4 cursor-pointer'}`}>
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                </svg>
                <Spinner className={`${!isDeleting ? 'invisible' : 'w-4 mr-1'}`} />
            </button>
        </div>
    )
}