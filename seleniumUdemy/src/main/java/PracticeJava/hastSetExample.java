package PracticeJava;

import java.util.HashSet;
import java.util.Iterator;

public class hastSetExample {
    public static void main(String[] args) {
        HashSet<String> hs = new HashSet<String>();
        hs.add("USA");
        hs.add("UK");
        hs.add("INDIA");
        hs.add("INDIA");
        System.out.println(hs);
        Iterator<String> i = hs.iterator();
        System.out.println(i.next());
        System.out.println(i.next());
        System.out.println(i.next());

    }
}
