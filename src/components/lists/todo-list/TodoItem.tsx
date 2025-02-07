import { useEffect } from "react";
import { useCheckTodoItem } from "../../../hooks/lists/todo-lists/useCheckTodoItem";
import { Spinner } from "../../ui/Spinner";

export const TodoItem = ({ task, listItems, setListItems }: { task: any, listItems: any, setListItems: (items: any) => void }) => {

    const { checkItem, checkError, isChecking } = useCheckTodoItem();
    const handleCheckItem = async () => {
        try {
            await checkItem(listItems.id, task.id, !task.checked);
            const updatedTasks = listItems.items.map((t: any) =>
                t.id === task.id ? { ...t, checked: !t.checked } : t
            );
            setListItems({ ...listItems, items: updatedTasks });
        } catch (error) {
            console.error('Error checking item in item component', error);
        }
    }

    useEffect(() => {
        console.log(isChecking, checkError)
    }, [isChecking, checkError])

    return (
        <div key={task.id} className="bg- flex items-center p-4 rounded">
            {
                checkError &&
                <span className="text-xs text-red-500">failed</span>
            }
            <div className="relative">
                <Spinner className={`w-[12px] h-[12px] inset-0 ${!isChecking ? 'invisible' : ''}`} />
                <input
                    type="checkbox"
                    checked={task.checked}
                    className={`accent-[#CFCFCF] rounded size-4 cursor-pointer transition duration-1000 ${isChecking ? 'invisible' : ''}`}
                    onChange={handleCheckItem}
                    disabled={isChecking}
                />
            </div>
            <p className="text-[#CFCFCF] ml-2 mr-3">{task.label}</p>
        </div>
    )
}