'use client'

interface Task {
  id: string
  text: string
  completed: boolean
}

interface TaskContainerProps {
  tasks: Task[]
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
  className?: string
}

export default function TaskContainer({ 
  tasks, 
  onToggleTask, 
  onDeleteTask,
  className = ""
}: TaskContainerProps) {
  if (tasks.length === 0) {
    return (
      <div className={`task-container empty ${className}`}>
        <p className="empty-message">No tasks yet. Add one above!</p>
        <style jsx>{`
          .task-container.empty {
            text-align: center;
            padding: 40px 20px;
          }
          
          .empty-message {
            color: #6b7280;
            font-size: 16px;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className={`task-container ${className}`}>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <button
            onClick={() => onToggleTask(task.id)}
            className={`checkbox ${task.completed ? 'checked' : ''}`}
          >
            {task.completed && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <span className={`task-text ${task.completed ? 'completed' : ''}`}>
            {task.text}
          </span>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
      <style jsx>{`
        .task-container {
          margin-bottom: 16px;
        }
        
        .task-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #f3f4f6;
        }
        
        .task-item:last-child {
          border-bottom: none;
        }
        
        .checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid #d1d5db;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .checkbox.checked {
          background-color: #3b82f6;
          border-color: #3b82f6;
        }
        
        .checkbox:hover {
          border-color: #3b82f6;
        }
        
        .task-text {
          flex: 1;
          font-size: 16px;
          color: #374151;
        }
        
        .task-text.completed {
          text-decoration: line-through;
          color: #9ca3af;
        }
        
        .delete-button {
          color: #ef4444;
          font-size: 14px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }
        
        .delete-button:hover {
          background-color: #fef2f2;
        }
      `}</style>
    </div>
  )
}
