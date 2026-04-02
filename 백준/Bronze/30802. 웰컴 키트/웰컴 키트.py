n = int(input())
arr = list(map(int, input().split()))
t, p = map(int, input().split())

shirt = 0
for x in arr:
    shirt += (x + t - 1) // t

print(shirt)
print(n//p, n % p)