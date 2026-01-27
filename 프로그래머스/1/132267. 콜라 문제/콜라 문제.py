def solution(a, b, n):
    answer = 0
    while n >= a:
        e = (n // a) * b
        answer += e
        
        n = (n % a) + e
    return answer
#     answer = 0
#     while n >= a:
#         exchanged = (n//a) * b
#         answer += exchanged
        
#         n = (n % a) + exchanged
    return answer