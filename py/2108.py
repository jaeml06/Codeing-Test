import sys

input = sys.stdin.readline

N = int(input())

array = [int(input()) for i in range(N)]

# 산술평균
sum = 0
for i in array:
    sum += i
print(round(sum / N))

# 중간값
array.sort()
print(array[N // 2])

# 최빈값
a = dict()
for i in array:
    if i in a:
        a[i] += 1
    else:
        a[i] = 1
maxCount = []
maxC = max(a.values())
for i in a:
    if maxC == a[i]:
        maxCount.append(i)

if len(maxCount) > 1:
    print(maxCount[1])
else:
    print(maxCount[0])


# 범위
print(max(array) - min(array))
