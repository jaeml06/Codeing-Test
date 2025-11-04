def solution(d, budget):
    answer = 0
    sum_total = 0
    d.sort()
    for val in d:
        if sum_total + val > budget:
            break
        sum_total += val
        answer += 1
                
    return answer