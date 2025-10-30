def solution(arr, divisor):
    answer = []
    for val in arr:
        if val % divisor == 0:
            answer.append(val)

    answer.sort()
    if len(answer) == 0:
        answer.append(-1)
    return answer