package com.prasad.todo.app.service;

import com.prasad.todo.app.entity.Task;
import com.prasad.todo.app.repo.TaskRepo;

import java.util.List;

public interface TaskService  {

    Task getTaskById(Long id);

    List<Task> getAllTask();

    Task createTask( Task task);

    Task updateTask(Long id, Task task);

    void deleteTask(Long id);
}
