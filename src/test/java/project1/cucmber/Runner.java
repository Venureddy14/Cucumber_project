package project1.cucmber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false, monochrome=true, features= "src/test/java/features/", glue= "stepdefn",
format= {"pretty","html:report","json:target/cucumber/cucumber.json"})

public class Runner {

}
