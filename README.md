# Trailbook for Mac

[Download Trailbook for Mac](releases/Trailbook-macOS-arm64.zip?raw=true). Unzip it, move Trailbook.app to Applications, and double-click it. This build runs on Apple silicon with macOS 14 or newer. The planner and world overview are bundled inside the app. Detailed maps use the internet.

This locally signed build is intended for personal use. macOS may ask you to approve the downloaded app on first launch. You can also build it locally using the instructions below.

## Plan a hike

1. Pick a route on the world map or filter the route list by region, difficulty and season. Numbered overview pins group nearby routes.
2. Open a route and choose **Add to wishlist**. In **My trips**, select **Plan this hike** to edit your travel dates, budget, itinerary, packing list and safety notes. Choose **Save trip** to keep it under **Planned**.
3. Choose **Import GPX** on a selected route to display a track for the current view. Track segments keep their original breaks. Optional **Route options** sends the selected waypoints to OpenRouteService using your own key.

The offline world outline provides geographic context. Detailed OpenFreeMap maps and OpenRouteService estimates require internet access. Route pins are approximate. Imported tracks and routing estimates need local verification before hiking.

The Mac app keeps its saved trip data in its own WebKit storage. A separate browser has separate storage. No account is required.

## Build from source

On a Mac with macOS 14 or newer, Apple command line tools and Python 3, double-click **Open-Trailbook.command** to build and launch. To rebuild after editing, run `zsh build.command` from the source folder, then open `build/Trailbook.app`. The build targets the Mac’s processor and signs the bundle locally.

The browser edition can also be served locally by running `python3 -m http.server 8080 --bind 127.0.0.1` from this folder and opening <http://127.0.0.1:8080>.

## Files and map credits

- Trailbook.swift hosts the planner in a SwiftUI Mac window. macos/bundle.py embeds the startup resources during the build.
- index.html, app.js, styles.css and alpine.css define the planner, route collection and visual design.
- vendor contains the bundled MapLibre GL JS 5.6.2 distribution and licenses, and Natural Earth’s public domain land outline.
- [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) renders the map. [OpenFreeMap](https://openfreemap.org/) provides online maps using [OpenStreetMap](https://www.openstreetmap.org/copyright) and [OpenMapTiles](https://openmaptiles.org/). [Natural Earth](https://www.naturalearthdata.com/) supplies the offline overview.
