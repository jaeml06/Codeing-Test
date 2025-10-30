def solution(s):
    temp = s.lower()
    count_p = 0
    count_y = 0
    for val in temp:
        if val == 'y':
            count_y +=1
        elif val == 'p':
            count_p += 1
            

    return True if count_y == count_p else False