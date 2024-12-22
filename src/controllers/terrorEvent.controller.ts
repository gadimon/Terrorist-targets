import { ITerrorEvent } from "../../interfaces/ITerrorEvent";
import {
  AttacksByCasualties,
  RegionsByCasualties,
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
