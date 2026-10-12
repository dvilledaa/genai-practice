# cravr prototype

## Run on Replit

The `Start application` workflow serves this static page on port 5000 with:

```sh
python3 -m http.server 5000 --bind 0.0.0.0
```

No package installation, secrets, backend, database, or external service is required.

## Prototype behavior

- Open the page, enter sleep, HRV, and recovery values, then choose training, meal, diet, allergies, and preparation mode.
- Use **Load sample data** to fill the sample metrics and preferences.
- The meal recommender is simulated with a local, hard-coded list and does not save data between visits.
- The recommendation is a prototype and is not medical or dietary advice.

The page is implemented in `index.html`, `style.css`, and `script.js`.
