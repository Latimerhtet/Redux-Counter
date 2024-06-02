import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/reducers/todo";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todo);
  const loading = useSelector((state) => state.todo.isLoading);
  const err = useSelector((state) => state.todo.isError);
  const getTodoReducer = () => {
    dispatch(getTodos());
  };
  return (
    <div>
      <div className="btn-div">
        <button onClick={getTodoReducer}>Get Todo</button>
      </div>
      <div className="todos">
        {todos.length < 1 && <p>Click get todos button to get started!</p>}
        {loading && <p>loading todos...</p>}
        {!loading &&
          todos.map((data) => {
            return <p key={data.id}>{data.title}</p>;
          })}
        {err && (
          <p style={{ color: "red", backgroundColor: "#fff" }}>
            There is an error loading todos!!
          </p>
        )}
      </div>
    </div>
  );
};

export default Todo;
