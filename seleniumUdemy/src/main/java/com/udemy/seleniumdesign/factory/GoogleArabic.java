package com.udemy.seleniumdesign.factory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class GoogleArabic extends GoogleEnglish{

    @FindBy(css = "span.hOoLGe")
    private WebElement keyboardBtn;

    @FindBy(xpath = ("//*[@id='SIvCob']/a[2]"))
    private WebElement language;


    @FindBy(id = "kbd")
    private WebElement keyboard;

    public GoogleArabic(WebDriver driver) {
        super(driver);
    }

    @Override
    public void launchSite() {
        this.driver.get("https://www.google.com.sa/");
        this.language.click();
    }

    @Override
    public void search(String keyword) {
        this.wait.until((d) -> this.keyboardBtn.isDisplayed());
        this.keyboardBtn.click();
        this.wait.until((d) -> this.keyboard.isDisplayed());
        super.search(keyword);
    }
}
