board = [list(map(int, input().split())) for _ in range(19)]

# Please write your code here.
dx = [[-2, -1, 0, 1, 2], [-2, -1, 0, 1, 2], [-2, -1, 0, 1, 2], [0, 0, 0, 0, 0]]
dy = [[-2, -1, 0, 1, 2], [0, 0, 0, 0, 0], [-2, -1, 0, 1, 2], [-2, -1, 0, 1, 2]]

for i in range(2, 17):
    for j in range(2, 17):
        if board[i][j] == 1:
            for x1, y1 in zip(dx, dy):
                count = 0
                for x, y in zip(x1, y1):
                    if board[y][x] == 1:
                        count+=1
                if count == 5:
                    print(1)
                    print(i+1, j+1)
                    exit()
        if board[i][j] == 2:
            for x1, y1 in zip(dx, dy):
                count = 0
                for x, y in zip(x1, y1):
                    if board[i + y][j + x] == 2:
                        count+=1
                if count == 5:
                    print(2)
                    print(i+1, j+1)
                    exit() 
        
print(0)