import { Header } from "./components/Header";
import { AddTodo } from "./components/AddTodo";
import { TodosList } from "./components/TodosList";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/users";

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="main-container">
      <Header />
      <AddTodo />
      <TodosList />
      <button
        onClick={() =>
          dispatch(login({ name: "vnksldnvklsd", email: "vanklvcnaklnkl" }))
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>

      <div>
        <h3>This is how our redux state looks like...</h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
