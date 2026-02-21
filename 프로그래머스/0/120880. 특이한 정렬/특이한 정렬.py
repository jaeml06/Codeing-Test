def solution(numlist, n):
    answer = sorted(numlist, key=lambda x: (abs(n - x), -x))
    return answer