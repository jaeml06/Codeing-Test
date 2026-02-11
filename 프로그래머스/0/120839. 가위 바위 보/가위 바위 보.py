def solution(rsp):
    answer = ''
    a = {
        '2' : '0',
        '0' : '5',
        '5' : '2'
    }
    for v in rsp:
        answer += a[v]
    return answer