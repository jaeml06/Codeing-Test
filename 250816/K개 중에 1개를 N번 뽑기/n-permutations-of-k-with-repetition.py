K, N = map(int, input().split())

# Please write your code here.
from itertools import product
arr = list(range(1, K + 1))
for i in product(arr, repeat=N):
    print(*i)
