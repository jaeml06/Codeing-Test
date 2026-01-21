def solution(x, n):
    temp = [x]
    for i in range(n - 1):
        temp.append(temp[-1] + x)
    return temp