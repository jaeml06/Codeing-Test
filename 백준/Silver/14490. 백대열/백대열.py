import sys
read = sys.stdin.readline

def gcd(N, M):
  while M != 0:
    temp = M
    M = N % M
    N = temp
  return N


N, M = map(int, read().split(':'))

value = gcd(N,M)
print(f"{N // value}:{M//value}")