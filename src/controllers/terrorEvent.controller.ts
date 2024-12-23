import { ITerrorEvent } from "../../interfaces/ITerrorEvent";
import {
  AttacksByCasualties,
  AttacksByYearsAndMonth,
  fiveAttacksByEventeInRegion,
  heardersAttacksByRegion,
  RegionsByCasualties,
  terrorOrgByYear,
} from "../services/terrorEvents.service";
import { Request, Response } from "express";

export const getTerrorEventsByCasualties = async (
  req: Request,
  res: Response
) => {
  try {
    const TerrorEvents: ITerrorEvent[] | null = await AttacksByCasualties();
    if (!TerrorEvents) {
      res.status(404).json({ msg: "Terror Events not found" });
      return;
    }
    res.json(TerrorEvents);
  } catch (error) {
    res.status(500).json({ msg: "Server error" + error });
  }
};

export const getTerrorEventsByCasualtiesInRegions = async (
  req: Request,
  res: Response
) => {
  try {
    const TerrorEvents: ITerrorEvent[] | null = await RegionsByCasualties();
    if (!TerrorEvents) {
      res.status(404).json({ msg: "Terror Events not found" });
      return;
    }
    res.json(TerrorEvents);
  } catch (error) {
    res.status(500).json({ msg: "Server error" + error });
  }
};

export const getTerrorEventsByYearsAndMonth = async (
  req: Request,
  res: Response
) => {
  try {
    const startOfYear = Number(req.query.startOfYear);
    const endOfYear = Number(req.query.endOfYear);
    const startOfMonth = Number(req.query.startOfMonth);
    const endOfMonth = Number(req.query.endOfMonth);
    const searchDate = { startOfYear, endOfYear, startOfMonth, endOfMonth };
    const TerrorEvents = await AttacksByYearsAndMonth(searchDate);
    if (!TerrorEvents) {
      res.status(404).json({ msg: "Terror Events not found" });
      return;
    }
    res.json(TerrorEvents);
  } catch (error) {
    res.status(500).json({ msg: "Server error" + error });
  }
};

export const getFiveTerrorOrgByEventsInRegions = async (
  req: Request,
  res: Response
) => {
  try {
    const regionName = req.query.regionName as string;
    const limit = Number(req.query.limit);
    const TerrorEvents: ITerrorEvent[] | null =
      await fiveAttacksByEventeInRegion(regionName, limit);
    if (!TerrorEvents) {
      res.status(404).json({ msg: "Terror Events not found" });
      return;
    }
    res.json(TerrorEvents);
  } catch (error) {
    res.status(500).json({ msg: "Server error" + error });
  }
};

export const getterrorOrgByYear = async (req: Request, res: Response) => {
  try {
    const year = Number(req.query.year);
    const TerrorEvents = await terrorOrgByYear(year);
    if (!TerrorEvents) {
      res.status(404).json({ msg: "Terror Events not found" });
      return;
    }
    res.json(TerrorEvents);
  } catch (error) {
    res.status(500).json({ msg: "Server error" + error });
  }
};

export const getHeardersAttacksByRegion = async (
  req: Request,
  res: Response
) => {
  try {
    const groupName = req.query.year as string;
    const TerrorEvents = await heardersAttacksByRegion(groupName);
    if (!TerrorEvents) {
      res.status(404).json({ msg: "Terror Events not found" });
      return;
    }
    res.json(TerrorEvents);
  } catch (error) {
    res.status(500).json({ msg: "Server error" + error });
  }
};
