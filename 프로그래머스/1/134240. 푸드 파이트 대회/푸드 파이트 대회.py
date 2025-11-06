def solution(food):
    answer = ''
    for i in range(1, len(food)):
        temp = food[i] // 2
        for _ in range(temp):
            answer += str(i)
    
    answer = answer + '0' + answer[::-1]
    
    return answer