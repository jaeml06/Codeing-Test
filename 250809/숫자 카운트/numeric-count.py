n = int(input())
arr = []
for _ in range(n):
    num, cnt1, cnt2 = map(int, input().split())  # cnt1=스트라이크, cnt2=볼
    arr.append((num, cnt1, cnt2))

cnt = 0
for i in range(1, 10):
    for j in range(1, 10):
        for k in range(1, 10):
            if i == j or i == k or j == k:
                continue

            succeeded = True
            for num, target_cnt1, target_cnt2 in arr:
                x, y, z = map(int, str(num))

                strike = 0
                ball = 0


                if x == i: strike += 1
                if y == j: strike += 1
                if z == k: strike += 1

                if x == j or x == k: ball += 1
                if y == i or y == k: ball += 1
                if z == i or z == j: ball += 1

                if strike != target_cnt1 or ball != target_cnt2:
                    succeeded = False
                    break

            if succeeded:
                cnt += 1

print(cnt)