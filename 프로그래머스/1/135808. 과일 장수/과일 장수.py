def solution(k, m, score):
    answer = 0
    score.sort(reverse=True)
    for i in range(0, len(score)-m + 1, m):
        temp = []
        for j in range(m):
            temp.append(score[i + j])
        answer += min(temp) * m
    return answer