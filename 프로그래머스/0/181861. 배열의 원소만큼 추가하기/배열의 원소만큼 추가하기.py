def solution(arr):
    answer = []
    for cnt in arr:
        for n in range(cnt):
            answer.append(cnt)
    return answer