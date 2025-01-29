import { timeDisplay,  } from "../main";

function startTimer(): void {
   let  timer = Date.now();
    let  timerInterval = window.setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - timer) / 1000);
      const minutes = Math.floor(elapsedTime / 60);
      const seconds = elapsedTime % 60;
      timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }
  export { startTimer };
