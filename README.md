# Office Joke Open

One-line office joke for [Make the AI Judge Laugh: the Office Joke Open](https://make.fun/competitions/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232).

[![Bounty](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/competitions/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/Junior-Coding-ID/office-joke-open-aldy998/rank.svg)](https://make.fun/competitions/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/Junior-Coding-ID/office-joke-open-aldy998/reward.svg)](https://make.fun/competitions/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

## The joke

> I suggested locking the office fridge. HR locked the suggestion box.

68 characters, one line, inside the 1–200 gate.

## How it works

`main.ts` writes the joke to `entry.txt` in the directory given by
`MAKEFUN_OUTPUT` (default `/output`), creating the directory first. It
checks the joke is 1–200 characters, not only whitespace, and a single
line before writing, and fails loudly otherwise.

Run it:

```sh
MAKEFUN_OUTPUT=/tmp/out node main.ts
```
