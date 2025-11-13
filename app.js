const metrics = {
  capital: { score: 97.1, shift: 0.9, description: 'Stress-tested across 42 counterparties' },
  policy: { label: 'High Alignment', swing: -1, description: 'Regulatory impacts tracked in real time' },
  threat: { label: '4 Critical', delta: 3, description: 'AI-mapped exposures this hour' },
  liquidity: { label: 'Robust', shift: 2.4, description: 'Coverage horizon: 72 hours' }
};

const missions = [
  {
    code: 'ORION / Sweep-17',
    status: 'Executing',
    window: 'T+03h',
    detail: 'Deploy hedge ladder against transatlantic tariff escalation.'
  },
  {
    code: 'VANGUARD / Lattice-04',
    status: 'Monitoring',
    window: 'T+09h',
    detail: 'Track liquidity corridors across sterling and yen corridors.'
  },
  {
    code: 'HELIX / Echo-22',
    status: 'Primed',
    window: 'T+18h',
    detail: 'Shadow crypto OTC flows for counterparty fracture indicators.'
  }
];

const entities = [
  {
    name: 'Atlas Clearing Union',
    severity: 'Critical',
    delta: '+5.2%',
    note: 'Derivative margin calls raised; automated backstop engaged.'
  },
  {
    name: 'Sable Sovereign Fund',
    severity: 'Elevated',
    delta: '+2.8%',
    note: 'Policy desk projecting capital controls within 36 hours.'
  },
  {
    name: 'Blue River Quant Desk',
    severity: 'Stable',
    delta: '-1.6%',
    note: 'AI-beacon confirms stabilization after synthetic short squeeze.'
  }
];

const policyAdvisories = [
  {
    title: 'Activate quantum hedge ladder',
    channel: 'Liquidity Mesh',
    impact: 'Coverage +18%'
  },
  {
    title: 'Lobby tri-regional task force',
    channel: 'Policy Lattice',
    impact: 'Alignment +12%'
  },
  {
    title: 'Deploy adaptive credential sweep',
    channel: 'Cyber AI Shield',
    impact: 'Threat -24%'
  }
];

const commandTimeline = [
  {
    time: '08:10 UTC',
    action: 'Brief regulators on quantum hedge coverage scenario.',
    owner: 'Policy Mesh',
    tag: 'Priority'
  },
  {
    time: '07:40 UTC',
    action: 'Reconcile liquidity breach alerts with partner desks.',
    owner: 'Treasury Node',
    tag: 'Live'
  },
  {
    time: '07:05 UTC',
    action: 'Initiate synthetic commodity dampers on energy spike.',
    owner: 'Energy Desk',
    tag: 'Mitigation'
  },
  {
    time: '06:50 UTC',
    action: 'Synchronize global messaging with risk comms cell.',
    owner: 'Comms Grid',
    tag: 'Sync'
  }
];

function renderMetrics() {
  document.getElementById('capital-score').textContent = metrics.capital.score.toFixed(1);
  document.getElementById('capital-shift').textContent = `${metrics.capital.shift > 0 ? '+' : ''}${metrics.capital.shift.toFixed(1)}%`;
  document.getElementById('policy-score').textContent = metrics.policy.label;
  document.getElementById('policy-swing').textContent = `${metrics.policy.swing > 0 ? '+' : ''}${metrics.policy.swing} scenario${Math.abs(metrics.policy.swing) === 1 ? '' : 's'}`;
  document.getElementById('threat-score').textContent = metrics.threat.label;
  document.getElementById('threat-delta').textContent = `${metrics.threat.delta > 0 ? '+' : ''}${metrics.threat.delta} alert${Math.abs(metrics.threat.delta) === 1 ? '' : 's'}`;
  document.getElementById('liquidity-score').textContent = metrics.liquidity.label;
  document.getElementById('liquidity-shift').textContent = `${metrics.liquidity.shift > 0 ? '+' : ''}${metrics.liquidity.shift.toFixed(1)}%`;
}

function renderMissions() {
  const list = document.getElementById('mission-list');
  list.innerHTML = '';

  missions.forEach((mission) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${mission.code}</strong>
      <div class="intel-meta">
        <span>${mission.status}</span>
        <span>${mission.window}</span>
      </div>
      <p>${mission.detail}</p>
    `;
    list.appendChild(li);
  });
}

function renderEntities() {
  const list = document.getElementById('entity-list');
  list.innerHTML = '';

  entities.forEach((entity) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${entity.name}</strong>
      <div class="intel-meta">
        <span>${entity.severity}</span>
        <span>${entity.delta}</span>
      </div>
      <p>${entity.note}</p>
    `;
    list.appendChild(li);
  });
}

function renderPolicies() {
  const list = document.getElementById('policy-list');
  list.innerHTML = '';

  policyAdvisories.forEach((policy) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${policy.title}</strong>
      <div class="intel-meta">
        <span>${policy.channel}</span>
        <span>${policy.impact}</span>
      </div>
    `;
    list.appendChild(li);
  });
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = '';

  commandTimeline.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'timeline-item';
    card.innerHTML = `
      <time>${item.time}</time>
      <strong>${item.action}</strong>
      <p>${item.owner} · ${item.tag}</p>
    `;
    container.appendChild(card);
  });
}

function animateHud() {
  const latency = 120 + Math.floor(Math.random() * 40);
  document.getElementById('mesh-latency').textContent = `${latency} ms`;

  const riskStates = ['Severe', 'Guarded', 'Elevated'];
  const countermeasures = ['Quantum Hedge', 'Adaptive Buffer', 'AI Circuit Breaker'];
  document.getElementById('sector-risk').textContent = riskStates[Math.floor(Math.random() * riskStates.length)];
  document.getElementById('countermeasure').textContent = countermeasures[Math.floor(Math.random() * countermeasures.length)];
}

function randomizeMetrics() {
  metrics.capital.score = Math.max(92, Math.min(99, metrics.capital.score + (Math.random() - 0.5)));
  metrics.capital.shift = Math.max(-1.5, Math.min(2.5, metrics.capital.shift + (Math.random() - 0.5) * 0.4));
  metrics.policy.swing = Math.max(-2, Math.min(2, metrics.policy.swing + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0)));
  metrics.threat.delta = Math.max(0, Math.min(6, metrics.threat.delta + (Math.random() > 0.6 ? 1 : 0) - (Math.random() > 0.8 ? 1 : 0)));
  metrics.liquidity.shift = Math.max(-3, Math.min(3.5, metrics.liquidity.shift + (Math.random() - 0.5) * 0.5));
  renderMetrics();
}

function init() {
  renderMetrics();
  renderMissions();
  renderEntities();
  renderPolicies();
  renderTimeline();
  animateHud();

  setInterval(() => {
    randomizeMetrics();
    animateHud();
  }, 5000);
}

if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
