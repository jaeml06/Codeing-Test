def solution(x):
    total_sum = sum(map(int,list(str(x))))
    
    answer = True if x % total_sum == 0 else False
    
    return answer