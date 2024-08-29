import express from "express";
import { addContact, getContact } from "../controllers/contactController";

const router = express.Router();

router.post("/addContact", addContact);
router.get("/", getContact);

export default router;
