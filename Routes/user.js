

const express = require("express");;
const router = express.Router();

const {
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUsers,
    getUserStats,
    updateProfilePicture,
    makeAdmin,
} = require("../controllers/user");
const { verifyAdmin } = require("../middleware/jwt");

// Route to update a user by ID
router.put("/update/:id", verifyAdmin, updateUser);

// Route to delete a user by ID
router.delete("/:id", verifyAdmin, deleteUser);

// Route to get a single user by ID
router.get("/find/:id", verifyAdmin, getSingleUser);

// Route to get all users
router.get("/userList", verifyAdmin, getAllUsers);
// Route to get user stats
router.get("/stats", verifyAdmin, getUserStats);
// updateProfilePicture
router.put("/updatedprofilepic/:userId", updateProfilePicture);
// convert user to admin
router.put("/makeadmin/:id", verifyAdmin, makeAdmin)


module.exports = router;