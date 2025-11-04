def solution(t, p):
    answer = 0
    for i in range(len(t)-len(p) + 1):
        temp = t[i:i+len(p)]
        if int(temp) <= int(p):

            answer += 1
        
    return answer