def solution(arr):
    n = len(arr)
    m = len(arr[0])
    d = max(n, m)

    if m < d:
        for row in arr:
            row.extend([0] * (d - m))
            
    if n < d:
        for _ in range(d - n):
            arr.append([0] * d)

    return arr