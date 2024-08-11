import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

export default function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Learn about redux and redux Toolkit
    </h1>
    <AddTodo />
    <Todos />
    </>
  )
}