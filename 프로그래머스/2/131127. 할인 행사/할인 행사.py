from collections import Counter
def solution(want, number, discount):
    answer = 0
    need = {w : num for w, num in zip(want, number)}
    total_day = 10
    
    if len(discount) < total_day:
        return 0
    for i in range(0, len(discount) - total_day + 1):
        bound = {}
        for val in discount[i:i + total_day]:
            if val not in bound:
                bound[val] = 1
            else:
                bound[val] += 1
            if need == bound:
                answer += 1
            
    return answer