'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const assets = window.PulseUtils.ASSETS;
  const sel = document.getElementById('assetSelect');

  assets.forEach(a => {
    const o = document.createElement('option');
    o.value = a;
    o.textContent = a;
    sel.appendChild(o);
  });

  console.log('SINTELIA Pulse Professional v2.0 started');
  console.log('Framework initialized.');
});
