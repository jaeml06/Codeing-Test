def solution(array, commands):
    answer = []
    for i, j , k in commands:
        temp = sorted(array[i-1: j])[k - 1]
        answer.append(temp)
    return answer