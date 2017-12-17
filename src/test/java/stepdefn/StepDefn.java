package stepdefn;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefn {
	
	 WebDriver driver;
	
	@Given("^I am a registered user on the web page$")
	public void i_am_a_registered_user_on_the_web_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver=new FirefoxDriver();
	    driver.get("https://magento.com/");
	    driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	    driver.findElement(By.linkText("MY ACCOUNT")).click();
	}

	@When("^I update my user credentials$")
	
	public void i_update_my_user_credentials() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("email")).sendKeys("natarajan.ramanathan93@gmail.com");
	    driver.findElement(By.id("pass")).sendKeys("Welcome123");
	}

	@When("^I click on Login$")
	public void i_click_on_Login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.id("send2")).click();
	}

	@Then("^I should get acees to the Dashboard$")
	public void i_should_get_acees_to_the_Dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   Assert.assertEquals(true, driver.findElement(By.linkText("Log Out")).isDisplayed());

	}

	@Given("^I am not a registered user on the web page$")
	public void i_am_not_a_registered_user_on_the_web_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^I update my user credntials$")
	public void i_update_my_user_credntials() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

	@Then("^I should get a error message$")
	public void i_should_get_a_error_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

}
