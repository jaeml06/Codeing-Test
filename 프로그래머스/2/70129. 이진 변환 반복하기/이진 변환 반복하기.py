def solution(s):
    transform = 0
    removed_zeros = 0

    while s != "1":
        zeros = s.count('0')
        removed_zeros += zeros
        ones_len = len(s) - zeros
        s = bin(ones_len)[2:]
        transform += 1

    return [transform, removed_zeros]