const threatVectors = [
  {
    domain: 'Geopolitical',
    score: 87,
    delta: '+6.2%',
    direction: 'up',
    narrative: 'Escalating tariff posture in transatlantic corridors',
    tags: ['Trade Exposure', 'Supply Chain']
  },
  {
    domain: 'Cyber/AI',
    score: 72,
    delta: '+3.8%',
    direction: 'up',
    narrative: 'Credential stuffing attempts sourced to dark pooling markets',
    tags: ['Identity', 'Critical Systems']
  },
  {
    domain: 'Liquidity',
    score: 54,
    delta: '-2.1%',
    direction: 'down',
    narrative: 'Short-term cash coverage improving on overnight desk',
    tags: ['Treasury', 'FX Hedges']
  },
  {
    domain: 'Regulatory',
    score: 63,
    delta: '+1.4%',
    direction: 'up',
    narrative: 'Policy coalition drafting expedited capital controls',
    tags: ['Policy Radar', 'Capital Flows']
  }
];

const liquidityTimeline = [
  {
    timestamp: '07:40 UTC',
    headline: 'Counterparty stress beacon resolved',
    impact: 'Net exposure -3.4%',
    details: 'Synthetic credit desk unwound deteriorating tranche using AI-assisted hedging sequence.'
  },
  {
    timestamp: '06:55 UTC',
    headline: 'Energy-linked derivatives spike',
    impact: 'Value-at-Risk +5.8%',
    details: 'Commodity corridor flagged for volatility; auto-hedge executing step-down orders.'
  },
  {
    timestamp: '06:02 UTC',
    headline: 'Sovereign bond auction undersubscribed',
    impact: 'Liquidity buffer -1.9%',
    details: 'European regulator briefing triggered emergency liquidity provisioning simulation.'
  }
];

const policyRecommendations = [
  {
    title: 'Deploy Sentinel Hedge Stack',
    description: 'Activate AI-orchestrated option ladder to neutralize tariff-driven FX drag across GBP and CAD exposures.'
  },
  {
    title: 'Engage Policy Response Cell',
    description: 'Cross-functional swarm to scenario-test rapid capital control enactment and pre-clear contingency filings.'
  },
  {
    title: 'Fortify Identity Mesh',
    description: 'Roll adaptive access tokens and biometric circuit breakers to shrink credential attack surface by 48 hours.'
  }
];

const signalField = [
  {
    region: 'APAC',
    metric: 'Synthetic Liquidity Index',
    value: '41.8',
    change: '+2.3%',
    direction: 'positive',
    detail: 'Hong Kong dark pool depth normalizing; carry trade reopening.'
  },
  {
    region: 'EMEA',
    metric: 'Regulatory Pulse',
    value: '68.4',
    change: '+7.1%',
    direction: 'negative',
    detail: 'Accelerated Basel IV compliance timeline signaled by EU macro-prudential board.'
  },
  {
    region: 'Americas',
    metric: 'Counterparty Integrity',
    value: '58.2',
    change: '-1.6%',
    direction: 'negative',
    detail: 'Tier-2 institution flagged with unresolved collateral obligations.'
  },
  {
    region: 'Global',
    metric: 'AI Threat Sentiment',
    value: '73.0',
    change: '+4.5%',
    direction: 'positive',
    detail: 'Neural anomaly radar indicates coordinated probing across data estates.'
  }
];

const commandBriefing = [
  {
    heading: 'Operational Priority',
    text: 'Sustain coverage of sovereign debt channels while reinforcing dark-pool counterparty heuristics. Continue T+48 liquidity drills.'
  },
  {
    heading: 'Strategic Directive',
    text: 'Align board communications with AI-derived forecasts to support policy lobbying across Washington, Brussels, and Singapore corridors.'
  },
  {
    heading: 'Policy Signal',
    text: 'Monitor emergent carbon border tax frameworks; prepare derivatives team for compliance-driven repricing cascade.'
  }
];

function renderThreatMatrix() {
  const container = document.getElementById('threat-matrix');
  container.innerHTML = '';

  threatVectors.forEach((vector) => {
    const card = document.createElement('div');
    card.className = 'threat-card';

    card.innerHTML = `
      <div class="threat-header">
        <span>${vector.domain}</span>
        <span class="threat-score">${vector.score}</span>
      </div>
      <div class="threat-trend ${vector.direction === 'up' ? 'trend-up' : 'trend-down'}">
        <span>${vector.delta}</span>
        <span>${vector.narrative}</span>
      </div>
      <div class="tag-row">
        ${vector.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    `;

    container.appendChild(card);
  });
}

function renderTimeline() {
  const container = document.getElementById('liquidity-timeline');
  container.innerHTML = '';

  liquidityTimeline.forEach((event) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    item.innerHTML = `
      <span class="timeline-timestamp">${event.timestamp}</span>
      <span class="timeline-headline">${event.headline}</span>
      <span class="timeline-impact">${event.impact}</span>
      <span class="timeline-details">${event.details}</span>
    `;

    container.appendChild(item);
  });
}

function renderRecommendations() {
  const container = document.getElementById('policy-recommendations');
  container.innerHTML = '';

  policyRecommendations.forEach((rec) => {
    const item = document.createElement('div');
    item.className = 'recommendation';

    item.innerHTML = `
      <h3>${rec.title}</h3>
      <p>${rec.description}</p>
    `;

    container.appendChild(item);
  });
}

function renderSignals() {
  const container = document.getElementById('signal-grid');
  container.innerHTML = '';

  signalField.forEach((signal) => {
    const card = document.createElement('div');
    card.className = 'signal-card';

    card.innerHTML = `
      <div class="signal-header">
        <span>${signal.region}</span>
        <span>${signal.metric}</span>
      </div>
      <div class="signal-metric">${signal.value}</div>
      <div class="signal-change ${signal.direction}">${signal.change}</div>
      <div class="signal-detail">${signal.detail}</div>
    `;

    container.appendChild(card);
  });
}

function renderBriefing() {
  const container = document.getElementById('briefing');
  container.innerHTML = '';

  commandBriefing.forEach((item) => {
    const block = document.createElement('div');
    block.className = 'briefing-block';

    block.innerHTML = `
      <h3>${item.heading}</h3>
      <p>${item.text}</p>
    `;

    container.appendChild(block);
  });
}

function updateLastSync() {
  const target = document.getElementById('last-sync');
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour12: false });
  target.textContent = time;
}

function pulseSignals() {
  signalField.forEach((signal) => {
    const drift = (Math.random() * 2 - 1) * 0.8;
    const baseValue = parseFloat(signal.value);
    const updated = Math.max(0, baseValue + drift);
    signal.value = updated.toFixed(1);

    const delta = (Math.random() * 2 - 1) * 1.2;
    const change = parseFloat(signal.change);
    const nextChange = change + delta;
    signal.change = `${nextChange > 0 ? '+' : ''}${nextChange.toFixed(1)}%`;
    signal.direction = nextChange === 0 ? 'neutral' : nextChange > 0 ? 'positive' : 'negative';
  });

  renderSignals();
}

function boot() {
  renderThreatMatrix();
  renderTimeline();
  renderRecommendations();
  renderSignals();
  renderBriefing();
  updateLastSync();
  setInterval(updateLastSync, 1000 * 60);
  setInterval(pulseSignals, 1000 * 8);

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navItems.forEach((link) => link.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', boot);
