import { useState } from "react";
import { useGetListItems } from "./useGetListItems";
import { useAddTodoItem } from "./useAddTodoItem";

export const useTodoList = (listId: string) => {
    const { getListItems } = useGetListItems();
    const { addTodoItem } = useAddTodoItem();
    const [isAddingItem, setIsAddingItem] = useState(false);
    const [inputingItem, setInputingItem] = useState(false);
    const [newItems, setNewItems] = useState<any[]>([]);

    const handleAddItem = () => {
        setNewItems([...newItems, { label: '', checked: false }]);
        setInputingItem(true);
    };

    const handleInputChange = (index: number, value: string) => {
        const updatedItems = newItems.map((item, i) =>
            i === index ? { ...item, label: value } : item
        );
        setNewItems(updatedItems);
    };

    const handleSaveItems = async () => {
        setIsAddingItem(true);
        await Promise.all(newItems.map(item => addTodoItem(listId, item.label)));
        setNewItems([]);
        setInputingItem(false);
        await getListItems(listId);
        setIsAddingItem(false);
    };

    const handleNewInput = (index: number) => {
        const updatedItems = newItems.filter((_, i) => i !== index);
        setNewItems(updatedItems);
    }

    const handleShiftEnter = (index: number) => {
        const newItem = { label: '', checked: false };
        const updatedItems = [...newItems.slice(0, index + 1), newItem, ...newItems.slice(index + 1)];
        setNewItems(updatedItems);
        //Set focus to the new input field
        setTimeout(() => {
            const newInput = document.querySelectorAll('input[type="text"]')[index + 1];
            if (newInput) {
                (newInput as HTMLInputElement).focus();
            }
        }, 0);
    };

    const handleKeyMap = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSaveItems();
        } else if (e.key === 'Enter' && e.shiftKey) {
            handleShiftEnter(index)
        }
    }

    return {  isAddingItem, handleAddItem, handleInputChange, handleSaveItems, handleNewInput, handleShiftEnter, handleKeyMap, newItems, inputingItem }
}