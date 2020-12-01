package com.searchmodule.test;

import com.searchmodule.pages.SearchPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class SearchTest {
    private WebDriver driver;

    @BeforeTest
    public void setupDriver() {
        this.driver = new ChromeDriver();
    }

    @Test
    public void search() {
        SearchPage searchPage = new SearchPage(driver);
        searchPage.goTo();
        searchPage.doSearch("Java");
        searchPage.goToVideos();
        searchPage.printResult();
    }

    @AfterTest
    public void quitDriver() {
        this.driver.quit();
    }
}
