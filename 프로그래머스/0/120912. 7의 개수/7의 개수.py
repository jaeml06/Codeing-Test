def solution(array):
    array = list(map(str, array))
    cnt = 0
    for v in array:
        for s in v:
            if s == '7':
                cnt += 1
    return cnt