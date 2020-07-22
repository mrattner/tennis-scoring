/**
 * Translation between actual number of points and called score in tennis.
 */
const SCORES = {
	0: 0,
	1: 15,
	2: 30,
	3: 40
};

/**
 * Determine whether the match is still in progress and who is in the lead.
 * @param {int} score1 Number of points earned by player 1
 * @param {int} score2 Number of points earned by player 2
 * @return {Object} Information about the status of the match
 */
function scoreAnalysis(score1, score2) {
	let leading = Math.max(score1, score2);
	let trailing = Math.min(score1, score2);
	let difference = leading - trailing;
	let isInTieBreak = trailing >= 6 && leading > 6;
	let tbLeading = leading - 6;

	return {
		inLead: leading === score1 ? 1 : 2,
		leadingScore: SCORES[leading] || leading,
		trailingScore: SCORES[trailing] || trailing,
		isOngoing: leading < 4 || (isInTieBreak && tbLeading < 7)
			|| difference < 2,
		isDeuce: difference === 0 && leading >= 3 && !isInTieBreak,
		isAdvantage: difference === 1 && trailing >= 3 && !isInTieBreak,
		isInTieBreak: isInTieBreak,
		tbLeading: tbLeading,
		tbTrailing: trailing - 6,
	}
}

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
		let status = scoreAnalysis(this.points[0], this.points[1]);
		if (!status.isOngoing) {
			return status.inLead === 1 ? "1-0" : "0-1";
		}

		let setScore = [status.leadingScore, status.trailingScore];
		let tieBreakScore = [status.tbLeading, status.tbTrailing];
		if (status.inLead !== 1) {
			setScore.reverse();
			tieBreakScore.reverse();
		}

		let playerInLead = status.inLead - 1;
		let description = status.isDeuce ? "Deuce"
			: status.isAdvantage ? `Advantage ${this.players[playerInLead]}`
			: status.isInTieBreak ? "6-6"
			: setScore.join("-");

		let tieBreakDescription = status.isInTieBreak
			? ` (${tieBreakScore.join("-")})`
			: "";

		return `0-0, ${description}${tieBreakDescription}`;
	}
}

module.exports = Match;
