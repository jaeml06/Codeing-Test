inp = [list(map(int, input())) for _ in range(3)]

# Please write your code here.
cnt = 0
for team1 in range(1, 10):
    for team2 in range(team1 + 1, 10):
        if team1 == team2:
            continue
        flag = False
        for i in range(3):
            temp = set(inp[i])
            if len(temp) == 2 and team1 in temp and team2 in temp:
                flag = True
        for a in zip(inp[0], inp[1], inp[2]):
            temp = set(a)
            if len(temp) == 2 and team1 in temp and team2 in temp:
                flag = True
        temp = set([inp[0][0], inp[1][1], inp[2][2]])
        if len(temp) == 2 and team1 in temp and team2 in temp:
                flag = True
        temp = set([inp[2][0], inp[1][1], inp[0][2]])
        if len(temp) == 2 and team1 in temp and team2 in temp:
                flag = True
        if flag: cnt+=1
print(cnt)
