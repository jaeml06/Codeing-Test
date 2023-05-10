"""
누적합 정렬 

구간이 L, R로 주어질 때 A[L] + A[L+1 + ... + A[R-1] + A[R]
M번 수행
int ans = 0;
for (int i=L; i<=R; i++) {
    ans += A[i];
}
위 방식은 시간 복잡도 O(NM)
최앍으 경우 O(N^2) 시간 초과 우려가 있음
누적합 배열S[]을 생성하여 S[R]-S[L-1]하면 시간 복잡도 O(M)이다

"""

import sys

input = sys.stdin.readline

N, Q = map(int, input().split())

data = list(map(int, input().split()))
data.sort()
result = []
sum = [0, data[0]]
for i in range(1, N):
    sum.append(data[i] + sum[i])

for _ in range(Q):
    L, R = map(int, input().split())
    result.append(sum[R] - sum[L - 1])

for i in result:
    print(i)
