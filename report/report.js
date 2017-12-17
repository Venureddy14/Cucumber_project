$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test1.feature");
formatter.feature({
  "line": 1,
  "name": "Accessing the Dashboard",
  "description": "This features defines the different user access to a dashboard",
  "id": "accessing-the-dashboard",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "test background",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am a valid user",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefn1.i_am_a_valid_user()"
});
formatter.result({
  "duration": 705152640,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Accessing with a valid user name and password",
  "description": "",
  "id": "accessing-the-dashboard;accessing-with-a-valid-user-name-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am a registered user on the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I update my user credentials",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should get acees to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_a_registered_user_on_the_web_page()"
});
formatter.result({
  "duration": 30851445456,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_update_my_user_credentials()"
});
formatter.result({
  "duration": 8507030256,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_click_on_Login()"
});
formatter.result({
  "duration": 779897568,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_should_get_acees_to_the_Dashboard()"
});
formatter.result({
  "duration": 7780305728,
  "status": "passed"
});
});