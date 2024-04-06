
  const dice_images = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
  ];

  const roll_btn = document.getElementById("roll_btn");
  const dice1_img = document.getElementById("dice1");
  const dice2_img = document.getElementById("dice2");
  const result = document.getElementById("result");
  const player1_score = document.getElementById("player1_score");
  const player2_score = document.getElementById("player2_score");

  let player1_final_score = 0;
  let player2_final_score = 0;

  roll_btn.addEventListener("click", () => {
    const dice1_output = Math.floor(Math.random() * 6) + 1;
    const dice2_output = Math.floor(Math.random() * 6) + 1;

    dice1_img.src = dice_images[dice1_output - 1];
    dice2_img.src = dice_images[dice2_output - 1];

    const score_difference = Math.abs(dice1_output - dice2_output);

    if (score_difference === 0) {
        player1_final_score += 0;
        player2_final_score += 0;
    } else if (dice1_output > dice2_output) {
      player1_final_score += score_difference;
      
    } else {
      player2_final_score += score_difference;
     
    }

    player1_score.textContent = player1_final_score;
    player2_score.textContent = player2_final_score;

    if (player1_final_score >= 10) {
      result.textContent += "Player 1 wins!";
      roll_btn.disabled = true;
    } else if (player2_final_score >= 10) {
      result.textContent += "Player 2 wins!";
      roll_btn.disabled = true;
    }
  });
