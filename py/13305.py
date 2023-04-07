N = int(input())
length = list(map(int, input().split()))
price = list(map(int, input().split()))

total = 0

"""for i in range(N-1):
    temp = price[0:(i+1)]
    total += min(temp)*length[i]
    41점 부분 정답
"""
temp = price[0]
for i in range(N-1):
    if temp > price[i]:
        temp = price[i]
    total += temp*length[i]
print(total)
