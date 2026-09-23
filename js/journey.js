/* Guided walkthrough: see the operation, plan a mission step by step, then fly and follow up */
VQ.journey('ops', [
  { id: 'see', label: 'See', screens: [['cc/main', 'Command Center'], ['missions/main', 'Missions']] },
  { id: 'plan', label: 'Plan', screens: [['plan/area', 'Planning · Area & Flight'], ['plan/payload', 'Planning · Payload Configuration'], ['plan/swarm', 'Planning · Swarm Configuration']] },
  { id: 'safe', label: 'Make it safe', screens: [['plan/geofence', 'Planning · Geofencing & Safety'], ['plan/weather', 'Planning · Weather Constraints'], ['plan/schedule', 'Planning · Scheduling'], ['plan/flight', 'Planning · Flight Parameters']] },
  { id: 'capture', label: 'Capture', screens: [['plan/coverage', 'Planning · Coverage & Capture'], ['plan/ai', 'Planning · AI Detection'], ['plan/comms', 'Planning · Communications']] },
  { id: 'launch', label: 'Simulate & Launch', screens: [['plan/simulate', 'Planning · Mission Simulation'], ['plan/readiness', 'Planning · Mission Readiness'], ['plan/launch', 'Planning · Summary & Launch']] },
  { id: 'fly', label: 'Fly', screens: [['live/main', 'Live Operations'], ['control/main', 'Take Control · Pilot View'], ['pilot/main', 'Remote Pilot · Joystick'], ['swarm/main', 'Swarm Control'], ['alerts/main', 'Incidents & Alerts']] },
  { id: 'run', label: 'Run the fleet', screens: [['fleet/main', 'Drone Fleet'], ['payloads/main', 'Payloads & Sensors'], ['airspace/main', 'Geofencing & Airspace'], ['analytics/main', 'Data & Analytics'], ['reports/main', 'Reports'], ['admin/main', 'Administration']] },
]);
