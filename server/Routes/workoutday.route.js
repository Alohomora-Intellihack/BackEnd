const workoutrouter= require("express").Router();
const controller = require('../Controllers/workoutday.controller');

// workoutrouter.get('/',controller.getTotalCalories);
workoutrouter.get('/exercises/:day',controller.getExerciseForDay);
// workoutrouter.get('/totcalories',controller.getCaloriesPerDay)

module.exports = workoutrouter;