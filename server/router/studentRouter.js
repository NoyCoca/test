const appRouter = require('express').Router();
const { model } = require('mongoose');
const StudentController = require('../controllers/studentController')


appRouter.get('/all', StudentController.getAllStudent)
appRouter.get('/:name', StudentController.getByName)
appRouter.post('/student', StudentController.createNewStudent)
appRouter.delete('/:id', StudentController.deleteStudentById)
appRouter.put('/:id', StudentController.updateStudentById)

module.exports = appRouter;