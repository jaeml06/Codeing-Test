def solution(binomial):
    answer = 0
    a, op, b = binomial.split(' ')
    if op == '+':
        answer = int(a) + int(b)
    elif op == '-':
        answer = int(a) - int(b)
    elif op == '*':
        answer = int(a) * int(b)
    

    return answer