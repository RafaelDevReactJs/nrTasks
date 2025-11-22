import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import Layout from './components/layout/Layout.jsx';
import { TaskProvider } from './context/TaskContext.jsx';
import ListTasks from './pages/ListTasks.jsx';
import AddTaskPage from './pages/AddTaskPage.jsx';
import TaskDetails from './components/taskDetails/TaskDetails.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ListTasks />,
      },
      {
        path: '/add-task',
        element: <AddTaskPage />,
      },
      {
        path: '/task-details',
        element: <TaskDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </StrictMode>,
);
