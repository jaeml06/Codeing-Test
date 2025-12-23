def solution(s):
    answer = 0
    cnt_x = 0
    cnt_other = 0
    x = ''
    
    for c in s:
        if cnt_x == 0:
            x = c
            cnt_x = 1
            cnt_other = 0
        else:
            if c == x:
                cnt_x += 1
            else:
                cnt_other += 1
        if cnt_x == cnt_other:
            answer+=1
            cnt_x = 0
            cnt_other = 0
            
    if cnt_x != 0:
        answer+=1
    return answer
    return answer