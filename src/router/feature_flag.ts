import express, { Router } from "express";
import data from "../data/feature_flag_explorer.json";

const router: Router = express.Router();

// @route    GET api/v1/block/test
// @desc     Tests Block Route
// @access   Public

router.get("/", (_req, res) => res.json(data));

export default router;
