const express = require('express');
const authenticateToken = require('../middleware/auth');
const { getSupervisors, getProfile , editSupervisorProfile, deleteSupervisor, viewRequests, acceptRequest, profile, rejectRequest, getMyGroups, makeAnncouncement, registerFromFile, reviewDocument, setDeadline} = require('../controllers/supervisor.controller');
const router = express.Router();

router.get('/supervisors', getSupervisors);
router.post('/register-from-file', registerFromFile);
router.get('/get-profile/:id', authenticateToken, getProfile);
router.get('/get-profile', authenticateToken, profile);
router.put('/edit-profile/:id', authenticateToken, editSupervisorProfile);
router.delete('/delete-supervisor/:id', authenticateToken, deleteSupervisor);
router.get('/view-requests', authenticateToken, viewRequests);
router.post('/accept-request/:requestId', authenticateToken, acceptRequest);
router.post('/reject-request/:requestId', authenticateToken, rejectRequest);
router.get('/get-my-groups', authenticateToken, getMyGroups);
router.post('/make-announcement', authenticateToken, makeAnncouncement);
router.post('/review-document/:groupId/:index', authenticateToken, reviewDocument);
router.post('/set-deadline', authenticateToken, setDeadline);

module.exports = router;