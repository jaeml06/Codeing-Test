from collections import Counter
def solution(array, n):
    temp = Counter(array)
    return temp[n]