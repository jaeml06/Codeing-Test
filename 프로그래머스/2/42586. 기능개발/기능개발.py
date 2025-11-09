def solution(progresses, speeds):
    answer = []
    days = []
    for progress, speed in zip(progresses, speeds):
        day = 0
        total = progress
        while total < 100:
            total += speed
            day += 1
        days.append(day)
        
    answer = []
    current = days[0]
    count = 1

    for d in days[1:]:
        if d <= current:
            count += 1
        else:
            answer.append(count)
            current = d
            count = 1

    # 마지막 묶음 추가
    answer.append(count)
    return answer