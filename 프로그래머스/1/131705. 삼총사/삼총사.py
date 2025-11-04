def solution(number):
    result = 0
    
    def combination(current, start):
        nonlocal result
        if len(current) == 3:
            result += 1 if sum(current) == 0 else 0
            return
        for i in range(start, len(number)):
            combination(current + [number[i]], i + 1)
    combination([], 0)
    return result