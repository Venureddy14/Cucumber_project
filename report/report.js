$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test1.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#@Tag1 // This is for feature is running"
    }
  ],
  "line": 2,
  "name": "Accessing the Dashboard",
  "description": "",
  "id": "accessing-the-dashboard",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#This features defines the different user access to a dashboard"
    },
    {
      "line": 5,
      "value": "#@tag3"
    },
    {
      "line": 6,
      "value": "#Scenario: Accessing with a valid user name and password"
    },
    {
      "line": 8,
      "value": "#Given I am a registered user on the web page"
    },
    {
      "line": 9,
      "value": "#When I update my user credentials"
    },
    {
      "line": 10,
      "value": "#When I click on Login"
    },
    {
      "line": 11,
      "value": "#Then I should get acees to the Dashboard"
    },
    {
      "line": 13,
      "value": "#@tag4"
    },
    {
      "line": 14,
      "value": "#Scenario: Accessing with an invalid user name"
    },
    {
      "line": 16,
      "value": "#Given I am not a registered user on the web page"
    },
    {
      "line": 17,
      "value": "#When I update my user credntials"
    },
    {
      "line": 18,
      "value": "#And I click on Login"
    },
    {
      "line": 19,
      "value": "#Then I should get a error message"
    },
    {
      "line": 22,
      "value": "#Scenario: Login"
    },
    {
      "line": 23,
      "value": "#Given I am a valid user on the web page"
    },
    {
      "line": 24,
      "value": "#When I enter treh username as \"natarajan.ramanathan93@gmail.com\""
    },
    {
      "line": 25,
      "value": "#And I enter the password as \"Welcome123\""
    },
    {
      "line": 26,
      "value": "#And I click on the SignIn button"
    },
    {
      "line": 27,
      "value": "#Then I should be navigated to teh dashboard"
    },
    {
      "line": 28,
      "value": "#Background: test background"
    },
    {
      "line": 29,
      "value": "#Given I am a valid user"
    }
  ],
  "line": 31,
  "name": "Login",
  "description": "",
  "id": "accessing-the-dashboard;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am a valid user on the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter the username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter the password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on tghe signin button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should be navigated to the dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "accessing-the-dashboard;login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 39,
      "id": "accessing-the-dashboard;login;;1"
    },
    {
      "cells": [
        "nat",
        "pwd1"
      ],
      "line": 40,
      "id": "accessing-the-dashboard;login;;2"
    },
    {
      "cells": [
        "natarajan.ramanathan93@gmil.com",
        "Welcome123"
      ],
      "line": 41,
      "id": "accessing-the-dashboard;login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Login",
  "description": "",
  "id": "accessing-the-dashboard;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am a valid user on the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter the username as nat",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter the password as pwd1",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on tghe signin button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should be navigated to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefn1.i_am_a_valid_user_on_the_web_page()"
});
formatter.result({
  "duration": 2261446079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nat",
      "offset": 24
    }
  ],
  "location": "Stepdefn1.i_enter_the_username_as(String)"
});
formatter.result({
  "duration": 9512208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pwd1",
      "offset": 24
    }
  ],
  "location": "Stepdefn1.i_enter_the_password_as(String)"
});
formatter.result({
  "duration": 137040,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefn1.i_click_on_tghe_signin_button()"
});
formatter.result({
  "duration": 47760,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefn1.i_should_be_navigated_to_the_dashboard()"
});
formatter.result({
  "duration": 72513,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Login",
  "description": "",
  "id": "accessing-the-dashboard;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am a valid user on the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter the username as natarajan.ramanathan93@gmil.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter the password as Welcome123",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on tghe signin button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should be navigated to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefn1.i_am_a_valid_user_on_the_web_page()"
});
formatter.result({
  "duration": 103487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmil.com",
      "offset": 24
    }
  ],
  "location": "Stepdefn1.i_enter_the_username_as(String)"
});
formatter.result({
  "duration": 151873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome123",
      "offset": 24
    }
  ],
  "location": "Stepdefn1.i_enter_the_password_as(String)"
});
formatter.result({
  "duration": 142353,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefn1.i_click_on_tghe_signin_button()"
});
formatter.result({
  "duration": 63665,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefn1.i_should_be_navigated_to_the_dashboard()"
});
formatter.result({
  "duration": 64928,
  "status": "passed"
});
});