def solution(food):
    answer = ''
    for i in range(1, len(food)):
        t = food[i] // 2
        for _ in range(t):
            answer += str(i)
    answer = answer + '0' + answer[::-1]
    
    return answer