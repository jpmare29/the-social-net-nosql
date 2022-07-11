const router = require('express').Router()
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userControllers');
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtControllers');

router.route('/users').get(getAllUsers).post(createUser);

router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/thoughts').get(getAllThoughts).post(createThought);

router.route('/thoughts/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;
