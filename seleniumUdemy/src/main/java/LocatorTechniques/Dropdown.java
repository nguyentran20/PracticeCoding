package LocatorTechniques;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class Dropdown {
    public static void main(String[] args) throws InterruptedException {
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.spicejet.com/");
       /* WebElement element = driver.findElement(By.id("ctl00_mainContent_DropDownListCurrency"));
        Select s = new Select(element);
        s.selectByIndex(2);*/
        /*driver.findElement(By.id("divpaxinfo")).click();*/
        /*new Actions(driver).MoveToElement(element).Click().Perform();*/

        JavascriptExecutor js = (JavascriptExecutor) driver;
        WebElement element = driver.findElement(By.id("divpaxinfo"));
        js.executeScript("arguments[0].click();", element);

        System.out.println("Hello");
        Thread.sleep(5000);
       /* Select s1 = new Select(driver.findElement(By.id("ctl00_mainContent_ddl_Adult")));
        s1.selectByIndex(1);
        System.out.println("Hello");

        Select s2 = new Select(driver.findElement(By.id("ctl00_mainContent_ddl_Child")));
        s2.selectByIndex(3);
        Select s3 = new Select(driver.findElement(By.id("ctl00_mainContent_ddl_Infant")));
        s3.selectByValue("1");
*/
    }
}
