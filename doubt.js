// const reducer = {
//     page: {
//         value: 1,
//         increase: 2,
//         decrease: 3
//     }
// }

const todos = [
    {id:1, text: "First"},
    {id:2, text: "Second"}
]
todos.push({id:-1,text:"Apple"})

{todos.map((todo)=>console.log(todo.text))}