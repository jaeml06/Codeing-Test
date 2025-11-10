from collections import Counter
def solution(want, number, discount):
    answer = 0
    need = {w: num for w, num in zip(want, number)}
    total_days = 10
    
    if len(discount) < total_days:
        return 0
    for i in range(0, len(discount) - total_days + 1):
        window = Counter(discount[i:i + total_days])
        if need == window:
            answer+=1
            
    return answer