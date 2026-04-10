n, m, k = map(int, input().split())

f_o = m
f_x = n - m

b_o = k
b_x = n - k
temp = min(f_o, b_o) + min(f_x, b_x)
print(temp)