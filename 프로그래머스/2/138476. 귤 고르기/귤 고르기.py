from collections import Counter

def solution(k, tangerine):
    counter = Counter(tangerine)
    counts = sorted(counter.values(), reverse=True)

    answer = 0
    for c in counts:
        k -= c
        answer += 1
        if k <= 0:
            break

    return answer