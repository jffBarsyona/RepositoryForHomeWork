class shootDice {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.scores = [];
    }

    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }

    round() {
        for (let i = 0; i < 3; i++) {
            const player1Roll = this.roll();
            const player2Roll = this.roll();
            this.scores.push({ player1: player1Roll, player2: player2Roll });
        }
    }

    getTotalScore(player) {
        return this.scores.reduce((currentSum, currentRoll) => currentSum + currentRoll[player], 0);
    }

    winner() {
        const player1TotalScore = this.getTotalScore('player1');
        const player2TotalScore = this.getTotalScore('player2');

        if (player1TotalScore > player2TotalScore) {
            return `${this.player1} Победил!`;
        } else if (player1TotalScore < player2TotalScore) {
            return `${this.player2} Победил!`;
        } else {
            return "Ничья!";
        }
    }
}

const game = new shootDice("Игрок 1", "Игрок 2");
game.round();

console.log(`Итоговый результат бросков: ${game.player1}:`, game.scores.map(score => score.player1));
console.log(`Итоговый результат бросков: ${game.player2}:`, game.scores.map(score => score.player2));

console.log(game.winner());