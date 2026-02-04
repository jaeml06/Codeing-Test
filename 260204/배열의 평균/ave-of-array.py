arr1 = list(map(int, input().split()))
arr2 = list(map(int, input().split()))

# 가로 평균
row_avg = []
row_avg.append(sum(arr1) / len(arr1))
row_avg.append(sum(arr2) / len(arr2))

# 세로 평균
col_avg = []
for j in range(4):
    temp = arr1[j] + arr2[j]
    col_avg.append(temp / 2)

# 출력
print(' '.join(f"{x:.1f}" for x in row_avg))
print(' '.join(f"{x:.1f}" for x in col_avg))
print(f"{(sum(arr1) + sum(arr2)) / 8:.1f}")