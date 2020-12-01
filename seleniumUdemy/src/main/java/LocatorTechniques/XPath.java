package LocatorTechniques;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class XPath {
    public static void main(String[] args) throws InterruptedException {
        WebDriver driver = new ChromeDriver();
        driver.get("https://login.salesforce.com/");
        driver.findElement(By.xpath("//input[@id='username']")).sendKeys("username");
        driver.findElement(By.xpath("//input[@name='pw']")).sendKeys("123456");
        driver.findElement(By.xpath("//input[@id='Login']")).click();
        Thread.sleep(3000);
        System.out.println("This is the expected Text:");
        System.out.println(driver.findElement(By.cssSelector("#error")).getText());
       /* driver.findElement(By.cssSelector("#username")).sendKeys("username");
        driver.findElement(By.cssSelector("#password")).sendKeys("username");
        driver.findElement(By.cssSelector("#Login")).click();*/

        /*driver.get("https://www.facebook.com/");
        driver.findElement(By.xpath("//input[@name  = 'email']")).sendKeys("trantrnguyen15@gmail.com");
        driver.findElement(By.cssSelector("input[name = 'pass']")).sendKeys("123456");
        driver.findElement(By.xpath("//*[@id='u_0_a']/div[3]/a")).click();*/



    }
}
