import  express  from "express";
import {getAllProduts,getAllProdutsTesting} from "../controllers/controllers.js"
const router =express.Router()
router.route("/").get(getAllProduts);
router.route("/testing").get(getAllProdutsTesting)
export default router
