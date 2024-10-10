const express = require('express');
const router = express.Router();
const userPreferencesController = require('../controllers/userPreferencesController');

router.post('/', userPreferencesController.setPreferences);
router.get('/:userId', userPreferencesController.getPreferences);

module.exports = router;
