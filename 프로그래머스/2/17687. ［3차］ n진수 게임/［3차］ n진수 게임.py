def to_base(n, k):
    digits = "0123456789ABCDEF"
    result = ''
    if n == 0:
        return '0'
    while n > 0:
        result = digits[n % k] + result
        n //= k
    return result

def solution(n, t, m, p):
    answer = ''
    stream = ''
    num = 0

    while len(stream) < t * m:
        stream += to_base(num, n)
        num += 1

    for i in range(p - 1, t * m, m):
        answer += stream[i]

    return answer