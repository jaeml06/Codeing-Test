n, m  = map(int, input().split())

arr = [0] + list(map(int, input().split()))
q = [list(map(int, input().split())) for _ in range(m)]
sum_arr = [0] * (n + 1)
for i in range(1, n + 1):
    sum_arr[i] = sum_arr[i -1] + arr[i]

for s, e in q:
    print(sum_arr[e] - sum_arr[s-1])
