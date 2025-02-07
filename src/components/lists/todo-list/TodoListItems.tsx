import { useDeleteList } from "../../../hooks/lists/useDeleteList";
import { Spinner } from "../../ui/Spinner";

export const TodoListItems = ({ list, getListItems, isLoading }: { list: any, getListItems: (id: any) => void, isLoading: boolean }) => {

    const { deleteList, isDeleting } = useDeleteList();

    return (
        <li className="bg-[#393B3C] flex items-center p-4 rounded">
            <p className="text-sm text-[#CFCFCF] ml-2 mr-3">{list.name}</p>
            <div className="ml-auto relative">

                <div className="text-white grid grid-cols-2 items-center gap-x-3">
                    <span className="sr-only">expand list</span>
                    <button onClick={() => getListItems(list.id)} className="relative" disabled={isLoading}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${isLoading ? 'opacity-0' : 'size-4'}`}>
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                        <Spinner className={`${!isLoading ? 'invisible' : 'w-4'}`} />
                    </button>
                    <button onClick={() => deleteList(list.id)} className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${isDeleting ? 'opacity-0' : 'size-4'}`}>
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                        </svg>
                        <Spinner className={`${!isDeleting ? 'invisible' : 'w-4'}`} />
                    </button>
                </div>

            </div>
        </li>
    )
}