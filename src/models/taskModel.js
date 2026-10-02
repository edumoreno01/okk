// Base de Dados
let tasks = [
 { id: 1, title: 'Estudar WEB', completed: 0},
 { id: 2, title: 'Revisar PBC', completed: 1},
 { id: 3, title: 'Estudar BD', completed: 0},
];

 // Funções para manipular as tarefas
 const getAllTasks = () => tasks;

 const getTaskId = (id) => tasks.find(task => task.id === parseInt(id));

 const getCompleted = () => {
    return tasks.find(item => item.completed === 1)
 };

 const createTask = (taskData) => {
    const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: taskData.title,
    completed: taskData.completed || false
    };
    tasks.push(newTask);
    return tasks;
 };

const deleteTask = (id) => {
   
   console.log(id);
   const tarefa = tasks.find(task => task.id === parseInt(id));
   console.log(tarefa);
   const indice = tasks.indexOf(tarefa);  
   console.log(indice);
   if (indice !== -1){   
      tasks.splice(indice, 1);
      return tasks;  
   }  
   else {
      return null;
   }
   
 };

const atualizarTask = (taskData) => {
   
    const taskExistente = getTaskId(taskData.id);

   if (!taskExistente) {
      return null;
   }

   if (taskData.title !== undefined && taskData.title !== "") {
      taskExistente.title = taskData.title;
   }

   if (taskData.completed !== undefined) {
      taskExistente.completed = taskData.completed;
   }

   return tasks;
 };

 
const deleteAll = () => {
   tasks =[];
   return tasks;
 };

const filtrarTask = (completed) => {
   console.log(completed);
   const copia = [...tasks];
   if (completed == 1){
      const tarefas = copia.filter(task => task.completed === completed);
      return tarefas
   }
   else{
      const tarefas = copia.filter(task => task.completed === completed);
      return tarefas
   }
} 

 module.exports = {
    getAllTasks ,
    getTaskId ,
    getCompleted ,
    createTask,
    deleteTask,
    atualizarTask,
    deleteAll,
    filtrarTask
 }