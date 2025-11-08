import math
def solution(arr):
    answer = arr[0]
    for num in arr[1:]:
        answer = answer * num // math.gcd(answer, num)
    
    return answer