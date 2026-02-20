def solution(array, height):
    return sum(1 for x in array if x > height)