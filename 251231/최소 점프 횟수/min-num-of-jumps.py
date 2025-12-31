n = int(input())
num = list(map(int, input().split()))

# Please write your code here.
if n == 1:
    print(0)
else:
    jumps = 0
    current_end = 0
    farthest = 0

    for i in range(n - 1):
        farthest = max(farthest, i + num[i])

        if i == farthest:
            print(-1)
            break

        if i == current_end:
            jumps += 1
            current_end = farthest

            if current_end >= n - 1:
                print(jumps)
                break
    else:
        print(-1)