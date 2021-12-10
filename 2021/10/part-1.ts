export const file = await Deno.readTextFile("./2021/10/input");
const input = file.replace(/\n+$/, "").split("\n");

const open = "([{<";
const pairs: Record<string, string> = {
  "<": ">",
  "(": ")",
  "[": "]",
  "{": "}",
};
let corrupted: string[] = [];

for (const line of input) {
  const stack: string[] = [];
  for (const char of line.split("")) {
    if (open.includes(char)) {
      stack.push(char);
    } else {
      const last = stack.pop() as string;
      if (pairs[last] !== char) {
        corrupted.push(char);
        break;
      }
    }
  }
}

let result = 0;
for (const c of corrupted) {
  if (c === ")") {
    result += 3;
  }
  if (c === "]") {
    result += 57;
  }
  if (c === "}") {
    result += 1197;
  }
  if (c === ">") {
    result += 25137;
  }
}

console.log("2021 Day 10, Part 1: ", result);
