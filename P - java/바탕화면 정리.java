class Solution {
    public int[] solution(String[] wallpaper) {
        int maxX=0;
        int maxY=0;
        int minX=51;
        int minY=51;
        String[][] arr = new String[wallpaper.length][wallpaper[0].length()];

        for(int i=0;i<wallpaper.length;i++){
            arr[i] = wallpaper[i].split("");
            for(int j= 0;j<wallpaper[i].length();j++){
                if(arr[i][j].equals("#")){
                    if(maxX < j){
                        maxX = j;
                    }
                    if(maxY < i){
                        maxY = i;
                    }
                    if(minX >= j){
                        minX = j;
                    }
                    if(minY >= i){
                        minY = i;
                    }
                }
            }
        }

        int[] answer = {minY, minX, maxY+1,maxX+1};
        return answer;
    }
}