def solution(numbers):
    numbers.sort()
    answer = numbers[len(numbers) - 1] * numbers[len(numbers) - 2]
    return answer