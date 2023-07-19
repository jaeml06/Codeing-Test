import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

class Point{
    int x;
    int y;

    Point(int x, int y){
        this.x = x;
        this.y = y;
    }
}
public class Solution {

    public static void main(String[] args) throws IOException {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      StringTokenizer st;

      int N = Integer.parseInt(br.readLine());
      ArrayList<Point> arr = new ArrayList<>();

      for(int i = 0;i<N;i++){
          st = new StringTokenizer(br.readLine());
          arr.add(new Point(Integer.parseInt(st.nextToken()),Integer.parseInt(st.nextToken())));
      }
      arr.sort(new Comparator<Point>() {
          @Override
          public int compare(Point o1, Point o2) {
              if(o1.x == o2.x){
                  return o1.y-o2.y;
              }
              return o1.x - o2.x;
          }
      });
      int sum = 0;
      int start = arr.get(0).x;
      int end = arr.get(0).y;

      sum = end-start;
      for(Point tem : arr){
          int temX = tem.x;
          int temY = tem.y;

          if(temX<end && temY>end){
              sum+=(temY-temX)-(end-temX);
              end = temY;
          } else if (temX>=end) {
              sum+=temY-temX;
              end = temY;
          }
      }

      System.out.println(sum);
    }
}
