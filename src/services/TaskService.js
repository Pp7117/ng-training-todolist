import axios from 'axios';

const API_URL = 'http://localhost:8080/api/task'; // Adjust this based on your setup

const TaskService = {
  getAllTasks: async () => {
    return await axios.get(`${API_URL}/getAllTask`);
  },
  createTask: async (task) => {
    const response = await axios.post(`${API_URL}/createTask`, task);
    return response.data; // Ensure this returns the task including its ID
  },
  updateTask: async (id, task) => {
    const response = await axios.put(`${API_URL}/updateTask/${id}`, task);
    return response.data;
  },
  deleteTask: async (id) => {
    return await axios.delete(`${API_URL}/deleteTask/${id}`);
  },
};

export default TaskService;
