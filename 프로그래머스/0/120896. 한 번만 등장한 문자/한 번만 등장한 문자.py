def solution(s):
    temp = {}
    answer = []
    for c in s:
        if c in temp:
            temp[c] += 1
        else:
            temp[c] = 1
    for k, v in temp.items():
        if v == 1:
            answer.append(k)
    
    return ''.join(sorted(answer))