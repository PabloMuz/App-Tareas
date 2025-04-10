# Personal Task Manager

Welcome to Personal Task Manager! This application helps you organize and manage your personal tasks efficiently.

## Features

- **Task Creation**: Easily create tasks with titles, descriptions, due dates, and priority levels.
- **Task Management**: View, edit, mark as completed, and delete tasks from your list.
- **Priority Levels**: Assign priority levels (high, medium, low) to tasks for better organization.
- **Due Date Reminders**: Set due dates for tasks and receive reminders to stay on track.
- **User Authentication**: Securely sign up, log in, and manage your account.
- **Responsive Design**: Access your tasks on desktop, tablet, and mobile devices.
  
## Technologies Used

- **Frontend**:
  - HTML, CSS, JavaScript
  - React.js for building user interface components
  - Tailwind CSS for styling
  
- **Backend**:
  - Node.js with Express.js for server-side logic
  - JSON Web Tokens (JWT) for user authentication
  
  

## Contributions

Contributions are welcome! If you have any suggestions, bug fixes, or feature requests, please open an issue or submit a pull request.

## Author

This project was developed by Pablo Muñoz, guided by Udemy and Bluuweb courses.

## Preview

[Preview App](https://friendly-apps-task.netlify.app/)

## Seguridad y Variables de Entorno

El archivo `firebase-messaging-sw.js` contiene claves públicas necesarias para que Firebase Cloud Messaging funcione correctamente en producción. Aunque son visibles, **no representan un riesgo de seguridad**, ya que son requeridas por cualquier cliente web de Firebase.

Este archivo ha sido excluido del repositorio (`.gitignore`) para evitar advertencias automáticas de GitHub sobre claves expuestas. Se debe recrear manualmente en producción con las variables necesarias (ver documentación interna o sección de despliegue).
