
const routes = [
  {id:'poonhill',name:'Poon Hill & Ghandruk',place:'Annapurna · Nepal',region:'Asia',level:'Moderate',days:'4–6 days',best:'Spring',high:'3,210 m',distance:'42 km*',tag:'SUNRISE · RHODODENDRONS',description:'A classic lower Annapurna loop through forest villages to a sunrise viewpoint over the Annapurna and Dhaulagiri ranges. A gentler Himalayan objective than ABC, with a meaningful climb to Poon Hill.',color:'linear-gradient(145deg,#8aa58b,#c7b490 47%,#435e4d)',waypoints:[['Pokhara',83.95,28.21],['Ulleri',83.72,28.36],['Ghorepani',83.69,28.40],['Poon Hill',83.69,28.40],['Tadapani',83.78,28.39],['Ghandruk',83.81,28.38]],safety:'Poon Hill is around 3,210 m; altitude symptoms can occur. Take a conservative pace, consider skipping the viewpoint if unwell, and check local trail and weather conditions. Travel between Pokhara and trailheads is by road; route distances vary by start point.'},
  {id:'abc-short',name:'Annapurna Base Camp · Jhinu approach',place:'Annapurna Sanctuary · Nepal',region:'Asia',level:'Challenging',days:'6–7 trek days',best:'Spring',high:'4,130 m',distance:'~55 km*',tag:'HIGH HIMALAYA · TEA HOUSES',description:'The shortened approach discussed in your hiking notes: begin near Jhinu Danda and follow the sanctuary corridor via Chhomrong and Machhapuchhre Base Camp. Six to seven days is tight at altitude; reaching ABC is never guaranteed.',color:'linear-gradient(145deg,#6d8a94,#e2dfd4 42%,#4e6572)',waypoints:[['Jhinu Danda',83.80,28.42],['Chhomrong',83.82,28.43],['Bamboo',83.86,28.48],['Himalaya',83.89,28.51],['Deurali',83.91,28.53],['Machhapuchhre Base Camp',83.93,28.55],['Annapurna Base Camp',83.93,28.53]],safety:'This is a demanding high-altitude plan, not a safety recommendation or a verified itinerary. Sleeping elevations rise quickly above 3,000 m. Consult a travel-medicine clinician, use an experienced local guide, check avalanche and weather conditions, and turn back for symptoms or unsafe conditions. Build in acclimatization and contingency days.'},
  {id:'abc-foothills',name:'Ghandruk · Chhomrong · Sinuwa',place:'Annapurna foothills · Nepal',region:'Asia',level:'Moderate',days:'3–5 days',best:'Spring',high:'~2,360 m',distance:'~30 km*',tag:'ANNAPURNA TRAIL · TURNAROUND',description:'Get a taste of the approach toward Annapurna Sanctuary and turn around at a comfortable point. A flexible choice when the goal is mountain scenery and a rewarding walk, without making ABC the finish line.',color:'linear-gradient(145deg,#7a9576,#d6c7a9 55%,#65775e)',waypoints:[['Pokhara',83.95,28.21],['Ghandruk',83.81,28.38],['Chhomrong',83.82,28.43],['Sinuwa',83.85,28.45]],safety:'Choose the turnaround point based on the least fit or least well member of the group. Confirm transport and accommodation locally. Trail conditions, bridge access and walking times can change.'},
  {id:'tmb',name:'Tour du Mont Blanc',place:'France · Italy · Switzerland',region:'Europe',level:'Challenging',days:'10–12 days',best:'Summer',high:'~2,665 m',distance:'165–175 km',tag:'THREE COUNTRIES · ALPINE PASSES',description:'A village-to-village circuit around the Mont Blanc massif, with high passes, glacier views and mountain refuges. The classic trek circles the massif; it does not climb Mont Blanc.',color:'linear-gradient(145deg,#87a4a4,#d9d4c5 48%,#627661)',waypoints:[['Les Houches',6.80,45.89],['Les Contamines',6.73,45.82],['Courmayeur',6.97,45.79],['Champex-Lac',7.12,46.03],['Trient',6.99,46.06],['Chamonix',6.87,45.92]],safety:'Early-season snow may make passes hazardous; mountain weather changes quickly. Book refuges ahead and check official local trail, lift and pass conditions before each stage.'},
  {id:'nanji',name:'Nanjiluo lakes & meadows',place:'Yunnan · China',region:'Asia',level:'Challenging',days:'1–2 days',best:'Autumn',high:'Route-dependent',distance:'Local route varies',tag:'HIGH LAKES · SEASONAL ACCESS',description:'A high-mountain landscape of lakes, forest and open meadow in Yunnan. Access and permitted route boundaries have changed; keep plans flexible and use only officially open routes.',color:'linear-gradient(145deg,#6e988e,#c7d0b6 48%,#55735f)',waypoints:[['Nanjiluo access area',98.86,27.72],['Upper lake area',98.89,27.75]],safety:'The exact trail, access rules and operating season can change. Confirm current official opening, permits, guide requirements and weather locally. Wet-season terrain can become slippery and exposed areas are vulnerable to storms.'},
  {id:'yubeng',name:'Yubeng village walks · 雨崩',place:'Meili Snow Mountain · Yunnan, China',region:'Asia',level:'Challenging',days:'2–5 days',best:'Autumn',high:'Route-dependent',distance:'Choose local stages',tag:'YUNNAN · VILLAGE WALKS',description:'Build a village-based stay around Upper and Lower Yubeng. Pick locally open day walks and allow time for the approach and return.',waypoints:[['Yubeng village area',98.79,28.40]],safety:'Confirm open paths and local transport before setting out. Allow time to adjust to elevation and change plans during heavy rain.'},
  {id:'camino',name:'Camino Francés',place:'Saint-Jean-Pied-de-Port · Santiago',region:'Europe',level:'Moderate',days:'30–35 days',best:'Spring',high:'~1,500 m',distance:'~780 km',tag:'VILLAGES · LONG DISTANCE',description:'A historic long-distance walk across northern Spain with plentiful towns, pilgrim hostels and flexible daily stages. You can choose a shorter section to fit your calendar.',color:'linear-gradient(145deg,#b88f65,#e3d5b9 50%,#779070)',waypoints:[['Saint-Jean-Pied-de-Port',-1.24,43.16],['Pamplona',-1.64,42.81],['Burgos',-3.70,42.34],['León',-5.57,42.60],['Sarria',-7.41,42.78],['Santiago de Compostela',-8.54,42.88]],safety:'Heat, long distances and repetitive strain are common challenges. Reserve popular stays in busy periods, carry water and build rest days into longer itineraries.'},
  {id:'inca',name:'Inca Trail to Machu Picchu',place:'Cusco Region · Peru',region:'Americas',level:'Challenging',days:'4 days',best:'Autumn',high:'4,215 m',distance:'~43 km',tag:'ANDEAN PASSES · PERMIT REQUIRED',description:'A permit-controlled trek through Andean scenery and archaeological sites, ending at Machu Picchu. This reference card marks broad locations only, not the official trail geometry.',color:'linear-gradient(145deg,#6c9282,#d5c4a3 50%,#647559)',waypoints:[['Km 82 trailhead',-72.37,-13.21],['Wayllabamba',-72.43,-13.19],['Dead Woman’s Pass',-72.47,-13.18],['Wiñay Wayna',-72.55,-13.19],['Machu Picchu',-72.545, -13.163]],safety:'Permits and licensed operators are required and limited. Book through an authorized operator and confirm current park rules, altitude advice and trail conditions.'},
  {id:'laugavegur',name:'Laugavegur Trail',place:'Landmannalaugar · Iceland',region:'Europe',level:'Challenging',days:'4–6 days',best:'Summer',high:'~1,100 m',distance:'55 km',tag:'VOLCANIC HIGHLANDS · HUTS',description:'A hut-to-hut traverse across Iceland’s colorful highlands, geothermal areas and glacial valleys. The hiking season is short and depends on access and weather.',color:'linear-gradient(145deg,#a87966,#cfb691 45%,#657c72)',waypoints:[['Landmannalaugar',-19.06,63.99],['Hrafntinnusker',-19.09,63.91],['Álftavatn',-19.17,63.86],['Emstrur',-19.26,63.79],['Þórsmörk',-19.48,63.68]],safety:'Only plan within the official summer season. Weather can shift rapidly; rivers may be dangerous to ford and transport is limited. Check hut reservations, road and river conditions.'},
  {id:'westhighland',name:'West Highland Way',place:'Milngavie · Fort William · Scotland',region:'Europe',level:'Moderate',days:'6–8 days',best:'Summer',high:'~550 m',distance:'154 km',tag:'LOCHS · HIGHLAND PATH',description:'A well-known long-distance trail through lochside paths and Highland landscapes. Flexible daily stages and regular settlements make it easy to tailor.',color:'linear-gradient(145deg,#829584,#c9c8b2 53%,#5b715c)',waypoints:[['Milngavie',-4.32,55.94],['Drymen',-4.45,56.07],['Rowardennan',-4.65,56.13],['Tyndrum',-4.71,56.43],['Kinlochleven',-4.97,56.72],['Fort William',-5.11,56.82]],safety:'Prepare for wet weather, midges and variable surfaces. Book accommodation in peak months and carry a navigation backup.'},
  {id:'jmt',name:'John Muir Trail · section hike',place:'Sierra Nevada · California, USA',region:'Americas',level:'Challenging',days:'5–14 days',best:'Summer',high:'4,009 m',distance:'Section dependent',tag:'SIERRA HIGH COUNTRY · PERMITS',description:'A sample of the high Sierra on one of North America’s most celebrated long-distance routes. Choose a permitted section rather than treating the full trail as a casual outing.',color:'linear-gradient(145deg,#67847a,#e1d2b3 48%,#5e6c56)',waypoints:[['Yosemite Valley',-119.59,37.75],['Tuolumne Meadows',-119.36,37.87],['Reds Meadow',-119.09,37.62],['Evolution Basin',-118.65,37.21],['Mount Whitney area',-118.29,36.58]],safety:'Permits are required; snowpack, wildfire, water availability and altitude affect conditions. Check land-manager guidance and carry a reliable water-treatment plan.'},
  {id:'kilimanjaro',name:'Kilimanjaro · Lemosho route',place:'Kilimanjaro · Tanzania',region:'Africa',level:'Challenging',days:'7–9 days',best:'Summer',high:'5,895 m',distance:'~70 km',tag:'VOLCANIC SUMMIT · GUIDED',description:'A multi-day ascent on Kilimanjaro’s Lemosho approach, with a gradual route profile compared with shorter options. Summit success is uncertain and altitude risk is serious.',color:'linear-gradient(145deg,#759185,#d9d3c0 50%,#697956)',waypoints:[['Londorossi Gate',37.34,-3.17],['Shira Plateau',37.25,-3.06],['Lava Tower',37.36,-3.08],['Barafu Camp',37.36,-3.08],['Uhuru Peak',37.35,-3.07]],safety:'Use a licensed operator, allow enough days for acclimatization and follow guide advice. Acute mountain sickness can become life-threatening; descend promptly for concerning symptoms.'}
];

const defaultGear=['Water & electrolytes','Rain shell','Warm layers','Headlamp + spare batteries','First-aid kit','Offline map'];
const store={get(k,f){try{return JSON.parse(localStorage.getItem('trailbook-'+k))??f}catch{return f}},set(k,v){localStorage.setItem('trailbook-'+k,JSON.stringify(v))}};
let wishlist=store.get('wishlist',[]),planned=store.get('planned',{}),favorites=store.get('favorites',[]),selected=routes[0],activeTab='wishlist',map=null,markers=[],routeLayerSource=null,geometryState=null,sortBy='Recommended';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const routeBy=id=>routes.find(r=>r.id===id);
function notify(msg){const t=$('#toast');t.textContent=msg;t.classList.add('visible');clearTimeout(notify.timer);notify.timer=setTimeout(()=>t.classList.remove('visible'),2300)}
let atlasView = true;
let visibleRoutes = routes;
const emptyGeometry = () => ({ type: 'FeatureCollection', features: [] });
const coastSource = { type: 'geojson', data: overviewLand, attribution: 'Natural Earth' };
const coastLayers = [
  { id: 'atlas-ocean', type: 'background', paint: { 'background-color': '#a8cbd8' } },
  { id: 'atlas-land', type: 'fill', source: 'atlas-coast', paint: { 'fill-color': '#f3e6c9' } },
  { id: 'atlas-shore', type: 'line', source: 'atlas-coast', paint: { 'line-color': '#7796a7', 'line-width': 0.7 } }
];

function initMap() {
  try {
    map = new maplibregl.Map({
      container: 'map', center: [8, 24], zoom: 1.1, minZoom: 0.5,
      renderWorldCopies: false, style: { version: 8, sources: { 'atlas-coast': coastSource }, layers: coastLayers }
    });
    map.on('style.load', () => {
      $('#mapOverlay').hidden = true;
      map.addSource('trailbook-route', { type: 'geojson', data: geometryState || emptyGeometry() });
      map.addLayer({ id: 'track-halo', type: 'line', source: 'trailbook-route', paint: { 'line-color': '#fffaf2', 'line-width': 7 } });
      map.addLayer({ id: 'track', type: 'line', source: 'trailbook-route', paint: { 'line-color': '#753c83', 'line-width': 3.5, 'line-dasharray': [2, 1] } });
      routeLayerSource = map.getSource('trailbook-route');
      renderMarkers();
    });
    map.on('zoomend', renderMarkers);
    map.once('load', loadDetailedBasemap);
  } catch {
    map = null;
    $('#mapStatus').textContent = 'Map unavailable on this display. Choose a route from the list to plan your trip.';
  }
}

async function loadDetailedBasemap() {
  try {
    const endpoint = 'https://tiles.openfreemap.org/styles/liberty';
    const response = await fetch(endpoint, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) return;
    const style = await response.json();
    const background = style.layers.filter(layer => layer.type === 'background');
    style.sources['atlas-coast'] = coastSource;
    style.layers = [...background, ...coastLayers.slice(1), ...style.layers.filter(layer => layer.type !== 'background')];
    routeLayerSource = null;
    map.setStyle(style, { diff: false });
  } catch {
    // The bundled coastline, markers and track overlays remain available.
  }
}

function renderMarkers() {
  if (!map) return;
  markers.forEach(marker => marker.remove());
  markers = [];
  if (atlasView) {
    const groups = [];
    for (const route of visibleRoutes) {
      const [, lon, lat] = route.waypoints[0];
      const location = [lon, lat];
      const pixel = map.project(location);
      const group = groups.find(item => item.pixel.dist(pixel) < 28);
      if (group) group.routes.push(route);
      else groups.push({ pixel, location, routes: [route] });
    }
    for (const group of groups) {
      const pin = document.createElement('button');
      pin.className = 'atlas-pin';
      pin.textContent = group.routes.length === 1 ? '▲' : group.routes.length;
      pin.setAttribute('aria-label', group.routes.map(route => route.name).join(', '));
      pin.title = pin.getAttribute('aria-label');
      const marker = new maplibregl.Marker({ element: pin }).setLngLat(group.location).addTo(map);
      if (group.routes.length === 1) pin.onclick = () => selectRoute(group.routes[0].id);
      else {
        const choices = document.createElement('div');
        for (const route of group.routes) {
          const button = document.createElement('button');
          button.className = 'pin-choice';
          button.textContent = route.name;
          button.onclick = () => selectRoute(route.id);
          choices.append(button);
        }
        marker.setPopup(new maplibregl.Popup({ offset: 16 }).setDOMContent(choices));
      }
      markers.push(marker);
    }
  } else {
    selected.waypoints.forEach(([name, lon, lat], index) => {
      const pin = document.createElement('button');
      pin.className = 'atlas-pin stop-pin';
      pin.textContent = index + 1;
      pin.setAttribute('aria-label', name);
      markers.push(new maplibregl.Marker({ element: pin }).setLngLat([lon, lat])
        .setPopup(new maplibregl.Popup({ offset: 15 }).setText(name)).addTo(map));
    });
  }
  routeLayerSource?.setData(geometryState || emptyGeometry());
}

function showAtlas() {
  atlasView = true;
  geometryState = null;
  $('#routeDetail').classList.remove('show');
  $('.map-actions').hidden = true;
  $('#mapTitle').textContent = 'World map';
  $('#mapSubtitle').textContent = 'Choose a route pin or browse the list';
  $('#geometryNotice').textContent = 'Pins mark approximate route locations';
  map?.easeTo({ center: [8, 24], zoom: 1.1, duration: 350 });
  renderRoutes();
}
function selectRoute(id){atlasView=false; $(".map-actions").hidden=false;selected=routeBy(id)||routes[0];geometryState=null;renderRoutes();renderMarkers();$('#mapTitle').textContent=selected.name;$('#mapSubtitle').textContent=selected.place;$('#geometryNotice').innerHTML='<span>ⓘ</span> Stops show places, not a verified trail line.';$('#routeDetail').classList.add('show');$('#routeDetail').innerHTML=`<span class="eyebrow">${safe(selected.tag)}</span><h3>${safe(selected.name)}</h3><p>${safe(selected.description)}</p><div class="detail-stats"><span>${safe(selected.days)}</span><span>${safe(selected.high)}</span><span>${safe(selected.level)}</span></div><div class="detail-footer"><button id="openRoutePlan">＋ Plan this hike</button><button id="openRouting">Route options ↗</button></div>`;$('#openRoutePlan').onclick=()=>addToWishlist(true);$('#openRouting').disabled=selected.waypoints.length<2;$('#openRouting').onclick=()=>$('#routingDialog').showModal();if(map&&selected.waypoints.length){const pts=selected.waypoints.map(p=>[p[1],p[2]]);const bounds=pts.reduce((b,p)=>b.extend(p),new maplibregl.LngLatBounds(pts[0],pts[0]));map.fitBounds(bounds,{padding:{top:95,bottom:130,left:90,right:90},maxZoom:8,duration:900})}}
function renderRoutes(){let q=$('#searchInput').value.trim().toLowerCase(),reg=$('#regionFilter').value,lev=$('#levelFilter').value,sea=$('#seasonFilter').value;let list=routes.filter(r=>(!q||[r.name,r.place,r.tag,r.description].join(' ').toLowerCase().includes(q))&&(reg==='all'||r.region===reg)&&(lev==='all'||r.level===lev)&&(sea==='all'||r.best===sea||r.best==='Year-round'));if(sortBy==='Shortest')list.sort((a,b)=>parseInt(a.days)-parseInt(b.days));if(sortBy==='Easiest')list.sort((a,b)=>['Easy','Moderate','Challenging'].indexOf(a.level)-['Easy','Moderate','Challenging'].indexOf(b.level));visibleRoutes=list;if(atlasView)renderMarkers();$('#routeCount').textContent=`${list.length} ${list.length===1?'route':'routes'}`;$('#routeList').innerHTML=list.map(r=>`<article class="route-card ${!atlasView&&r.id===selected.id?'selected':''}" data-route="${r.id}"><button class="favorite-button ${favorites.includes(r.id)?'saved':''}" data-fav="${r.id}" aria-label="${favorites.includes(r.id)?'Unsave':'Save'} ${safe(r.name)}">${favorites.includes(r.id)?'♥':'♡'}</button><div class="route-thumb thumb-${r.id}" aria-hidden="true"><span>${safe(r.tag)}</span></div><div class="route-card-body"><div class="route-meta"><span>${safe(r.region)}</span><span>·</span><span class="level-pill ${r.level.toLowerCase()}">${safe(r.level)}</span></div><h3>${safe(r.name)}</h3><div class="route-place">${safe(r.place)}</div><div class="route-stats"><span><b>${safe(r.days)}</b></span><span><b>${safe(r.high)}</b></span></div></div></article>`).join('')||'<div class="empty-state"><div class="empty-icon">⌕</div><h3>No trail found</h3><p>Try a broader search or clear one of the filters.</p></div>';$$('.route-card').forEach(c=>c.addEventListener('click',e=>{if(e.target.closest('[data-fav]'))return;selectRoute(c.dataset.route)}));$$('[data-fav]').forEach(b=>b.onclick=e=>{e.stopPropagation();favorites=favorites.includes(b.dataset.fav)?favorites.filter(id=>id!==b.dataset.fav):[...favorites,b.dataset.fav];store.set('favorites',favorites);renderRoutes()})}
function addToWishlist(open=false){if(!wishlist.includes(selected.id)&&!planned[selected.id]){wishlist.push(selected.id);store.set('wishlist',wishlist);notify('Added to your wishlist')}else notify('This trail is already in your plans');renderPlannerCounts();if(open)openTrip(selected.id)}
function renderPlannerCounts(){$('#wishlistCount').textContent=wishlist.filter(id=>!planned[id]).length;$('#plannedCount').textContent=Object.keys(planned).length}
function openPlanner(tab=activeTab){activeTab=tab;$('#plannerDialog').showModal();renderPlanner()}
function renderPlanner(){renderPlannerCounts();$$('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===activeTab));const ids=activeTab==='wishlist'?wishlist.filter(id=>!planned[id]):Object.keys(planned);$('#plannerTitle').textContent=activeTab==='wishlist'?'Saved for someday':'Trips in the making';$('#plannerBody').innerHTML=ids.length?ids.map(id=>{let r=routeBy(id),p=planned[id];return `<div class="planner-item"><div class="planner-item-icon">⌁</div><div class="planner-item-info"><h3>${safe(r.name)}</h3><p>${safe(p?`${p.status||'Planning'}${p.start?' · '+p.start:''}${p.budget?' · $'+p.budget:''}`:'In your wishlist · '+r.days)}</p></div><div class="planner-item-actions">${p?`<button class="button-quiet" data-edit="${id}">Edit plan</button>`:`<button class="button-primary" data-plan="${id}">Plan this hike</button>`}<button class="button-quiet" data-remove="${id}">×</button></div></div>`}).join(''):`<div class="empty-state"><div class="empty-icon">⌁</div><h3>${activeTab==='wishlist'?'A trail for another day':'Your next trip starts here'}</h3><p>${activeTab==='wishlist'?'Save a route that catches your eye. It will be waiting here.':'Move a trail from your wishlist when you’re ready to make a plan.'}</p></div>`;$$('[data-plan]').forEach(b=>b.onclick=()=>openTrip(b.dataset.plan));$$('[data-edit]').forEach(b=>b.onclick=()=>openTrip(b.dataset.edit));$$('[data-remove]').forEach(b=>b.onclick=()=>removePlan(b.dataset.remove))}
function removePlan(id){if(planned[id])delete planned[id];else wishlist=wishlist.filter(x=>x!==id);store.set('planned',planned);store.set('wishlist',wishlist);renderPlanner();notify('Removed from your plans')}
function openTrip(id){let r=routeBy(id);if(!r)return;let p=planned[id]||{start:'',end:'',budget:'',status:'Planning',notes:'',itinerary:r.waypoints.slice(0,5).map((w,i)=>({title:`Day ${i+1} · ${w[0]}`,detail:'Add a stage, travel day or place to stay.'})),gear:defaultGear.map(name=>({name,checked:false})),safety:r.safety};$('#tripTitle').textContent=r.name;$('#tripStart').value=p.start||'';$('#tripEnd').value=p.end||'';$('#tripBudget').value=p.budget||'';$('#tripStatus').value=p.status||'Planning';$('#tripNotes').value=p.notes||'';$('#safetyNotes').value=p.safety||r.safety;renderItinerary(p.itinerary||[]);renderGear(p.gear||[]);$('#removeFromPlan').style.visibility=planned[id]?'visible':'hidden';$('#tripDialog').dataset.route=id;$('#tripDialog').showModal()}
function renderItinerary(days){$('#itineraryEditor').innerHTML=days.map((d,i)=>`<div class="day-row"><div class="day-number">D${i+1}</div><input data-day-title="${i}" value="${safe(d.title)}" aria-label="Day ${i+1} title"><input data-day-detail="${i}" value="${safe(d.detail)}" placeholder="Notes, stops, lodging…" aria-label="Day ${i+1} details"><button type="button" class="remove-day" data-remove-day="${i}" aria-label="Remove day">×</button></div>`).join('')||'<p class="fine-print">Add a day to start your itinerary.</p>';$$('[data-remove-day]').forEach(b=>b.onclick=()=>{let ds=readDays();ds.splice(+b.dataset.removeDay,1);renderItinerary(ds)})}
function readDays(){return $$('[data-day-title]').map((x,i)=>({title:x.value,detail:$(`[data-day-detail="${i}"]`).value}))}
function renderGear(items){$('#gearEditor').innerHTML=items.map((g,i)=>`<label class="gear-item"><input type="checkbox" data-gear-check="${i}" ${g.checked?'checked':''}><span>${safe(g.name)}</span><button type="button" class="remove-gear" data-gear-remove="${i}" aria-label="Remove gear">×</button></label>`).join('')}
function readGear(){return $$('[data-gear-check]').map((x,i)=>({name:$('#gearEditor').querySelectorAll('.gear-item span')[i].textContent,checked:x.checked}))}
function saveTrip(e){e.preventDefault();if($("#tripStart").value && $("#tripEnd").value && $("#tripEnd").value<$("#tripStart").value){$("#tripEnd").setCustomValidity("End date must be on or after the start date.");$("#tripEnd").reportValidity();$("#tripEnd").setCustomValidity("");return;}let id=$('#tripDialog').dataset.route;planned[id]={start:$('#tripStart').value,end:$('#tripEnd').value,budget:$('#tripBudget').value,status:$('#tripStatus').value,notes:$('#tripNotes').value,itinerary:readDays(),gear:readGear(),safety:$('#safetyNotes').value};wishlist=wishlist.filter(x=>x!==id);store.set('planned',planned);store.set('wishlist',wishlist);$('#tripDialog').close();if($('#plannerDialog').open)renderPlanner();notify('Trip plan saved')}
async function importGpx(file) {
  if (!file) return;
  try {
    const doc = new DOMParser().parseFromString(await file.text(), 'application/xml');
    if (doc.querySelector('parsererror')) throw new Error('Could not read this GPX file');
    const segments = [];
    for (const segment of doc.querySelectorAll('trkseg, rte')) {
      const points = [];
      for (const point of segment.children) {
        if (!['trkpt', 'rtept'].includes(point.localName)) continue;
        const lon = Number(point.getAttribute('lon'));
        const lat = Number(point.getAttribute('lat'));
        if (!point.hasAttribute('lon') || !point.hasAttribute('lat') || !Number.isFinite(lon)
            || !Number.isFinite(lat) || Math.abs(lon) > 180 || Math.abs(lat) > 90) {
          throw new Error('The GPX contains invalid coordinates');
        }
        points.push([lon, lat]);
      }
      if (points.length >= 2) segments.push(points);
    }
    if (!segments.length) throw new Error('No GPX track or route segments found');
    geometryState = {type: 'FeatureCollection', features: segments.map(coordinates => ({
      type: 'Feature', properties: { source: 'GPX import' }, geometry: { type: 'LineString', coordinates }
    }))};
    routeLayerSource?.setData(geometryState);
    const bounds = new maplibregl.LngLatBounds();
    segments.forEach(points => points.forEach(point => bounds.extend(point)));
    map?.fitBounds(bounds, { padding: 65, maxZoom: 16 });
    $('#geometryNotice').textContent = 'Imported GPX · ' + file.name;
    notify('GPX track displayed');
  } catch (error) { notify(error.message); }
}
async function requestOrs(){const key=$('#orsKey').value.trim();if(!key){notify('Add an OpenRouteService key first');return}store.set('orsKey',key);const btn=$('#calculateRoute');btn.disabled=true;btn.textContent='Finding a route…';try{const coordinates=selected.waypoints.map(p=>[p[1],p[2]]);const response=await fetch('https://api.openrouteservice.org/v2/directions/foot-hiking/geojson',{method:'POST',headers:{'Authorization':key,'Content-Type':'application/json','Accept':'application/geo+json, application/json'},body:JSON.stringify({coordinates})});if(!response.ok)throw new Error(`ORS returned ${response.status}. Check the key, route length and service coverage.`);const geo=await response.json();const features=geo.features||[];if(!features.length)throw new Error('ORS did not return a hiking route for these stops.');geometryState={type:'FeatureCollection',features};if(routeLayerSource)routeLayerSource.setData(geometryState);const coords=features.flatMap(f=>f.geometry.coordinates);if(map&&coords.length){const b=coords.reduce((x,p)=>x.extend(p),new maplibregl.LngLatBounds(coords[0],coords[0]));map.fitBounds(b,{padding:100,duration:900})}$('#geometryNotice').innerHTML='<span>ⓘ</span> OpenRouteService hiking estimate · verify locally';$('#routingDialog').close();notify('ORS estimate added. Verify before hiking.')}catch(e){notify(e.message)}finally{btn.disabled=false;btn.textContent='Estimate route'}}
function setup(){initMap();showAtlas();renderPlannerCounts();$('#searchInput').oninput=renderRoutes;$('#regionFilter').onchange=renderRoutes;$('#levelFilter').onchange=renderRoutes;$('#seasonFilter').onchange=renderRoutes;$('#sortButton').onclick=()=>{sortBy=sortBy==='Recommended'?'Shortest':sortBy==='Shortest'?'Easiest':'Recommended';$('#sortButton').innerHTML=`${sortBy} <span>⌄</span>`;renderRoutes()};$('#addToWishlist').onclick=()=>addToWishlist(false);$('#openPlanner').onclick=()=>openPlanner();$$('.close-dialog').forEach(b=>b.onclick=()=>b.closest('dialog').close());$$('.tab').forEach(b=>b.onclick=()=>{activeTab=b.dataset.tab;renderPlanner()});$('#importGpx').onclick=()=>$('#gpxInput').click();$('#gpxInput').onchange=e=>{importGpx(e.target.files[0]);e.target.value=''};$('#zoomIn').onclick=()=>map?.zoomIn();$('#zoomOut').onclick=()=>map?.zoomOut();$('#resetMap').onclick=showAtlas;$('.brand').onclick=e=>{e.preventDefault();showAtlas()};$('#tripForm').onsubmit=saveTrip;$('#addDay').onclick=()=>{let ds=readDays();ds.push({title:`Day ${ds.length+1}`,detail:''});renderItinerary(ds)};$('#addGear').onclick=()=>{let v=$('#newGear').value.trim();if(!v)return;let xs=readGear();xs.push({name:v,checked:false});renderGear(xs);$('#newGear').value=''};$('#gearEditor').onclick=e=>{let b=e.target.closest('[data-gear-remove]');if(b){let xs=readGear();xs.splice(+b.dataset.gearRemove,1);renderGear(xs)}};$('#removeFromPlan').onclick=()=>{let id=$('#tripDialog').dataset.route;delete planned[id];wishlist=wishlist.filter(x=>x!==id);store.set('planned',planned);store.set('wishlist',wishlist);$('#tripDialog').close();renderPlannerCounts();renderPlanner();notify('Trip removed')};$('#orsKey').value=store.get('orsKey','');$('#calculateRoute').onclick=e=>{e.preventDefault();requestOrs()};$('#openPlanner').title='Open trip planner';$('#openPlanner').onclick=()=>openPlanner('wishlist');$('#searchInput').addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();e.target.focus()}});document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#searchInput').focus()}})}
setup();
