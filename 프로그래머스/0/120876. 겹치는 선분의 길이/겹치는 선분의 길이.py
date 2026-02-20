def solution(lines):
    arr = [0] * (max(sum(lines, [])) + 100)
    for line in lines:
        s, e = sorted(line)
        for i in range(s + 100, e + 100):
            arr[i] += 1
    return sum(1 for e in arr if e > 1)

