export function createStatsSection() {
    
    const existingStatsDiv = document.querySelector('.stats');
  if (existingStatsDiv) {
    
    return;
  }
    const statsDiv = document.createElement('div');
    statsDiv.classList.add('stats');
    
  
   
    const timerDiv = document.createElement('div');
    timerDiv.classList.add('timer');
    timerDiv.innerHTML = 'Zeit: <span id="time">0:00</span>';
  
  
    const restartButton = document.createElement('button');
    restartButton.id = 'restartButton';
    restartButton.classList.add('restart-button');
    restartButton.textContent = 'Neu starten';
  
    const movesDiv = document.createElement('div');
    movesDiv.classList.add('moves');
    movesDiv.innerHTML = 'Züge: <span id="moves">0</span>';
  
   
    statsDiv.appendChild(timerDiv);
    statsDiv.appendChild(restartButton);
    statsDiv.appendChild(movesDiv);
  
    
    document.body.appendChild(statsDiv);  
  }
  
  