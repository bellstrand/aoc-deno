export const file = await Deno.readTextFile("./2021/4/input");
const input = file
  .replace(/\n+$/, "")
  .replace(/  /g, " ")
  .replace(/\n /g, "\n")
  .split("\n\n") as any;
const draws = input
  .shift()
  .split(",")
  .map((n: string) => parseInt(n));
const boards = input
  .map((b: string) => b.split("\n"))
  .map((b: string[]) =>
    b.map((l: string) => l.split(" ").map((n: string) => parseInt(n)))
  );
function won(board: any, draw: number) {
  let t = 0;
  for (const line of board) {
    for (const j of [0, 1, 2, 3, 4]) {
      if (line[j] !== undefined) {
        t += line[j];
      }
    }
  }
  console.log("2021 Day 4, Part 2: ", t, draw, t * draw);
}
loop: for (const draw of draws) {
  for (const board of boards) {
    if (board === undefined) continue;
    for (const line of board) {
      for (const j of [0, 1, 2, 3, 4]) {
        if (line[j] === draw) {
          line[j] = undefined;
        }
      }
      if (line.filter((n: any) => n === undefined).length === 5) {
        boards[boards.indexOf(board)] = undefined;
        if (boards.filter((b: any) => b !== undefined).length === 0) {
          won(board, draw);
          break loop;
        }
      }
    }
    for (const j of [0, 1, 2, 3, 4]) {
      const row = [
        board[0][j],
        board[1][j],
        board[2][j],
        board[3][j],
        board[4][j],
      ];
      if (row.filter((n: any) => n === undefined).length === 5) {
        boards[boards.indexOf(board)] = undefined;
        if (boards.filter((b: any) => b !== undefined).length === 0) {
          won(board, draw);
          break loop;
        }
      }
    }
  }
}
