def solution(my_string):
    seen = set()
    temp = []
    for c in my_string:
        if c not in seen:
            seen.add(c)
            temp.append(c)
    return ''.join(temp)