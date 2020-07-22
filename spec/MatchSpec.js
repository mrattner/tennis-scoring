const Match = require("../src/Match");

/**
 * @param {Array} pointScorers Sequence of players who scored during a set
 * @param {int} slice (optional) Number of games into the set, up to the length
 *	of `pointScorers`
 * @return {Match} The state of the match after `slice` games have had their
 *	result applied to the score; or the state of the entire match if 'slice'
 *	was not specified
 */
function matchWithScoredPoints (pointScorers, slice=0) {
	let match = new Match();
	let subset = slice > 0 ? pointScorers.slice(0, slice) : pointScorers;
	subset.forEach((scorer) => {
		match.pointWonBy(scorer);
	});
	return match;
}

describe("tennis score", () => {
	describe("four-point match", () => {
		const wonBy = [2, 2, 2, 2];

		it("is zero when no one has scored", () => {
			let match = new Match();
			expect(match.score()).toEqual("0-0, 0-0");
		});

		it("reports 1 point as '15'", () => {
			let match = matchWithScoredPoints(wonBy, 1);
			expect(match.score()).toEqual("0-0, 0-15");
		});

		it("reports 2 points as '30'", () => {
			let match = matchWithScoredPoints(wonBy, 2);
			expect(match.score()).toEqual("0-0, 0-30");
		});

		it("reports 3 points as '40'", () => {
			let match = matchWithScoredPoints(wonBy, 3);
			expect(match.score()).toEqual("0-0, 0-40");
		});

		it("ends when one player has 4 points", () => {
			let match = matchWithScoredPoints(wonBy);
			expect(match.score()).toEqual("0-1");
		});
	});

	describe("eight-point match, without tie-breaker", () => {
		const wonBy = [1, 2, 1, 1, 2, 2, 1, 1];

		it("reports a 40-40 tie as 'Deuce'", () => {
			let match = matchWithScoredPoints(wonBy, 6);
			expect(match.score()).toEqual("0-0, Deuce");
		});

		it("reports a one-point lead as 'Advantage'", () => {
			let match = matchWithScoredPoints(wonBy, 7);
			expect(match.score()).toEqual("0-0, Advantage Player 1");
		});

		it("ends when one player has 2 more points than the other", () => {
			let match = matchWithScoredPoints(wonBy);
			expect(match.score()).toEqual("1-0");
		});
	});

	describe("thirty-point match, with tie-breaker", () => {
		const wonBy = [2, 2, 2,
						1, 1, 1,
						2, 1, 1,
						2, 2, 1,
						1, 1, 1, 1, 1, 1,
						2, 2, 2, 2, 2, 2, 2,
						1, 1, 2, 2, 2];

		it("continues as long as trailing player is only 1 point behind", () => {
			[6, 8, 10, 12].forEach((gameNumber) => {
				let match = matchWithScoredPoints(wonBy, gameNumber);
				expect(match.score()).toEqual("0-0, Deuce");
			});

			[7, 11].forEach((gameNumber) => {
				let match = matchWithScoredPoints(wonBy, gameNumber);
				expect(match.score()).toEqual("0-0, Advantage Player 2");
			});

			let match = matchWithScoredPoints(wonBy, 9);
			expect(match.score()).toEqual("0-0, Advantage Player 1");
		});

		it("goes into tie-breaker when set score is 6-6", () => {
			// List of #13-28
			let range = Array(29 - 13).fill(13).map((x, y) => x + y);

			range.forEach((gameNumber) => {
				let match = matchWithScoredPoints(wonBy, gameNumber);
				expect(match.score()).toEqual(
					jasmine.stringMatching(/^0-0, 6-6 \(/));
			});
			let match = matchWithScoredPoints(wonBy, 29);
			expect(match.score()).toEqual("0-0, 6-6 (8-9)");
		});

		it("ends when one player has 7 additional points and leads by 2", () => {
			let match = matchWithScoredPoints(wonBy);
			expect(match.score()).toEqual("0-1");
		});
	})
});
