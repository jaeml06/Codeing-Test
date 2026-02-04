def solution(a, b):
    answer = ''
    months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    target = 5
    for i in range(a):
        target += months[i]
    target += b - 1
    answer = days[(target % 7)]
        
    return answer