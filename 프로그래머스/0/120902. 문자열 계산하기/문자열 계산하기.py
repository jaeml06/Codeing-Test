def solution(my_string):
    token = my_string.split()
    ans = int(token[0])
    
    for i in range(1, len(token), 2):
        op = token[i]
        num = int(token[i + 1])

        if op == '+':
            ans += num
        else:
            ans -= num
    return ans