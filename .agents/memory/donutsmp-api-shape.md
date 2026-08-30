---
name: DonutSMP API shape
description: Non-obvious response conventions of the DonutSMP auction API used by future market integrations.
---

The DonutSMP auction list endpoint is called with POST and a JSON body such as `{ "search": "elytra", "sort": "recently_listed" }`. Responses wrap auction records in a top-level `result` array. Seller identity is nested under `seller.name` and `seller.uuid`; item identity is under `item.id`; remaining time is provided in milliseconds. Enchantment levels may appear under `item.enchants.enchantments.levels`.

**Why:** A generic flat-field parser can report a healthy API while silently dropping every qualifying listing or misreading remaining time.

**How to apply:** Keep normalization tolerant of wrapper and nesting variations, but discard records when item identity, price, or qualifying enchantment evidence is missing rather than inventing market data.