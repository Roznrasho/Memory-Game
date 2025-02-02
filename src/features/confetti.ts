import * as confetti from "canvas-confetti";

function startConfettiAnimation(): void {
  const count = 200; // Anzahl der Partikel
  const defaults = {
    spread: 50,
    startVelocity: 30,
  };

  const fire = (particleRatio: number, opts: object) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  };

  // Animationsphasen: erst klein, dann größer, dann wieder klein
  fire(0.25, { spread: 30, scalar: 0.5 });
  setTimeout(() => fire(0.5, { spread: 60, scalar: 1.2 }), 300);
  setTimeout(() => fire(0.8, { spread: 100, scalar: 1.5 }), 600);
  setTimeout(() => fire(0.5, { spread: 80, scalar: 1.0 }), 900);
  setTimeout(() => fire(0.3, { spread: 50, scalar: 0.6 }), 1200);
}
console.log("✅ Test-Konfetti wurde aufgerufen.");

export { startConfettiAnimation };
