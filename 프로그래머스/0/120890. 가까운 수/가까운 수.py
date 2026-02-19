def solution(array, n):
    temp = list(map(lambda x: (abs(x - n), x), array))
    return min(temp)[1]