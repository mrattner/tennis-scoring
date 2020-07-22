# Tennis Scoring

Interface for a hypothetical tennis tournament scoring system. Written as an
ES6/Node practice exercise for Evnex, 22 July 2020.

## Expected inputs and outputs
See the [Wikipedia article about tennis scoring][1].

### Example 1
| Match point | Won by       | Score | Expected output            |
| ----------- | ------------ | ----- | -------------------------- |
| 1           | Player 1     | 1-0   | `0-0, 15-0`                |
| 2           | Player 2     | 1-1   | `0-0, 15-15`               |
| 3           | Player 1     | 2-1   | `0-0, 30-15`               |
| 4           | Player 1     | 3-1   | `0-0, 40-15`               |
| 5           | Player 2     | 3-2   | `0-0, 40-30`               |
| 6           | Player 2     | 3-3   | `0-0, Deuce`               |
| 7           | Player 1     | 4-3   | `0-0, Advantage player 1`  |
| 8           | Player 1     | 5-3   | `1-0`                      |

### Example 2
| Match point | Won by       | Score | Expected output |
| ----------- | ------------ | ----- | --------------- |
| 1           | Player 2     | 0-1   | `0-0, 0-15`     |
| 2           | Player 2     | 0-2   | `0-0, 0-30`     |
| 3           | Player 2     | 0-3   | `0-0, 0-40`     |
| 4           | Player 2     | 0-4   | `0-1`           |

### Example 3
| Match point  | Won by       | Score          | Expected output           |
| ------------ | ------------ | -------------- | ------------------------- |
| 1            | Player 2     | 0-1            | `0-0, 0-15`               |
| 2            | Player 2     | 0-2            | `0-0, 0-30`               |
| 3            | Player 2     | 0-3            | `0-0, 0-40`               |
| 4            | Player 1     | 1-3            | `0-0, 15-40`              |
| 5            | Player 1     | 2-3            | `0-0, 30-40`              |
| 6            | Player 1     | 3-3            | `0-0, Deuce`              |
| 7            | Player 2     | 3-4            | `0-0, Advantage player 2` |
| 8            | Player 1     | 4-4            | `0-0, Deuce`              |
| 9            | Player 1     | 5-4            | `0-0, Advantage player 1` |
| 10           | Player 2     | 5-5            | `0-0, Deuce`              |
| 11           | Player 2     | 5-6            | `0-0, Advantage player 2` |
| 12           | Player 1     | 6-6            | `0-0, Deuce`              |
| 13           | Player 1     | Tiebreak 1-0   | `0-0, 6-6 (1-0)`          |
| 14           | Player 1     | Tiebreak 2-0   | `0-0, 6-6 (2-0)`          |
| 15           | Player 1     | Tiebreak 3-0   | `0-0, 6-6 (3-0)`          |
| 16           | Player 1     | Tiebreak 4-0   | `0-0, 6-6 (4-0)`          |
| 17           | Player 1     | Tiebreak 5-0   | `0-0, 6-6 (5-0)`          |
| 18           | Player 1     | Tiebreak 6-0   | `0-0, 6-6 (6-0)`          |
| 19           | Player 2     | Tiebreak 6-1   | `0-0, 6-6 (6-1)`          |
| 20           | Player 2     | Tiebreak 6-2   | `0-0, 6-6 (6-2)`          |
| 21           | Player 2     | Tiebreak 6-3   | `0-0, 6-6 (6-3)`          |
| 22           | Player 2     | Tiebreak 6-4   | `0-0, 6-6 (6-4)`          |
| 23           | Player 2     | Tiebreak 6-5   | `0-0, 6-6 (6-5)`          |
| 24           | Player 2     | Tiebreak 6-6   | `0-0, 6-6 (6-6)`          |
| 25           | Player 2     | Tiebreak 6-7   | `0-0, 6-6 (6-7)`          |
| 26           | Player 1     | Tiebreak 7-7   | `0-0, 6-6 (7-7)`          |
| 27           | Player 1     | Tiebreak 8-7   | `0-0, 6-6 (8-7)`          |
| 28           | Player 2     | Tiebreak 8-8   | `0-0, 6-6 (8-8)`          |
| 29           | Player 2     | Tiebreak 8-9   | `0-0, 6-6 (8-9)`          |
| 30           | Player 2     | Tiebreak 8-10  | `0-1`                     |

[1]: http://en.wikipedia.org/wiki/Tennis_scoring_system
