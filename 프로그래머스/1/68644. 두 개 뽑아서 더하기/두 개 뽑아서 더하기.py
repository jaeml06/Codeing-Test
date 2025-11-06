from itertools import combinations

def solution(numbers):
    answer = []
    temp = combinations(numbers, 2)
    for a, b in temp:
        if not a + b in answer:
            answer.append(a + b)
    
    answer.sort()
    return answer