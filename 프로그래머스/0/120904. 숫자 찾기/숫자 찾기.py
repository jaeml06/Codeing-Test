def solution(num, k):
    answer = 0
    for i in range(len(str(num))):
        if str(num)[i] == str(k):
            return i + 1
    return -1