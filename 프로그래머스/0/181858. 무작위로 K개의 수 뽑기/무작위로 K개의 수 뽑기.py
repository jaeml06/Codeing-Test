def solution(arr, k):
    temp = set()
    answer = []

    for v in arr:
        if v not in temp and len(answer) < k:
            temp.add(v)
            answer.append(v)

    return answer + [-1] * (k - len(answer))