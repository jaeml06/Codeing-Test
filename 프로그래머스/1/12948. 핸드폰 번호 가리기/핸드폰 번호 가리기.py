def solution(phone_number):
    answer = ''
    for i, val in enumerate(phone_number):
        if i > len(phone_number) - 5:
            answer += val
        else:
            answer += '*'
            
        
    return answer