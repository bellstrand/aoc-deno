# Advent of Code - Deno

### Download

```bash
./dl.sh 2021 1
```

### Dev

```bash
deno run --allow-read --watch 2021/1/part-1.ts
```

### Run

```bash
# One file
deno run --allow-read 2021

# Multiple files
ls 2021/*/* | grep .ts | xargs -I {} deno run --allow-read {}
```
