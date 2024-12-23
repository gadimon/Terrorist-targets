import { Router } from "express";
import {
  getFiveTerrorOrgByEventsInRegions,
  getHeardersAttacksByRegion,
  getTerrorEventsByCasualties,
  getTerrorEventsByCasualtiesInRegions,
  getTerrorEventsByYearsAndMonth,
  getterrorOrgByYear,
} from "../src/controllers/terrorEvent.controller";

const router = Router();

router.get("/analysis/deadliest-attack-types", getTerrorEventsByCasualties);
router.get(
  "/analysis/highest-casualty-regions",
  getTerrorEventsByCasualtiesInRegions
);
router.get("/analysis/incident-trends/", getTerrorEventsByYearsAndMonth);
router.get("/relationships/top-groups/", getFiveTerrorOrgByEventsInRegions);
router.get("/relationships/groups-by-year/", getterrorOrgByYear);
router.get("/relationships/deadliest-regions/", getHeardersAttacksByRegion);

export { router };
