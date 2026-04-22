n, m = map(int, input().split())

# 유클리드 호제법
while m != 0:
    n, m = m, n % m
print(n)