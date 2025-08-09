from itertools import combinations
import sys

abilities = list(map(int, input().split()))
n = len(abilities)
min_answer = sys.maxsize

for i in range(n):
    for j in range(i + 1, n):
        for k in range(j + 1, n):
            sum1 = abilities[i] + abilities[j] + abilities[k]
            sum2 = sum(abilities) - sum1
            min_answer = min(min_answer, abs(sum1-sum2))

print(min_answer)
# Please write your code here.

