package LocatorTechniques;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class LocatorSimple {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        /*driver.get("https://www.facebook.com/");
        driver.findElement(By.id("email")).sendKeys("trantrnguyen15@gmail.com");
        driver.findElement(By.name("pass")).sendKeys("123456");
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);*/

        driver.get("https://login.salesforce.com/");
        driver.findElement(By.id("username")).sendKeys("hello");
        driver.findElement(By.id("password")).sendKeys("nguyen");
        driver.findElement(By.id("Login")).click();

        //Customize Xpath/CSS


    }
}
