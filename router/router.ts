import { Router } from "express";
import {
  getTerrorEventsByCasualties,
  getTerrorEventsByCasualtiesInRegions,
} from "../src/controllers/terrorEvent.controller";

const router = Router();

router.get("/analysis/deadliest-attack-types", getTerrorEventsByCasualties);
router.get(
  "/analysis/highest-casualty-regions",
  getTerrorEventsByCasualtiesInRegions
);

export { router };
