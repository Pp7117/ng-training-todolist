package com.prasad.todo.app.repo;

import com.prasad.todo.app.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.nio.file.LinkOption;
public interface TaskRepo extends JpaRepository<Task, Long> {
}
