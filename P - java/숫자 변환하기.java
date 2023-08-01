class Solution {
    int k = 1_000_001;
    public int solution(int x, int y, int n) {
        int dp[] = new int[y+1];
        for(int i = 0; i<=y;i++){
            dp[i]=k;
        }
        dp[x] = 0;
        for(int i = x; i<=y;i++){
            if(dp[i] == k){
                continue;
            }
            if(i+n<=y){
                dp[i+n] = Math.min(dp[i+n], dp[i]+1);
            }
            if(i*2<=y){
                dp[i*2] = Math.min(dp[i*2], dp[i]+1);
            }
            if(i*3<=y){
                dp[i*3] = Math.min(dp[i*3], dp[i]+1);
            }
        }
        if(dp[y]==k){
            return -1;
        }
        return dp[y];
    }
}