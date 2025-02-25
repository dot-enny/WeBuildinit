import { useDeleteList } from "../../../hooks/lists/useDeleteList";
import { Spinner } from "../../ui/Spinner";
import { classNames } from "../../../utils/helpers";
import { useAppStateStore } from "../../../lib/AppStateStore";

type TodoListItemProps = {
    list: any;
    getListItems: (id: any) => void;
    isLoading: boolean;
    isShowingItems: boolean;
    setIsShowingItems: () => void;
    getAllLists: () => void;
};

export const TodoListIdentifier = ({ list, isLoading, isShowingItems, setIsShowingItems, getAllLists }: TodoListItemProps) => {
    const { deleteList, isDeleting } = useDeleteList();
    const { listObjects, setListObjects, setReloadLists } = useAppStateStore();
    const originalListObjects = [...listObjects];

    const handleDeleteList = async () => {
        // Remove the list with list.id from listObjects
        console.log('delete item', listObjects)
        const updatedLists = listObjects.filter((item: any) => item.id !== list.id);
        console.log(updatedLists)
        setReloadLists(false);
        try {
            await deleteList(list.id);
            setListObjects(updatedLists);
        } catch {
            // Revert listObjects back to its original state in case of an error
            setListObjects(originalListObjects);
            // alert("An error occurred while deleting the list. Please try again.");
            console.log("An error occurred while deleting the list. Please try again.");
            setReloadLists(true);
        }
        getAllLists();
    }

    return (
        <li className="flex items-center">
            <div className="flex items-center">
                <p className="text-white ml-2 mr-3 flex-1 min-w-fit">name: {list.name}</p>
                {list.suggestion.trim() &&
                    <>
                        <div className="bg-[#2F2F2F] h-5 w-0.5" />
                        <p className="text-white ml-2 mr-3 line-clamp-1">suggestion: {list.suggestion}</p>
                    </>
                }
            </div>
            <div className="ml-auto relative min-w-max">
                <div className="text-white grid grid-cols-2 items-center gap-x-3">
                    <span className="sr-only">expand list</span>
                    {/* <ExpandButton onClick={() => getListItems(list.id)} isLoading={isLoading} />
                    <DeleteButton onClick={() => deleteList(list.id)} isDeleting={isDeleting} /> */}
                    <ExpandButton onClick={setIsShowingItems} isLoading={isLoading} isShowingItems={isShowingItems} />
                    <DeleteButton onClick={handleDeleteList} isDeleting={isDeleting} />
                </div>
            </div>
        </li>
    );
};

const ExpandButton = ({ onClick, isLoading, isShowingItems }: { onClick: () => void; isLoading: boolean, isShowingItems: boolean }) => (
    <button onClick={onClick} className={classNames('relative cursor-pointer transition', isShowingItems ? 'rotate-180' : '')} disabled={isLoading}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${isLoading ? "opacity-0" : "size-4"}`}
        >
            <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
            />
        </svg>
        <Spinner className={`${!isLoading ? "invisible" : "w-4"}`} />
    </button>
);

const DeleteButton = ({ onClick, isDeleting }: { onClick: () => void; isDeleting: boolean }) => (
    <button onClick={onClick} className="relative cursor-pointer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${isDeleting ? "opacity-0" : "size-4"}`}
        >
            <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clipRule="evenodd"
            />
        </svg>
        <Spinner className={`${!isDeleting ? "invisible" : "w-4"}`} />
    </button>
);