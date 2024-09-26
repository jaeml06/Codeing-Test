function solution(dirs) {
    let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
    let cur = [0, 0]
    let set = new Set()
    
    for(let dir of dirs){
        let nextX = cur[0] + move[dir][0]
        let nextY = cur[1] + move[dir][1]
        
        if(nextX >= -5 && nextX <= 5 && nextY >= -5 && nextY <= 5){
            set.add(`${cur[0]}${cur[1]}${nextX}${nextY}`);
            set.add(`${nextX}${nextY}${cur[0]}${cur[1]}`);
            cur = [nextX, nextY];
        }
    }
    return set.size / 2;
}