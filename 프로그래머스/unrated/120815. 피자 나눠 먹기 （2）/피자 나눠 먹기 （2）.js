function solution(n) {
    let pizza = 1;
    while (!Number.isInteger(pizza * 6 / n)) {
        pizza += 1;
    }
    return pizza;
}