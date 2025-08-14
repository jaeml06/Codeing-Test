import sys
N = int(input().strip())
seat = list(map(int, input().strip()))  # "01001" 같은 입력
answer = 0

for i in range(N):
    for j in range(i + 1, N):
        if seat[i] == 1 or seat[j] == 1:
            continue

        temp = seat[:]
        temp[i] = 1
        temp[j] = 1

        max_cnt = sys.maxsize
        temp2 = []
        for k in range(N):
            if temp[k] == 1:
                temp2.append((k))
        
        for k in range(1, len(temp2)):
            max_cnt = min(max_cnt, temp2[k] - temp2[k-1])

        answer = max(answer, max_cnt)

print(answer)