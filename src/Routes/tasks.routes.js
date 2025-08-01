import { Router } from "express";
import { authRequire } from "../Middlewares/validateToken.js";
import {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask} from "../Controllers/tasks.controller.js";
import { validateSchema } from "../Middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";
import { get } from "mongoose";

const router = Router();

router.get("/tasks", authRequire, getTasks); 

router.get("/tasks/:id", authRequire, getTask)

router.post("/tasks", 
    authRequire, 
    validateSchema(createTaskSchema), 
    createTask)

router.delete("/tasks/:id", authRequire, deleteTask)

router.put("/tasks/:id", authRequire, updateTask)

export default router;