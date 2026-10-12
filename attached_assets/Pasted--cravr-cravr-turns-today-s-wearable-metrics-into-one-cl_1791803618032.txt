# cravr

cravr turns today's wearable metrics into one clear meal recommendation in seconds, so active people stop wasting time deciding what to eat.

## What this first working slice does

A user enters today's metrics from their wearable (sleep, HRV, recovery score), their training, meal type, diet, allergies and whether they will cook, prep or order. They press **"What should I eat now?"** and receive:

- One recommended meal with a "why today" explanation that cites their numbers
- Two alternatives
- Three actions: **I'll eat this** (accept), **Swap meal** (promote an alternative) or **Not for me** (reject and get a different pick that never repeats a rejected meal)

## How to open it

- **Live prototype:** [PASTE PUBLISHED REPLIT LINK]
- Or open this repo in Replit and press **Run**. It is a static page (`index.html`, `style.css`, `script.js`) with no backend, no database and no API keys.
- Tip: use **Load sample data** to try the flow in one click.

## AI role: intended vs. current status

**What the future AI system will do:** an LLM will read the user's wearable metrics (eventually through a unified wearable API) together with their preferences and constraints, recommend one meal plus two alternatives, and write a short, plain-language explanation of why that meal fits how their body is doing today.

| Behavior | Status |
| --- | --- |
| Input form, validation, Accept / Swap / Reject flow | **Working** |
| Diet and allergy filtering (vegan, vegetarian, peanuts, dairy, gluten, shellfish) | **Working**, deterministic hard filter (by design this stays rule-based, not left to the AI) |
| Meal recommendation | **Simulated**: picked from a hard-coded library of ~15 meals using a simple scoring rule (recovery state, training, meal type, mode) |
| "Why today" explanation | **Simulated**: a prewritten template that inserts the user's numbers |
| Wearable data | **Simulated**: typed in manually or loaded as sample data; no live device connection |

The results page is labeled **"Simulated AI recommendation · Prototype"**, and every page states that cravr does not provide medical or dietary advice.

## Test results

| Test | Input or action | What happened | Pass, partial, or fail |
| --- | --- | --- | --- |
| Typical case | Sample data: 6.5 h sleep, HRV 48, recovery 41%, hard workout, post-workout, no restriction, order | Recommended a burrito bowl (higher carb, high protein) with an explanation citing 6.5 h, 41% and the hard workout, plus 2 alternatives. Accept, Swap and Reject all responded correctly. | Pass |
| Challenge case | 4.5 h sleep, HRV 25, recovery 22%, hard workout, dinner, vegan, peanut allergy, meal prep; then pressed "Not for me" repeatedly | Every pick and replacement was vegan and peanut-free (tofu bowl, chickpea curry, lentil soup, quinoa plate, falafel box) and no rejected meal repeated. When options ran out, it showed "You've seen all today's ideas" with a Start over button instead of a dead end. | Pass |
| Invalid or empty case | Left sleep, HRV and recovery empty and pressed the button | The flow stopped and highlighted all three fields with range messages. However, the grey placeholders (7.5, 52, 76) looked like real pre-filled values. I fixed this so they read "example: 7.5" and retested. | Partial → Pass after fix |

## Known limitations

1. **The AI is simulated.** Recommendations come from a fixed meal library and a scoring rule, and the "why today" text is the same template for every meal. Next step: connect an LLM to explain why each specific meal fits, while keeping allergy and diet filters rule-based.
2. **The meal library is small.** Strict combinations (e.g., vegan + allergies) run out after about 5 options. Next step: expand the library or let the AI generate meals within the hard filters.
3. **Mode and reject reasons don't fully shape results.** Choosing "Order" can still return prep-at-home items (e.g., overnight oats), and the reason for rejecting a meal doesn't change the next pick yet. Next step: make mode a filter and use the reject reason in the next recommendation.

## Privacy

No accounts, no saved data. All inputs stay in the browser's memory and disappear on refresh. This repository contains no passwords, API keys or tokens.