import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Solution {
    static int binarySearch(int x, int y) {
        int left = 0;
        int right = point.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (point[mid] > y) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        int endIndex = right + 1;

        left = 0;
        right = point.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (point[mid] < x) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        int startIndex = left;

//        System.out.println("페어 : " + startIndex + " " + endIndex);

        return endIndex - startIndex;
    }
    static int point[];


    public static void main(String[] args) throws IOException {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      StringTokenizer st = new StringTokenizer(br.readLine());
      StringBuilder sb = new StringBuilder();
      int N = Integer.parseInt(st.nextToken());
      int M = Integer.parseInt(st.nextToken());

      st = new StringTokenizer(br.readLine());
      point = new int[N];
      for(int i = 0;i<N; i++){
          point[i] = Integer.parseInt(st.nextToken());
      }
      Arrays.sort(point);

      for(int i = 0;i<M;i++){
          int sum=0;
          st = new StringTokenizer(br.readLine());
          int start = Integer.parseInt(st.nextToken());
          int end = Integer.parseInt(st.nextToken());

          sum = binarySearch(start, end);

          sb.append(sum).append("\n");

      }
      System.out.println(sb);
    }
}
