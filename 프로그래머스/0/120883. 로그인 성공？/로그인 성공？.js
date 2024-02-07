function solution(id_pw, db) {
    var answer = '';
    const map = new Map(db);
    if(map.has(id_pw[0])){
        if(map.get(id_pw[0]) === id_pw[1]){
            return 'login'
        }
        return 'wrong pw'
    }
    return 'fail';
}