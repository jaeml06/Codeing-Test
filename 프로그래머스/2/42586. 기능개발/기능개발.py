def solution(progresses, speeds):
    days = []
    answer = []
    for p, s in zip(progresses, speeds):
        day = 0
        total = p
        while total < 100:
            total += s
            day += 1
        days.append(day)
    cur_day = days[0]
    cnt = 1
    for day in days[1:]:
        if day <= cur_day:
            cnt += 1
        else:
            answer.append(cnt)
            cnt = 1
            cur_day = day
    answer.append(cnt)
    
    return answer
