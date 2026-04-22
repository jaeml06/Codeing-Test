a, b = map(int, input().split())

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

cnt = 0
for i in range(a, b + 1):
    if is_prime(i):
        cnt += i

print(cnt)