import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/reducer/todo";

function App() {
  const dispatch = useDispatch();
  const [todos] = useSelector((store) => store.todo.data);
  const isLoading = useSelector((store) => store.todo.isLoading);

  return (
    <div>
      <div className="text-center mt-10">
        <button
          className="border-2 border-purple-700 p-2 rounded-lg hover:bg-purple-700 hover:text-white "
          onClick={() => dispatch(fetchData())}
        >
          Get Todo
        </button>
      </div>
      {isLoading && <div>loading.....</div>}
      {!isLoading &&
        todos &&
        todos.map((item) => (
          <div key={item.id} className="text-center">
            <p>{item.title}</p>
          </div>
        ))}
      {!isLoading && !todos && <div>Click get todo to get data</div>}
    </div>
  );
}

export default App;
