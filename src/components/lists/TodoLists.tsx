import { TodoList } from "./todo-list/TodoList";

export const TodoLists = ({ lists }: { lists: any[] }) => {
    return (
        <div className="pl-8 flex flex-col gap-y-3">
            {/* <span className="text-white text-lg">Job Interview</span> */}
            <ul className="flex flex-col gap-y-4 mb-4">
                {lists &&
                    lists.map((list) => (
                        <div key={list.id}>
                            <TodoList list={list} />
                        </div>
                    ))
                }
            </ul>
            {/* <span className="text-white text-lg">Completed Tasks</span> */}
        </div>
    )
}




