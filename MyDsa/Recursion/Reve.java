public class Reve {

    public static void rev(String str, int len) {

        if (len > 0) {
            System.out.println(str.charAt(len - 1));
            len--;
            rev(str, len);
        }

    }

    public static void main(String[] args) {
        String str = "abc";
        int len = str.length();
        rev(str, len);
    }
}
