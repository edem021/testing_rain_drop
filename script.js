function makeItRain() {
  const root = document.getElementById('root');
  // Clear existing content
  root.innerHTML = '';

  // Create rain containers
  const frontRow = document.createElement('div');
  frontRow.classList.add('rain', 'front-row');
  const backRow = document.createElement('div');
  backRow.classList.add('rain', 'back-row');

  // Append containers to root
  root.appendChild(frontRow);
  root.appendChild(backRow);

  // Generate raindrops
  let increment = 0;
  while (increment < 100) {
    const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    increment += randoFiver;

    // Create front-row drop
    const frontDrop = document.createElement('div');
    frontDrop.classList.add('drop');
    frontDrop.style.left = `${increment}%`;
    frontDrop.style.bottom = `${randoFiver + randoFiver - 1 + 100}%`;
    frontDrop.style.animationDelay = `0.${randoHundo}s`;
    frontDrop.style.animationDuration = `0.5${randoHundo}s`;

    const frontStem = document.createElement('div');
    frontStem.classList.add('stem');
    frontStem.style.animationDelay = `0.${randoHundo}s`;
    frontStem.style.animationDuration = `0.5${randoHundo}s`;

    const frontSplat = document.createElement('div');
    frontSplat.classList.add('splat');
    frontSplat.style.animationDelay = `0.${randoHundo}s`;
    frontSplat.style.animationDuration = `0.5${randoHundo}s`;

    frontDrop.appendChild(frontStem);
    frontDrop.appendChild(frontSplat);
    frontRow.appendChild(frontDrop);

    // Create back-row drop
    const backDrop = document.createElement('div');
    backDrop.classList.add('drop');
    backDrop.style.right = `${increment}%`;
    backDrop.style.bottom = `${randoFiver + randoFiver - 1 + 100}%`;
    backDrop.style.animationDelay = `0.${randoHundo}s`;
    backDrop.style.animationDuration = `0.5${randoHundo}s`;

    const backStem = document.createElement('div');
    backStem.classList.add('stem');
    backStem.style.animationDelay = `0.${randoHundo}s`;
    backStem.style.animationDuration = `0.5${randoHundo}s`;

    const backSplat = document.createElement('div');
    backSplat.classList.add('splat');
    backSplat.style.animationDelay = `0.${randoHundo}s`;
    backSplat.style.animationDuration = `0.5${randoHundo}s`;

    backDrop.appendChild(backStem);
    backDrop.appendChild(backSplat);
    backRow.appendChild(backDrop);
  }
}

const loadEvent = () => {
  makeItRain();
}

window.addEventListener("load", loadEvent);