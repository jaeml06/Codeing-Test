import sys
read = sys.stdin.readline

N = int(read())
nums = list(map(int, read().split()))
answer = 0

for num in nums:
    if num < 2: 
        continue
    is_prime = True
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0: 
            is_prime = False
            break
    if is_prime:
        answer += 1

print(answer)