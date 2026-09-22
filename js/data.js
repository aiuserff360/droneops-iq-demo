/* =========================================================
   DroneOps IQ demo · workspace + shared data (VQ.ops). Demo moment: Tue 16 Sep 2026, 08:42 AM.
   The platform is use-case neutral. Three worked use cases tie it to real operations:
   dam = area inspection (grid), highway = corridor patrol, refinery = point-of-interest thermal inspection.
   ========================================================= */
VQ.workspace('ops', {
  name: 'DroneOps IQ', short: 'DroneOps', icon: 'drone', home: 'cc', alerts: 'alerts',
  brandSub: 'Drone Operations Intelligence Platform',
  tag: `<div class="flow">Plan ${VQ.I('arrow')} Orchestrate ${VQ.I('arrow')} Fly ${VQ.I('arrow')} Monitor ${VQ.I('arrow')} Analyze ${VQ.I('arrow')} Act</div><small>Smarter missions. Safer operations. Greater impact.</small>`,
  claim: '', search: 'Search missions, drones, locations…', hero: 'Plan Today.<br>See Tomorrow.<br>Operate Smarter.', strip: 'ONE FLEET. ANY MISSION.<br>ALWAYS READY.',
  rail: [['home', 'Command Center', 'cc'], ['cal', 'Mission Planning', 'plan'], ['file', 'Missions', 'missions'], ['play', 'Live Operations', 'live'], ['net', 'Swarm Control', 'swarm'], ['drone', 'Drone Fleet', 'fleet'], ['video', 'Payloads &amp; Sensors', 'payloads'], ['mappin', 'Geofencing &amp; Airspace', 'airspace'], ['alert', 'Incidents &amp; Alerts', 'alerts', 3], ['bars', 'Data &amp; Analytics', 'analytics'], ['file', 'Reports', 'reports'], ['gear', 'Administration', 'admin']],
  values: [{ icon: 'crosshair', title: 'Plan with Confidence', text: 'Accurate, efficient and safe missions.' }, { icon: 'net', title: 'Multi-Drone, Multi-Use', text: 'Any industry. Any environment.' }, { icon: 'bars', title: 'From Data to Decisions', text: 'Turn aerial data into real value.' }, { icon: 'shield', title: 'Safer Operations', text: 'People. Assets. Communities.' }],
});

VQ.ops = (() => {
  const D = { now: '08:42 AM', date: '16 Sep 2026', user: 'Karan Kamal' };
  D.home = { dronesActive: 18, inAir: 16, onGround: 2, cameras: 42, camOnline: 40, activeMissions: 6, inProgress: 6, planned: 12, zones: 5, alerts: 3, success: 98, responseMin: 42 };
  D.fleet = { total: 42, active: 35, inactive: 5, maintenance: 2, availability: 83, inMaint: 5, battHealth: 87, flightHoursWeek: 128, compliance: 100,
    types: [['Multirotor', 28], ['Fixed Wing', 8], ['VTOL', 4], ['Hybrid', 2]], locations: [['Base - HQ', 12], ['North Ridge', 8], ['East Perimeter', 6], ['South Zone', 6], ['Service Center', 5], ['Other', 5]] };

  /* ---------- the three worked use cases (Mission Planning switches between them) ---------- */
  D.usecases = {
    dam: { key: 'dam', label: 'Dam inspection', id: 'M-2026-043', name: 'Site Inspection – North Ridge Dam', type: 'Inspection', usecase: 'Infrastructure Inspection', location: 'North Ridge Dam, Karnataka', pattern: 'Grid', areaLabel: 'Area', area: '2.4 km²', perimeter: '6.8 km',
      alt: 120, gsd: 2.5, speed: 8, overlapF: 75, overlapS: 65, interval: 2, minutes: 28, waypoints: 126, images: 8400, dataGB: 320, coverage: 96, confidence: 94, blind: '2 (spillway underside, east abutment shadow)',
      maxTerrain: 320, minTerrain: 210, clearance: 50, lat: 12.9712, lon: 77.5931,
      drones: [{ id: 'DR-001', name: 'Drone 1', model: 'DJI Matrice 350', role: 'Lead · Mapping', tone: 'info', p1: 'RGB Camera', p2: 'Thermal Camera', batt: 96, sector: 'Sector A · north face' }, { id: 'DR-003', name: 'Drone 2', model: 'Autel EVO Max', role: 'Thermal', tone: 'warn', p1: 'LiDAR', p2: 'RGB Camera', batt: 91, sector: 'Sector B · spillway and crest' }, { id: 'DR-007', name: 'Drone 3', model: 'DJI Mavic 3T', role: 'Survey', tone: 'violet', p1: 'Multispectral', p2: 'Thermal Camera', batt: 88, sector: 'Sector C · downstream toe' }],
      objective: 'Map the dam face, crest and spillway, and find seepage, cracks and vegetation on the downstream slope.', detect: ['cracks', 'water', 'vegetation', 'thermal', 'people'],
      risks: ['Power line crossing the east abutment at 38 m', 'Wind gusts funnel through the gorge after 11:00 AM', 'No-fly zone: dam control building and switchyard'], img: 'sample-output.jpg' },
    highway: { key: 'highway', label: 'Highway corridor patrol', id: 'M-2026-044', name: 'Corridor Patrol – NH-44 Km 78–92', type: 'Patrol', usecase: 'Highway Corridor Monitoring', location: 'NH-44, near Jadcherla, Telangana', pattern: 'Corridor', areaLabel: 'Corridor', area: '14 km × 120 m', perimeter: '28.2 km',
      alt: 90, gsd: 2.0, speed: 12, overlapF: 70, overlapS: 60, interval: 1, minutes: 34, waypoints: 58, images: 4100, dataGB: 210, coverage: 98, confidence: 92, blind: '1 (under the Km 84 flyover)',
      maxTerrain: 548, minTerrain: 512, clearance: 60, lat: 16.7631, lon: 78.1362,
      drones: [{ id: 'DR-002', name: 'Drone 1', model: 'Autel EVO Max', role: 'Lead · Patrol', tone: 'info', p1: 'Zoom Camera', p2: 'Thermal Camera', batt: 92, sector: 'Km 78 – 85, southbound carriageway' }, { id: 'DR-009', name: 'Drone 2', model: 'WingtraOne (VTOL)', role: 'Survey', tone: 'warn', p1: 'RGB Camera', p2: 'Speaker / Siren', batt: 89, sector: 'Km 85 – 92, northbound carriageway' }, { id: 'DR-014', name: 'Drone 3', model: 'DJI Matrice 30T', role: 'Relay', tone: 'violet', p1: 'Comms relay', p2: 'RGB Camera', batt: 94, sector: 'Holding at Km 85, 150 m, as a radio relay' }],
      objective: 'Patrol 14 km of NH-44 for stalled vehicles, debris, wrong-way movement and queue build-up, and stream to the highway control room.', detect: ['vehicles', 'people', 'objects', 'smoke', 'thermal'],
      risks: ['Flight stays 30 m off the carriageway edge, never over live traffic', 'High-tension line crossing at Km 86.4', 'Helipad advisory at the Km 90 trauma centre'], img: 'feed-highway.jpg' },
    refinery: { key: 'refinery', label: 'Refinery thermal inspection', id: 'M-2026-045', name: 'Thermal Inspection – Process Unit 3', type: 'Inspection', usecase: 'Oil &amp; Gas Asset Inspection', location: 'Refinery, Process Unit 3 (CDU)', pattern: 'Orbits', areaLabel: 'Assets', area: '6 assets · 0.3 km²', perimeter: '2.1 km',
      alt: 80, gsd: 1.2, speed: 4, overlapF: 80, overlapS: 70, interval: 2, minutes: 22, waypoints: 84, images: 2600, dataGB: 140, coverage: 93, confidence: 90, blind: '3 (north side of C-301 above 30 m, pipe rack underside, furnace rear wall)',
      maxTerrain: 62, minTerrain: 0, clearance: 25, lat: 17.0214, lon: 82.2391,
      drones: [{ id: 'DR-006', name: 'Drone 1', model: 'DJI Mavic 3T', role: 'Lead · Thermal', tone: 'info', p1: 'Thermal Camera', p2: 'Zoom Camera', batt: 97, sector: 'Column C-301, three orbits at 20, 40 and 60 m' }, { id: 'DR-011', name: 'Drone 2', model: 'DJI Matrice 350', role: 'Gas survey', tone: 'warn', p1: 'Gas Sensor', p2: 'RGB Camera', batt: 90, sector: 'Pump bay and overhead line, downwind legs' }],
      objective: 'Thermal and gas survey of column C-301, the overhead line and the furnace after this morning’s smoke alert, without sending people up.', detect: ['thermal', 'smoke', 'people', 'defects', 'objects'],
      risks: ['Hot work permit area: keep 15 m from flare header', 'Intrinsically safe zone: no landing inside the unit', 'Wind from SW carries any plume towards the drone’s return leg'], img: 'ref-feed-unit3.jpg' },
  };
  D.projects = { dam: { name: 'North Ridge Dam', sector: 'Infrastructure', icon: 'barrier', live: 'M-2026-001' }, highway: { name: 'NH-44 Corridor', sector: 'Highways', icon: 'road', live: 'M-2026-002' }, refinery: { name: 'Refinery', sector: 'Oil &amp; Gas', icon: 'factory', live: 'M-2026-004' } };
  D.uc = () => D.usecases[VQ.store.get('uc', 'dam')] || D.usecases.dam;
  D.project = () => D.projects[D.uc().key];
  /* header switch: which project every screen is showing */
  VQ.projectSwitch = () => { const cur = D.uc().key; return `<span class="ws-lbl">Project</span>` + Object.entries(D.projects).map(([k, p]) => `<button class="${k === cur ? 'on' : ''}" onclick="VQ.ops.setUc('${k}')" data-tip="${p.sector} · switches every screen to this project">${VQ.I(p.icon)}<span>${p.name}</span></button>`).join(''); };
  D.setUc = k => { VQ.store.set('uc', k); VQ.render(true); };

  /* ---------- payload catalogue ---------- */
  D.payloads = [{ id: 'rgb', name: 'RGB Camera', cat: 'Imaging', img: 'pl-rgb.jpg', text: 'High resolution visual imaging', tags: ['4K', '20 MP'], stock: 24 }, { id: 'thermal', name: 'Thermal Camera', cat: 'Inspection', img: 'pl-thermal.jpg', text: 'Detect heat signatures day or night', tags: ['640 × 512', '≤ 50 mK'], stock: 14 },
    { id: 'lidar', name: 'LiDAR', cat: 'Mapping', img: 'pl-lidar.jpg', text: '3D mapping and high-precision models', tags: ['Up to 300 m', 'cm accuracy'], stock: 5 }, { id: 'multi', name: 'Multispectral', cat: 'Environmental', img: 'pl-multi.jpg', text: 'Vegetation, crop and environmental analysis', tags: ['5 bands', 'NDVI'], stock: 6 },
    { id: 'gas', name: 'Gas Sensor', cat: 'Environmental', img: 'pl-gas.jpg', text: 'Detect methane, CO₂, H₂S and more', tags: ['ppm level', 'Real-time'], stock: 4 }, { id: 'zoom', name: 'Zoom Camera', cat: 'Security', img: 'pl-zoom.jpg', text: 'Long range inspection and surveillance', tags: ['30× optical', '4K'], stock: 9 },
    { id: 'speaker', name: 'Speaker / Siren', cat: 'Security', img: 'pl-speaker.jpg', text: 'Audio communication and alerts', tags: ['120 dB', 'Two-way'], stock: 6 }, { id: 'drop', name: 'Drop Mechanism', cat: 'Other', img: 'pl-drop.jpg', text: 'Deliver payloads, e.g. sensors, supplies', tags: ['5 kg', 'Precision drop'], stock: 3 }];

  /* ---------- missions (today: 42 = 6 in progress + 12 scheduled + 22 completed + 1 paused + 1 failed) ---------- */
  D.missionStats = { today: 42, inProgress: 6, scheduled: 12, completed: 22, paused: 1, failed: 1, completedMonth: 194, withAlerts: 4, flightHours: 96 };
  D.missions = [
    { id: 'M-2026-001', name: 'North Ridge Dam Inspection', use: 'Infrastructure', loc: 'Karnataka, India', drones: 'DR-001, DR-003, DR-007 (Swarm)', n: 3, start: '16 Sep 08:00', status: 'In Progress', pct: 65, alerts: 1, uc: 'dam', img: 'th-eo.jpg' },
    { id: 'M-2026-002', name: 'NH-44 Corridor Patrol', use: 'Highways', loc: 'Telangana, India', drones: 'DR-002, DR-009 (Swarm)', n: 2, start: '16 Sep 07:45', status: 'In Progress', pct: 40, alerts: 1, uc: 'highway', img: 'feed-highway.jpg' },
    { id: 'M-2026-003', name: 'Main Canal Patrol Km 20–50', use: 'Water', loc: 'Andhra Pradesh, India', drones: 'DR-012', n: 1, start: '16 Sep 07:15', status: 'In Progress', pct: 70, alerts: 1, img: 'canal-pump-hose.jpg' },
    { id: 'M-2026-004', name: 'Refinery PU3 Thermal Inspection', use: 'Oil &amp; Gas', loc: 'Andhra Pradesh, India', drones: 'DR-006, DR-011', n: 2, start: '16 Sep 08:30', status: 'In Progress', pct: 20, alerts: 1, uc: 'refinery', img: 'ref-feed-unit3.jpg' },
    { id: 'M-2026-005', name: 'Solar Farm Survey', use: 'Renewable Energy', loc: 'Rajasthan, India', drones: 'DR-015', n: 1, start: '16 Sep 10:30', status: 'Scheduled', pct: 0, alerts: 0, img: 'canal-fields.jpg' },
    { id: 'M-2026-006', name: 'Perimeter Patrol', use: 'Security', loc: 'Pune, India', drones: 'DR-005, DR-010 (Auto)', n: 2, start: '16 Sep 06:00', status: 'Completed', pct: 100, alerts: 0, img: 'feed-perimeter.jpg' },
    { id: 'M-2026-007', name: 'Flood Damage Assessment', use: 'Emergency Response', loc: 'Kerala, India', drones: 'DR-018, DR-019, DR-021 (Swarm)', n: 3, start: '16 Sep 07:00', status: 'In Progress', pct: 40, alerts: 1, img: 'feed-bridge.jpg' },
    { id: 'M-2026-008', name: 'Port Security Sweep', use: 'Maritime', loc: 'Visakhapatnam, India', drones: 'DR-004, DR-016', n: 2, start: '15 Sep 20:00', status: 'Paused', pct: 55, alerts: 0, img: 'feed-tankfarm.jpg' },
    { id: 'M-2026-009', name: 'Urban Mapping', use: 'Smart Cities', loc: 'Bengaluru, India', drones: 'DR-013', n: 1, start: '14 Sep 08:00', status: 'Completed', pct: 100, alerts: 0, img: 'preview-3d.jpg' },
    { id: 'M-2026-010', name: 'Forest Fire Monitoring', use: 'Environment', loc: 'Uttarakhand, India', drones: 'DR-022, DR-023 (Swarm)', n: 2, start: '15 Sep 16:00', status: 'Failed', pct: 30, alerts: 0, img: 'al-smoke.jpg' },
  ];
  D.statusTone = { 'In Progress': 'solid-good', Scheduled: 'info', Planned: 'info', Completed: 'good', Paused: 'warn', Failed: 'crit', Draft: 'gray' };

  /* ---------- fleet table (8 of 42 shown) ---------- */
  D.drones = [
    { id: 'DR-001', name: 'Falcon-1', model: 'DJI Matrice 350', type: 'Multirotor', status: 'In Mission', batt: 78, loc: 'North Ridge', last: 'Today, 07:12', hours: 412, img: 'dr-multi.jpg', mission: 'M-2026-001' }, { id: 'DR-002', name: 'SkyScan-2', model: 'Autel EVO Max', type: 'Multirotor', status: 'In Mission', batt: 69, loc: 'NH-44 Km 81', last: 'Today, 07:45', hours: 256, img: 'dr-multi.jpg', mission: 'M-2026-002' },
    { id: 'DR-003', name: 'Terra-01', model: 'Autel EVO Max', type: 'Multirotor', status: 'In Mission', batt: 64, loc: 'North Ridge', last: 'Today, 08:15', hours: 198, img: 'dr-multi.jpg', mission: 'M-2026-001' }, { id: 'DR-004', name: 'Inspect-1', model: 'WingtraOne', type: 'Fixed Wing', status: 'Charging', batt: 45, loc: 'Base - HQ', last: 'Today, 05:30', hours: 620, img: 'dr-fixed.jpg' },
    { id: 'DR-005', name: 'Map-Alpha', model: 'eBee X', type: 'Fixed Wing', status: 'Standby', batt: 96, loc: 'Base - HQ', last: 'Yesterday, 16:22', hours: 510, img: 'dr-wing.jpg' }, { id: 'DR-006', name: 'Thermo-2', model: 'DJI Mavic 3T', type: 'Multirotor', status: 'In Mission', batt: 82, loc: 'Refinery PU3', last: 'Today, 08:30', hours: 302, img: 'dr-multi.jpg', mission: 'M-2026-004' },
    { id: 'DR-007', name: 'Perim-3', model: 'DJI Mavic 3T', type: 'Multirotor', status: 'In Mission', batt: 71, loc: 'North Ridge', last: 'Today, 07:55', hours: 188, img: 'dr-multi.jpg', mission: 'M-2026-001' }, { id: 'DR-008', name: 'Cargo-1', model: 'Volansi VOLY', type: 'VTOL', status: 'In Maintenance', batt: null, loc: 'Service Center', last: '—', hours: 376, img: 'dr-vtol.jpg' },
  ];
  D.droneTone = { 'In Mission': 'solid-good', Standby: 'info', Charging: 'warn', 'In Maintenance': 'crit', Offline: 'gray' };

  /* ---------- alerts (3 active) ---------- */
  D.alerts = [
    { id: 'AL-0916-01', title: 'Smoke Detected', sev: 'critical', where: 'Refinery · Process Unit 3, distillation column', at: '08:37 AM', conf: 96, src: 'Thermal + drone verified', img: 'al-smoke.jpg', mission: 'M-2026-004', text: 'Fixed thermal camera raised it. The 10:00 inspection was brought forward: DR-006 launched at 08:30 and is verifying from 40 m.' },
    { id: 'AL-0916-02', title: 'Thermal Anomaly', sev: 'high', where: 'North Ridge Dam · downstream toe, chainage 140 m', at: '08:21 AM', conf: 89, src: 'DR-007 thermal', img: 'th-thermal.jpg', mission: 'M-2026-001', text: 'A cold band 6 m long on the downstream slope: the pattern of seepage. Swarm re-tasked DR-007 for a second pass.' },
    { id: 'AL-0916-03', title: 'Stalled Vehicle in Live Lane', sev: 'medium', where: 'NH-44 · Km 84.5 southbound', at: '07:56 AM', conf: 91, src: 'DR-002 zoom camera', img: 'hw-cam-stalled-truck.jpg', mission: 'M-2026-002', text: 'Truck stationary in lane 2 for over 3 minutes. Position and clip sent to the highway control room.' },
  ];
  D.sevTone = { critical: 'solid-crit', high: 'high', medium: 'medium', low: 'low' };

  VQ.searchExtra.ops = [() => [...D.missions.map(m => ({ icon: 'route', label: `${m.id} · ${m.name}`, more: `${m.use} · ${m.status}`, kind: 'Mission', go: 'missions' })), ...D.drones.map(d => ({ icon: 'drone', label: `${d.id} · ${d.name}`, more: `${d.model} · ${d.status}`, kind: 'Drone', go: 'fleet' })), ...D.alerts.map(a => ({ icon: 'alert', label: a.title, more: a.where, kind: 'Alert', go: 'alerts' })), ...D.payloads.map(p => ({ icon: 'video', label: p.name, more: p.cat, kind: 'Payload', go: 'payloads' }))]];
  return D;
})();
