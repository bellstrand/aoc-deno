export const file = await Deno.readTextFile("./2021/10/input");
const input = file.replace(/\n+$/, "").split("\n");

const open = "([{<";
const pairs: Record<string, string> = {
  "<": ">",
  "(": ")",
  "[": "]",
  "{": "}",
};

function points(stack: string[]) {
  let r = 0;
  for (const c of stack.reverse()) {
    r = r * 5;
    const v = pairs[c];
    if (v === ")") {
      r += 1;
    }
    if (v === "]") {
      r += 2;
    }
    if (v === "}") {
      r += 3;
    }
    if (v === ">") {
      r += 4;
    }
  }
  return r;
}

let results: number[] = [];

for (const line of input) {
  const stack: string[] = [];
  for (const [i, char] of line.split("").entries()) {
    if (open.includes(char)) {
      stack.push(char);
    } else {
      const last = stack.pop() as string;
      if (pairs[last] !== char) {
        break;
      }
    }
    if (i === line.length - 1) {
      results.push(points(stack));
    }
  }
}

const result = results.sort((a, b) => a - b)[Math.floor(results.length / 2)];

console.log("2021 Day 10, Part 2: ", result);
