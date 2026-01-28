from collections import Counter

def solution(k, tangerine):
    counter = {}
    for t in tangerine:
        if t in counter:
            counter[t] = counter[t] + 1
        else:
            counter[t] = 1
    counts = sorted(counter.values(), reverse=True)
    answer = 0
    for c in counts:
        k -= c
        answer += 1
        if k <= 0:
            break

    return answer