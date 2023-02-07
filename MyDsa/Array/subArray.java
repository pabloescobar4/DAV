package Array;

public class subArray {

    public static void main(String[] args) {

        int[] arr = { 1, 2, 3 };
        int len = arr.length;

        for (int i = 0; i < len; i++) {
            int[] ar = new int[i + 1];
            for (int j = 0; j <= i; j++) {
                ar[j] = arr[j];
            }
            System.out.println(ar);
        }
    }
}
