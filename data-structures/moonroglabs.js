// 1926. Nearest Exit from Entrance in Maze

// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+').
// You are also given the entrance of the maze,
// where entrance = [entrancerow, entrancecol]
// denotes the row and column of the cell you are initially standing at.
// In one step, you can move
// one cell up, down, left, or right.
// You cannot step into a cell with a wall,
//  and you cannot step outside the maze.
// Your goal is to find the nearest exit from the entrance.
// An exit is defined as an empty cell that is at the border of the maze.
// The entrance does not count as an exit.
// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.
// Input: maze = [
//                  ["+","+",".","+"],
//                  [".",".",".","+"],
//                  ["+","+","+","."],
//                ],
//                entrance = [1,2]
//  Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.

const canEscapeRoom = (room, start) => {
	const m = room.length;
	const n = room[0].length;

	const [startX, startY] = start;

	if (room[startX][startY] === "+") return -1;

	const queue = [[startX, startY, 0]];
	const visited = new Set();
	visited.add(`${startX},${startY}`);

	const dirs = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	while (queue.length) {
		const [x, y, time] = queue.shift();

		for (const [dx, dy] of dirs) {
			const nx = x + dx;
			const ny = y + dy;

			if (
				nx >= 0 &&
				nx < m &&
				ny >= 0 &&
				ny < n &&
				room[nx][ny] === "." &&
				!visited.has(`${nx},${ny}`)
			) {
				if (nx === 0 || ny === 0 || nx === m - 1 || ny === n - 1) {
					return time + 1;
				}

				visited.add(`${nx},${ny}`);
				queue.push([nx, ny, time + 1]);
			}
		}
	}

	return -1;
};
