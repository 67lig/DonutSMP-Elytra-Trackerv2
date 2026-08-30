import { pgTable, real, text, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const elytraListingsTable = pgTable("elytra_listings", {
  id: text("id").primaryKey(),
  itemId: text("item_id"),
  displayName: text("display_name").notNull(),
  category: text("category").notNull(),
  enchantments: text("enchantments").array().notNull(),
  price: real("price").notNull(),
  seller: text("seller").notNull(),
  sellerUuid: text("seller_uuid"),
  quantity: integer("quantity").notNull(),
  timeRemaining: text("time_remaining"),
  collectedAt: timestamp("collected_at", { withTimezone: true }).notNull(),
});

export const priceObservationsTable = pgTable("price_observations", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  category: text("category").notNull(),
  timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
  price: real("price").notNull(),
  priceChange: real("price_change"),
  sampleSize: integer("sample_size").notNull(),
});

export const elytraTransactionsTable = pgTable("elytra_transactions", {
  id: text("id").primaryKey(),
  seller: text("seller").notNull(),
  price: real("price").notNull(),
  category: text("category").notNull(),
  enchantments: text("enchantments").array().notNull(),
  quantity: integer("quantity").notNull(),
  timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
});

export const marketAlertsTable = pgTable("market_alerts", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  type: text("type").notNull(),
  category: text("category").notNull(),
  affectedQuantity: integer("affected_quantity").notNull(),
  previousPrice: real("previous_price"),
  currentPrice: real("current_price"),
  percentageChange: real("percentage_change"),
  estimatedValue: real("estimated_value"),
  detectedAt: timestamp("detected_at", { withTimezone: true }).notNull(),
});

export const insertElytraListingSchema = createInsertSchema(elytraListingsTable);
export const insertPriceObservationSchema = createInsertSchema(priceObservationsTable);
export const insertElytraTransactionSchema = createInsertSchema(elytraTransactionsTable);
export const insertMarketAlertSchema = createInsertSchema(marketAlertsTable);

export type ElytraListingRecord = z.infer<typeof insertElytraListingSchema>;
export type PriceObservationRecord = z.infer<typeof insertPriceObservationSchema>;
export type ElytraTransactionRecord = z.infer<typeof insertElytraTransactionSchema>;
export type MarketAlertRecord = z.infer<typeof insertMarketAlertSchema>;