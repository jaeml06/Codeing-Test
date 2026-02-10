def solution(dirs):
    moves = {
        'L' : [-1, 0],
        'R' : [1, 0],
        'U' : [0 , 1],
        'D' : [0, -1]
    }
    pos = [0, 0]
    visited = set()
    for dir in dirs:
        nx = pos[0] + moves[dir][0]
        ny = pos[1] + moves[dir][1]
        if -5 <= nx <= 5 and -5 <= ny <= 5:
            visited.add(f'{pos[0]}{pos[1]}{nx}{ny}')
            visited.add(f'{nx}{ny}{pos[0]}{pos[1]}')
            pos = [nx, ny]
    return len(visited) // 2
    
