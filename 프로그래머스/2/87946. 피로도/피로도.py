from itertools import permutations
def solution(k, dungeons):
    answer = -1
    arr = permutations(dungeons, len(dungeons))
    max_count = 0
    for a in arr:
        temp = k
        count = 0
        for need, consume in a:
            if temp >= need:
                temp -= consume
                count += 1
            else:
                break
        max_count = max(max_count, count)
            
    return max_count