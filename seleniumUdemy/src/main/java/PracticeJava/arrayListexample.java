package PracticeJava;

import java.util.ArrayList;

public class arrayListexample {
    public static void main(String[] args) {
        ArrayList<String> a = new ArrayList<String>();
        a.add("Nguyen");
        a.add("Financial Independent");
        a.add(0,"Student");
        a.remove(1);
        System.out.println(a);
        System.out.println(a.contains("Student"));

    }
}
