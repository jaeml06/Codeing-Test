def solution(progresses, speeds):
    days = []
    answer = []
    for progress, speed in zip(progresses, speeds):
        day = 0
        total = progress
        while total < 100:
            total += speed
            day += 1
        days.append(day)
        
    cur = days[0]
    cnt = 1
    for day in days[1:]:
        if day <= cur:
            cnt += 1
        else:
            answer.append(cnt)
            cnt = 1
            cur = day
    answer.append(cnt)
    return answer
