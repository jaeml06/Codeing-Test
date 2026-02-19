def solution(my_string):
    answer = []
    for s in my_string:
        if s.isnumeric():
            answer.append(int(s))
        
    return sorted(answer)