import { useEffect, useState } from "react";
import { StarIcon } from "../../../assets/icons/StarIcon";
import { useGetSmartSuggestions } from "../../../hooks/lists/todo-lists/useGetSmartSuggestions";
import { useGetListItems } from "../../../hooks/lists/useGetListItems";
import { useTodoList } from "../../../hooks/lists/useTodoList";
import { TodoItem } from "./TodoItem";
import { TodoListIdentifier } from "./TodoListIdentifier";
import { classNames } from "../../../utils/helpers";


export const TodoList = ({ list, getAllLists }: { list: any, getAllLists: () => void }) => {
    const { getListItems, setListItems, listItems, isLoading } = useGetListItems();
    const { isAddingItem, handleAddItem, handleInputChange, handleSaveItems, handleShiftEnter, handleNewInput, newItems, inputingItem } = useTodoList(list.id);
    const { getSmartSuggestions, isSuggesting, smartSuggestions } = useGetSmartSuggestions();

    const [updatedTasks, setUpdatedTasks] = useState(list || []);

    const doSaveItems = async () => {
        // const prevTasks = [...updatedTasks.items];
        // const optimisticTasks = [...updatedTasks.items, ...newItems];
        // setUpdatedTasks(optimisticTasks)
        // setListItems(optimisticTasks)
        console.log('start')
        // setUpdatedTasks({ ...updatedTasks, items: optimisticTasks }); // Optimistic update!
        // setListItems(optimisticTasks); // Update listItems for other components
        try {
            await handleSaveItems();
            getListItems(list.id);
        } catch(error) {
            console.error('error adding item from todolist component', error)
            // setUpdatedTasks(prevTasks);
            // setListItems(prevTasks);
        }
        
    }

    const handleKeyMap = async (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            await handleSaveItems();
            await getListItems(list.id);
            // setUpdatedTasks(listItems);
        } else if (e.key === 'Enter' && e.shiftKey) {
            handleShiftEnter(index)
        }
    }
    
    

    useEffect(() => {
        if(listItems)
            setUpdatedTasks(listItems);
            console.log('list items', listItems)
    }, [listItems])

    const handleSmartSuggest = () => {
        getSmartSuggestions(list.id);
    }

    const [isShowingItems, setIsShowingItems] = useState(false);

    const handleSetIsShowingItems = () => {
        setIsShowingItems(prev => !prev);
    }

    return (
        <div className="bg-[#1F1F1F] rounded-lg border border-[#323232] p-4">
            <TodoListIdentifier list={list} getListItems={getListItems} isLoading={isLoading} isShowingItems={isShowingItems} setIsShowingItems={handleSetIsShowingItems} getAllLists={getAllLists} />
            {/* {isShowingItems && ( */}
            <div className={classNames('grid transition-[grid-template-rows_500ms]', isShowingItems ? 'grid-rows-[1fr] py-6' : 'grid-rows-[0fr]')}>
                <div className="overflow-hidden">
                    <div className="grid bg-[#1D1D1D] border border-[#34383A] rounded-lg p-3">
                        {
                            (list.items.length > 0) &&
                            <button className="ml-auto p-4 cursor-pointer text-white" onClick={handleSmartSuggest}>
                                {isSuggesting ?
                                    <div className="logo1 text-white flex gap-x-[2px]">
                                        {'suggesting...'.split('').map((letter, index) => (
                                            <div key={index} className="letter1" style={{ animationDelay: `${index * 0.15}s` }}>
                                                {letter}
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <div className="flex items-center gap-x-2 text-[#898989]">
                                        <span>Get smart suggestion</span>
                                        <StarIcon outline />
                                    </div>
                                }
                            </button>
                        }
                        <p className={`text-white max-w-70ch transition duration-1000 ${smartSuggestions ? 'opacity-100' : 'opacity-0'}`}>{smartSuggestions}</p>
                        <div className="text-white w-full">
                            {updatedTasks.items.map((task: any) => (
                                <TodoItem key={task.id} task={task} listItems={list} setListItems={setListItems} getListItems={getListItems} />
                            ))}
                            {newItems.map((item, index) => (
                                <NewItemInput
                                    key={index}
                                    item={item}
                                    index={index}
                                    newItems={newItems}
                                    handleInputChange={handleInputChange}
                                    handleKeyMap={handleKeyMap}
                                    handleNewInput={handleNewInput}
                                />
                            ))}
                            <ActionButtons
                                handleAddItem={handleAddItem}
                                doSaveItems={doSaveItems}
                                inputingItem={inputingItem}
                                isAddingItem={isAddingItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    );
};

const NewItemInput = ({ item, index, newItems, handleInputChange, handleKeyMap, handleNewInput }: any) => (
    <div className="flex items-center p-4 rounded">
        <input
            type="text"
            value={item.label}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="text-sm text-[#CFCFCF] ml-2 mr-3 bg-[#393B3C] p-2 rounded field-sizing-content max-w-full min-w-[200px] placeholder:text-xs max-sm:placeholder-transparent"
            autoFocus={index === newItems.length - 1}
            onKeyDown={(e) => handleKeyMap(e, index)}
            placeholder={index === newItems.length - 1 ? 'Shift+Enter new item, Enter save' : ''}
        />
        <button onClick={() => handleNewInput(index)} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
            </svg>
        </button>
    </div>
);

const ActionButtons = ({ handleAddItem, doSaveItems, inputingItem, isAddingItem }: any) => (
    <div className="flex gap-x-3 my-5">
        <button className="bg-[#7FD6E1] text-[#222222] text-xs flex items-center gap-x-1 cursor-pointer p-1 rounded" onClick={handleAddItem}>
            Add item
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
        </button>
        {inputingItem && (
            <button className="text-sm flex items-center gap-x-1 cursor-pointer" onClick={doSaveItems}>
                {isAddingItem ? 'Saving items ...' : 'Save items'}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z" clipRule="evenodd" />
                </svg>
            </button>
        )}
    </div>
);

