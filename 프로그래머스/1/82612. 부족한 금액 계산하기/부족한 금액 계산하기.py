def solution(price, money, count):
    answer = -1
    total_sum = 0
    for i in range(count):
        total_sum += (i+1) * price
    return 0 if total_sum <= money else total_sum - money