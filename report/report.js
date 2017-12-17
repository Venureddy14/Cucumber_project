$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test1.feature");
formatter.feature({
  "line": 1,
  "name": "Accessing the Dashboard",
  "description": "This feature defines the different user access to a dashboard\r\nand the restrictions for the same",
  "id": "accessing-the-dashboard",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Accessing with a valid user name and password",
  "description": "",
  "id": "accessing-the-dashboard;accessing-with-a-valid-user-name-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am a registered user on the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I update my user credentials",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should get acees to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_a_registered_user_on_the_web_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_update_my_user_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_should_get_acees_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Accessing with an invalid user name",
  "description": "",
  "id": "accessing-the-dashboard;accessing-with-an-invalid-user-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am not a registered user on the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I update my user credntials",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get a error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_not_a_registered_user_on_the_web_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_update_my_user_credntials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_should_get_a_error_message()"
});
formatter.result({
  "status": "skipped"
});
});