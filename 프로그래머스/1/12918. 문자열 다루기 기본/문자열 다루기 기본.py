def solution(s):
    answer = True
    if len(s) != 4 and len(s) != 6:
        return False
    for val in s:
        if not('0' <= val and val <= '9'):
            answer = False
            break
    return answer