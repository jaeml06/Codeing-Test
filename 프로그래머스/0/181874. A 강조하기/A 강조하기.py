def solution(myString):
    answer = ''
    for alpha in myString:
        if 'a' == alpha or 'A' == alpha:
            answer += 'A'
        else:
            answer+= alpha.lower()
    return answer