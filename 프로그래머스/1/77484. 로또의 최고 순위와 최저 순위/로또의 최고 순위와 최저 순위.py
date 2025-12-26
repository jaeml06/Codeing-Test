def solution(lottos, win_nums):
    answer = []
    set_win_numbers = set(win_nums)
    cnt = 0
    base_cnt = 0
    for lotto in lottos:
        if lotto in set_win_numbers:
            base_cnt += 1
        elif lotto == 0:
            cnt += 1
    
    grade = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    }
    
    answer = [grade[base_cnt+cnt], grade[base_cnt]]
    return answer