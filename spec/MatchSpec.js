describe("tennis score", () => {
	describe("four-point match", () => {
		it("is zero when no one has scored");

		it("reports 1 point as '15'");

		it("reports 2 points as '30'");

		it("reports 3 points as '40'");

		it("ends when one player has 4 points");
	});

	describe("eight-point match, without tie-breaker", () => {
		it("reports a 40-40 tie as 'Deuce'");

		it("reports a one-point lead as 'Advantage'");

		it("ends when one player has 2 more points than the other");
	});

	describe("thirty-point match, with tie-breaker", () => {
		it("continues as long as trailing player is only 1 point behind");

		it("goes into tie-breaker when set score is 6-6");

		it("ends when one player has 7 additional points and leads by 2");
	})
});
