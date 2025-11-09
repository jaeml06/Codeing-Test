def solution(elements):
    n = len(elements)
    arr = elements * 2

    prefix = [0] * (2 * n + 1)
    for i in range(2 * n):
        prefix[i + 1] = prefix[i] + arr[i]

    sums = set()

    for length in range(1, n + 1):
        for start in range(n):
            s = prefix[start + length] - prefix[start]
            sums.add(s)

    return len(sums)