def solution(myString):
    answer = []
    for s in myString:
        if s < 'l':
            answer.append('l')
        else:
            answer.append(s)
    return ''.join(answer)