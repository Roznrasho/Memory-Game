function triggerConfetti(): void {
    const confettiCount = 150; // Anzahl der Konfetti
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"]; // Farben
  
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
  
      // Zufällige Farben und Positionen
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "vw"; // Horizontale Position
      confetti.style.animationDelay = Math.random() * 2 + "s"; // Verzögerung
      confetti.style.width = Math.random() * 10 + 5 + "px"; // Zufällige Größe
      confetti.style.height = confetti.style.width;
  
      document.body.appendChild(confetti);
  
      // Entferne die Konfetti-Elemente nach der Animation
      setTimeout(() => {
        confetti.remove();
      }, 5000); // 3 Sekunden
    }
  }
  
  export { triggerConfetti };
  