def solution(k, m, score):
    answer = 0
    score.sort(reverse=True)
    for i in range(0, len(score) - m + 1, m):
        temp = score[i:i + m]
        answer += min(temp) * m
        
    return answer