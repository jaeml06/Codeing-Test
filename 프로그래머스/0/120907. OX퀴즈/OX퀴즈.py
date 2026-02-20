def solution(quiz):
    answer = []
    for q in quiz:
        left, right = q.split(' = ')
        x, op, y = left.split()
        
        x, y, right = int(x), int(y), int(right)
        val = 0
        if op == '+':
            val = x + y
        else:
            val = x - y
        answer.append('O' if val == right else 'X')
    return answer