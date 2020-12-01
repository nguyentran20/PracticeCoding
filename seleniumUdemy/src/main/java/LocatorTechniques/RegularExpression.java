package LocatorTechniques;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class RegularExpression {
    public static void main(String[] args) throws InterruptedException {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.rediff.com/");
        driver.findElement(By.xpath("//a[contains(text(),'Sign in')]")).click();
        Thread.sleep(2000);
        driver.findElement(By.cssSelector("#login1")).sendKeys("abcnhonxe");
        driver.findElement(By.xpath("//input[@name = 'passwd']")).sendKeys("123456");
        driver.findElement(By.cssSelector("input.signinbtn")).click();
    }
}
