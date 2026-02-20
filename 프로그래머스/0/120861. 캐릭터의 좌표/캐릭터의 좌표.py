def solution(keyinput, board):
    x, y = 0, 0
    r_x = board[0] // 2
    r_y = board[1] // 2
    
    for k in keyinput:
        if k == "up" and y < r_y:
            y += 1
        elif k == "down" and y > -r_y:
            y -= 1
        elif k == "left" and x > -r_x:
            x -= 1
        elif k == "right" and x < r_x:
            x += 1
    return [x, y]