def solution(numbers):
    answer = 0
    for i in range(10):
        if not i in numbers:
            answer+=i
            
    return answer