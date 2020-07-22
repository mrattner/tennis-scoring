/**
 * Keeps track of the score of a tennis match with 2 players and a single set.
 */
class Match {
	/**
	 * Factory function to create a new tennis match.
	 * @param {string} player1 First player's name
	 * @param {string} player2 Second player's name
	 * @return {Match} Match with no points scored yet
	 */
	constructor(player1="Player 1", player2="Player 2") {
		this.players = [player1, player2];
		this.points = [0, 0];
	}

	/**
	 * Update the score by indicating which player has won a match point.
	 * @param {int} player Which player scored a point (e.g. 1 or 2)
	 * @return {void}
	 */
	pointWonBy(player) {
		let playerIndex = player - 1;
		this.points[playerIndex] += 1;
	}

	/**
	 * Report the current score of this match.
	 * @return {string} Match score, followed by set score if the match is
	 * still in progress. Player 1's score is always reported first. If there is
	 * a tie-breaker set in progress, the tie-breaker score appears in
	 * parentheses after the match and set scores.
	 */
	score() {
		return "";
	}
}

module.exports = Match;
