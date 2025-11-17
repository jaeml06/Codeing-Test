function solution(phone_book) {
    phone_book.sort();
    for(let i = 0; i < phone_book.length - 1; i++){
        const p1 = phone_book[i];
        const p2 = phone_book[i + 1];
        
        if(p1 === p2.slice(0, p1.length)){
            return false
        }
    }
    return true;
}