export function createStatsSection() {
    // Container für die Statistik (Div)
    const existingStatsDiv = document.querySelector('.stats');
  if (existingStatsDiv) {
    // Wenn das Element schon existiert, verhindern wir, dass es erneut erstellt wird
    return;
  }
    const statsDiv = document.createElement('div');
    statsDiv.classList.add('stats');
    
  
    // Timer
    const timerDiv = document.createElement('div');
    timerDiv.classList.add('timer');
    timerDiv.innerHTML = 'Zeit: <span id="time">0:00</span>';
  
    // Neu starten Button
    const restartButton = document.createElement('button');
    restartButton.id = 'restartButton';
    restartButton.classList.add('restart-button');
    restartButton.textContent = 'Neu starten';
  
    // Züge (Moves)
    const movesDiv = document.createElement('div');
    movesDiv.classList.add('moves');
    movesDiv.innerHTML = 'Züge: <span id="moves">0</span>';
  
    // Die einzelnen Elemente zum statsDiv hinzufügen
    statsDiv.appendChild(timerDiv);
    statsDiv.appendChild(restartButton);
    statsDiv.appendChild(movesDiv);
  
    // Den statsDiv zum Body (oder einem anderen Container) hinzufügen
    document.body.appendChild(statsDiv);  // Oder ein anderer spezifischer Container
  }
  
  // Die Funktion aufrufen, um die Statistik-Sektion zu erstellen
  