arr = [int(input()) for _ in range(9)]

target = sum(arr) - 100

for i in range(9):
    for j in range(i + 1, 9):
        if target == arr[i] + arr[j]:
            arr.pop(j)
            arr.pop(i)

            for val in sorted(arr):
                print(val)
            exit()