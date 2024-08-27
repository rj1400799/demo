import express from "express";
import bodyParser from "body-parser";

const app = express();

//it's a middleware, app uses for every req's body
app.use(bodyParser.json());

//In memory storage, you can leverage a db
let todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
];

app.all("/", (req, res) => {
  res.send("Im up!");
});

// READ
app.get("/todos", (req, res)=>{
   res.json(todos);
})

// CREATE 
app.post("/todos", (req, res)=>{
   const newTodo = req.body; 
   todos.push(newTodo); 
   res.status(201).json({
      status: 'Sucess',
      message: 'New Todo Added!'
   })
});

// UPDATE
app.put("/todos/:id", (req, res)=> {
   const newTodoData = req.body; 
   const todoParamId = req.params.id;
   const todoIndex = todos.findIndex(td => td.id === todoParamId);
   
   if(todoIndex !== -1){
      todos[todoIndex] = {
         id: req.params.id,
         ...newTodoData,
      }
      res.json({
         message: 'Todo updated successfully'
      })
   } else {
      res.status(400).json({
         message: `Todo id doesn't exist`
      })
   }
})

//DELETE
app.delete('/todos/:id', (req,res)=> {
   const todoParamId = req.params.id;
   const todoIndex = todos.findIndex(td => td.id === todoParamId);
   
   if(todoIndex !== -1){
      todos.splice(todoIndex, 1);
   }

   res.json({
      message: `Todo deleted successfully with id ${todoIndex}`
   })
})

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
