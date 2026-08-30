---
name: Market chart data
description: Durable rule for keeping the Elytra market chart truthful and visually useful.
---

The market chart’s time series is based on the lowest-price snapshot recorded at each poll. OHLC intervals aggregate those snapshots; raw listing transactions remain separate because overpriced listings can distort the chart’s scale without representing market movement.

**Why:** The live auction feed can contain extreme valid asking prices while the market benchmark remains tightly clustered. Mixing both sources makes a truthful linear axis compress the meaningful movement.

**How to apply:** Keep chart High/Low derived from the snapshot observations in the selected interval, and show a flat candle when those real observations are flat. Never add synthetic volatility or a missing price point.