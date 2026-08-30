import { Router, type IRouter, type Response } from "express";
import {
  GetElytraAlertsQueryParams,
  GetElytraAlertsResponse,
  GetElytraDashboardResponse,
  GetElytraHistoryQueryParams,
  GetElytraHistoryResponse,
  GetElytraListingsQueryParams,
  GetElytraListingsResponse,
  GetElytraTransactionsQueryParams,
  GetElytraTransactionsResponse,
} from "@workspace/api-zod";
import { elytraMarketService } from "../lib/elytra-market";

const router: IRouter = Router();

function invalidQuery(res: Response, message: string): void {
  res.status(400).json({ error: message });
}

router.get("/elytra/dashboard", async (_req, res): Promise<void> => {
  const data = await elytraMarketService.getDashboard();
  res.json(GetElytraDashboardResponse.parse(data));
});

router.get("/elytra/history", async (req, res): Promise<void> => {
  const parsed = GetElytraHistoryQueryParams.safeParse(req.query);
  if (!parsed.success) {
    invalidQuery(res, parsed.error.message);
    return;
  }
  const data = await elytraMarketService.getHistory(parsed.data.category, parsed.data.range);
  res.json(GetElytraHistoryResponse.parse(data));
});

router.get("/elytra/listings", async (req, res): Promise<void> => {
  const parsed = GetElytraListingsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    invalidQuery(res, parsed.error.message);
    return;
  }
  const data = await elytraMarketService.getListings(parsed.data.category, parsed.data.sort);
  res.json(GetElytraListingsResponse.parse(data));
});

router.get("/elytra/transactions", async (req, res): Promise<void> => {
  const parsed = GetElytraTransactionsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    invalidQuery(res, parsed.error.message);
    return;
  }
  const data = await elytraMarketService.getTransactions(parsed.data.category);
  res.json(GetElytraTransactionsResponse.parse(data));
});

router.get("/elytra/alerts", async (req, res): Promise<void> => {
  const parsed = GetElytraAlertsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    invalidQuery(res, parsed.error.message);
    return;
  }
  const data = await elytraMarketService.getAlerts(parsed.data.limit, parsed.data.threshold);
  res.json(GetElytraAlertsResponse.parse(data));
});

export default router;