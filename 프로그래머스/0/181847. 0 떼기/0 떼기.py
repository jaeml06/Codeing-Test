def solution(n_str):
    i = 0
    while i < len(n_str) and n_str[i] == '0':
        i += 1
    return n_str[i:]