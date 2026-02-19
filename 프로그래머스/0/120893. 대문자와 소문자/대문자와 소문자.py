def solution(my_string):
    answer = ''
    for c in my_string:
        if 'a' <= c <= 'z':
            answer += c.upper()
        else:
            answer += c.lower()
    return answer