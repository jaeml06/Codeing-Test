def solution(dirs):
    move = { 'L': [-1, 0], 'R': [1, 0], 'U': [0, 1], 'D': [0, -1] }
    cur = [0, 0]
    set1 = set()
    for dir in dirs:
        nx = cur[0] + move[dir][0]
        ny = cur[1] + move[dir][1]
        if nx >= -5 and nx <= 5 and ny >= -5 and ny <= 5:
            set1.add(f'{cur[0]}{cur[1]}{nx}{ny}')
            set1.add(f'{nx}{ny}{cur[0]}{cur[1]}')
            cur = [nx, ny]
        
    return int(len(set1) // 2)