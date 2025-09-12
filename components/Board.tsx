'use client'

import { useState } from 'react'
import Input from './Input'
import Tab from './Tab'
import TaskContainer from './TaskContainer'

interface Task {
  id: string
  text: string
  completed: boolean
}

type Filter = 'all' | 'active' | 'completed'

export default function Board() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskText, setNewTaskText] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: newTaskText.trim(),
        completed: false
      }
      setTasks([...tasks, newTask])
      setNewTaskText('')
    }
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed)
      case 'completed':
        return tasks.filter(task => task.completed)
      default:
        return tasks
    }
  }

  const completedCount = tasks.filter(task => task.completed).length
  const totalCount = tasks.length
  const filteredTasks = getFilteredTasks()

  return (
    <div className="board">
      <div className="board-header">
        <h1 className="board-title">To-Do list</h1>
      </div>
      
      <Input
        value={newTaskText}
        onChange={setNewTaskText}
        onAdd={addTask}
      />
      
      <div className="tabs-container">
        <Tab
          label="All"
          isActive={filter === 'all'}
          onClick={() => setFilter('all')}
        />
        <Tab
          label="Active"
          isActive={filter === 'active'}
          onClick={() => setFilter('active')}
        />
        <Tab
          label="Completed"
          isActive={filter === 'completed'}
          onClick={() => setFilter('completed')}
        />
      </div>
      
      <TaskContainer
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
      
      {tasks.length > 0 && (
        <div className="board-footer">
          <span className="task-count">
            {completedCount} of {totalCount} tasks completed
          </span>
          {completedCount > 0 && (
            <button onClick={clearCompleted} className="clear-button">
              Clear completed
            </button>
          )}
        </div>
      )}
      
      <div className="board-credit">
        Powered by Pinecone academy
      </div>
      
      <style jsx>{`
        .board {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 24px;
          width: 100%;
          max-width: 500px;
          min-height: 400px;
        }
        
        .board-header {
          margin-bottom: 20px;
        }
        
        .board-title {
          font-size: 24px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }
        
        .tabs-container {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .board-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-top: 1px solid #f3f4f6;
          margin-bottom: 16px;
        }
        
        .task-count {
          color: #6b7280;
          font-size: 14px;
        }
        
        .clear-button {
          color: #ef4444;
          font-size: 14px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }
        
        .clear-button:hover {
          background-color: #fef2f2;
        }
        
        .board-credit {
          text-align: center;
          color: #3b82f6;
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}
