

const express = require('express');
const { createTeam, assignTask, getTeamProgress, getAssignedTasks, updateTaskStatus } = require('../controllers/TeamController');
const router = express.Router();

router.post('/team', createTeam);
router.post('/task/assign', assignTask);
router.get('/team/progress', getTeamProgress);
router.get('/task/assigned', getAssignedTasks); // New route for getting assigned tasks
router.put('/task/:taskId/status', updateTaskStatus); // New route for updating task status

module.exports = router;