import { TodoList } from "./todo-list/TodoList";

export const TodoLists = ({ lists, getAllLists }: { lists: any[], getAllLists: () => void }) => {
    return (
        <div className="pl- flex flex-col gap-y-3">
            {/* <span className="text-white text-lg">Job Interview</span> */}
            <ul className="flex flex-col gap-y-4 mb-4">
                {lists.length > 0 &&
                    lists.map((list) => (
                        <div key={list.id}>
                            <TodoList list={list} getAllLists={getAllLists} />
                        </div>
                    ))
                }
            </ul>
            {/* <span className="text-white text-lg">Completed Tasks</span> */}
        </div>
    )
}




