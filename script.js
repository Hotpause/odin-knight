function knightmoves(start, end) {
  const dx = [2, 1, -1, -2, -2, -1, 1, 2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];

  const queue = [[start]];
  const visited = new Set();

  while (queue.length > 0) {
    let path = queue.shift();
    let [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) {
      return path;
    }
    for (let i = 0; i < 8; i++) {
      const newx = x + dx[i];
      const newy = y + dy[i];
      newpath = [...path, [newx, newy]];

      if (newx >= 0 && newx < 8 && newy >= 0 && newy < 8) {
        queue.push(newpath);
        const key = `${newx},${newy}`;

        if (!visited.has(key)) {
          visited.add(key);
          queue.push(path);
        }
      }
    }
  }
  return null;
}

console.log(knightmoves([0, 0], [3, 3]));
console.log(knightmoves([3, 3], [0, 0]));
console.log(knightmoves([0, 0], [7, 7]));
