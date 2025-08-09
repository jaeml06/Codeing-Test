import sys
ability = list(map(int, input().split()))
n = len(ability)
# Please write your code here.
min_d = sys.maxsize
for i in range(n):
    for j in range(i + 1, n):
        for k in range(j + 1, n):
            for l in range(k + 1, n):
                temp = [i, j, k, l]
                total = ability[i] + ability[j] + ability[k] + ability[l]
                for a in range(4):
                    for b in range(a+1, 4):
                        sum1 = ability[temp[a]] + ability[temp[b]]
                        sum2 = total - sum1
                        sum3 = sum(ability) - total
                        top = max(sum1, sum2, sum3)
                        zero = min(sum1, sum2, sum3)
                        min_d = min(min_d, abs(top - zero))


                
print(min_d)