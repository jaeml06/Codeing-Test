def solution(s):
    temp = list(map(int,s.split(' ')))
    
    answer = f'{min(temp)} {max(temp)}'
    return answer