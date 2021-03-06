package com.udemy.seleniumdesign.factory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class GoogleEnglish extends GooglePage {
    protected WebDriver driver;
    protected WebDriverWait wait;

    @FindBy(name = "q")
    protected WebElement searchBox;

    @FindBy(name = "btnk")
    protected WebElement searchBtn;

    @FindBy(css = "div.rc")
    protected List<WebElement> results;



    public GoogleEnglish(final WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver,30);
        PageFactory.initElements(driver,this);
    }

    @Override
    public void launchSite() {
        this.driver.get("https://www.google.com/");
    }

    @Override
    public int getResultsCount() {
        wait.until((d) -> this.results.size() > 1);
        return this.results.size();
    }

    @Override
    public void search(String keyword) {
        this.searchBox.sendKeys(keyword);
        this.wait.until((d) -> this.searchBtn.isDisplayed());
        this.searchBtn.click();
    }
}
