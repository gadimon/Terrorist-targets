import { Router } from "express";
import { getTerrorEventsByCasualties } from "../src/controllers/terrorEvent.controller";

const router = Router();

router.get("/analysis/deadliest-attack-types", getTerrorEventsByCasualties);

export { router };
