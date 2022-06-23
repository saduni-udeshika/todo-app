import { http } from "../http";

const serviceUrl = "todo"

export const getTodos = async () => {
    return await http.get(serviceUrl);
}

export const createTodo = async (todo) => {
    return await http.post(serviceUrl, { todoItem: todo });
}

export const deleteTodo = async (id) => {
    return await http.delete(`${serviceUrl}/${id}`);
}

export const updateTodo = async (id, todo) => {
    return await http.put(serviceUrl, { _id: id, todoItem: todo });
}