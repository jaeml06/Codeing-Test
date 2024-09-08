import sys
read = sys.stdin.readline

arr = [(int(read()), i + 1) for i in range(8)]

arr.sort(reverse=True, key=lambda x: x[0])

top5 = arr[:5]

total_score = sum([score for score, _ in top5])

top5_problems = [problem for _, problem in top5]
top5_problems.sort()

print(total_score)
print(' '.join(map(str, top5_problems)))