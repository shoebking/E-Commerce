import express from "express";
const route = express.Router();
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getAllOrdersController,
  orderStatusController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

route.post("/register", registerController);
route.post("/login", loginController);
route.post("/forgot-password", forgotPasswordController);
route.get("/test", requireSignIn, isAdmin, testController);
//private user routes
route.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//private admin routes
route.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
route.put("/profile", requireSignIn, updateProfileController);

//all orders
route.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
route.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default route;
