function solution(keyinput, board) {
    var answer = [0, 0];
    const xRange = (board[0] - 1) / 2;
    const yRange = (board[1] - 1) / 2;
    keyinput.forEach((value) => {
        switch(value){
            case 'left':
                if(answer[0] > -xRange){
                    answer[0] -= 1;
                }
                break;
            case 'right':
                if(answer[0] < xRange){
                    answer[0] += 1;
                }
                break;
            case 'up':
                if(answer[1] < yRange){
                    answer[1] += 1;
                }
                break;   
            case 'down':
                if(answer[1] > -yRange){
                    answer[1] -= 1;
                }
                break;
            
        }
    })
    return answer;
}