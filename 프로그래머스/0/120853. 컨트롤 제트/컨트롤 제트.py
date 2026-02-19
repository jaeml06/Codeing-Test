def solution(s):
    answer = 0
    temp = s.split(' ')
    for i in range(len(temp)):
        if temp[i] == 'Z':
            answer -= int(temp[i-1])
        else:
            answer += int(temp[i])
            
        
    return answer