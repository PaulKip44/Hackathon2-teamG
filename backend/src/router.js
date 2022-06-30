const express = require("express");

const {
  UserController,
  ProjectController,
  UserProjectController,
  LikeProjectController,
  AgenceController,
  NewController,
  AuthController,
} = require("./controllers");

const router = express.Router();

// ROUTES USER

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.post("/users", UserController.add);
router.delete("/users/:id", UserController.delete);

// ROUTES PROJECT

// on router get project/:id : readUserOnProject get all data of "project" table, AND
// more join table (user, user_as_project , and agence)
router.get("/projects/:id", ProjectController.readUserOnProject);
router.get("/projects", ProjectController.browse);
router.post("/projects", ProjectController.add);
router.delete("/projects/:id", ProjectController.delete);

// ROUTES to add, delete or update a user to a project

router.get("/userhasproject/:userId", UserProjectController.browse);
router.post("/userhasproject", UserProjectController.add);
router.delete(
  "/userunjoinproject/:projectId/:userId",
  UserProjectController.delete
);

// ROUTES to like a project
router.get("/likeproject", LikeProjectController.browse);
router.get("/likeproject/:id", LikeProjectController.read);
router.delete(
  "/unlikeproject/:projectId/:userId",
  LikeProjectController.delete
);
router.post("/likeproject", LikeProjectController.add);
// ROUTES AGENCE

router.get("/agences", AgenceController.browse);
router.get("/agences/:id", AgenceController.read);
router.post("/agences", AgenceController.add);
router.delete("/agences/:id", AgenceController.delete);

// ROUTES NEW

router.get("/news", NewController.browse);
router.get("/news/:id", NewController.read);
router.post("/news", NewController.add);
router.delete("/news/:id", NewController.delete);

// ROUTE AUTH

router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);

module.exports = router;
