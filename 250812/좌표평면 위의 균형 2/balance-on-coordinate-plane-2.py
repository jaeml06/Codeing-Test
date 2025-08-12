import sys
n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]

# Please write your code here.
min_cnt = sys.maxsize
for yLine in range(1, 101):
    for xLine in range(1, 101):
        cnt1 = 0
        cnt2 = 0
        cnt3 = 0
        cnt4 = 0
        flag = False
        for x, y in points:
            if x == xLine or y == yLine:
                flag = True

            if x > xLine and y > yLine:
                cnt1 += 1
            elif x < xLine and y > yLine:
                cnt2 += 1
            elif x < xLine and y < yLine:
                cnt3 += 1
            elif x > xLine and y < yLine:
                cnt4 += 1
        if flag: continue
        min_cnt = min(min_cnt, max(cnt1, cnt2, cnt3, cnt4))
print(min_cnt)