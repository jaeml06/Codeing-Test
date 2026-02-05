n, t = map(int, input().split())

l = input().split()
r = input().split()
d = input().split()

belt = l + r + d
length = 3 * n

t %= length
belt = belt[-t:] + belt[:-t]

l = belt[:n]
r = belt[n:2*n]
d = belt[2*n:]
print(' '.join(l))
print(' '.join(r))
print(' '.join(d))