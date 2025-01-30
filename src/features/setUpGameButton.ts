import { initializeGame } from "./initializeGame";

function setUpGameButtons() {
  const buttonConfigs = [
    { id: "start-12", count: 12 },
    { id: "start-18", count: 18 },
    { id: "start-24", count: 24 }
  ];

  buttonConfigs.forEach((config) => {
    const button = document.getElementById(config.id) as HTMLButtonElement;

    if (button) {
      button.addEventListener("click", () => {
        initializeGame(config.count); // Button setzt die entsprechende Kartenanzahl
      });
    } 
  });
}

export { setUpGameButtons };
