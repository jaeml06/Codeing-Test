function solution(sizes) {
    var answer = 0;
    sizes.forEach(size => {
        size.sort((a, b) => b-a)
    })
    const width = sizes.map(size => size[0]).sort((a,b) => b-a);
    const height = sizes.map(size => size[1]).sort((a,b) => b-a);
    answer = width[0] * height[0]
    
    return answer;
}