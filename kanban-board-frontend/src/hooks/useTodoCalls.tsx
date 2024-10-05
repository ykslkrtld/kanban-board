import axios from 'axios';

interface Todo {
  id?: string;
  title: string;  
  status?: string;
}

const useTodoCalls = () => {
  const getTodo = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/todos/");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const postTodo = async (data: Todo): Promise<Todo | undefined> => {
    try {
      const response = await axios.post("http://localhost:8000/todos/", data);
      return response.data.data;
    } catch (error) {
      console.error("Görev eklenirken bir hata oluştu:", error);
    }
  };
  
  const putTodo = async (id: string, data: Partial<Todo>): Promise<void> => {
    try {
      await axios.put(`http://localhost:8000/todos/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  const delTodo = async (id: string): Promise<void> => {
    try {
      await axios.delete(`http://localhost:8000/todos/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getTodo,
    postTodo,
    putTodo,
    delTodo,
  };
};

export default useTodoCalls;
