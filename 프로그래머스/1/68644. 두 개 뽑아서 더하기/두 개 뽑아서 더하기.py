def solution(numbers):
    sums = set()
    n = len(numbers)
    
    for i in range(n):
        for j in range(i + 1, n):
            sums.add(numbers[i] + numbers[j])
    return sorted(list(sums))
    