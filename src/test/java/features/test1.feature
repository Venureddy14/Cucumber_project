Feature: Accessing the Dashboard
This features defines the different user access to a dashboard

Background: test background
Given I am a valid user

@tag1
Scenario: Accessing with a valid user name and password

Given I am a registered user on the web page
When I update my user credentials
When I click on Login
Then I should get acees to the Dashboard

@tag2
Scenario: Accessing with an invalid user name

Given I am not a registered user on the web page
When I update my user credntials
And I click on Login
Then I should get a error message


Scenario: Login
Given I am a valid user on the web page
When I enter treh username as "natarajan.ramanathan93@gmail.com"
And I enter the password as "Welcome123"
And I click on the SignIn button
Then I should be navigated to teh dashboard



Scenario Outline: Login
Given I am a valid user on the web page
When I enter the username as <username>
When I enter the password as <password>
And I click on tghe signin button
Then I should be navigated to the dashboard

Examples:
|username|password|
|nat|pwd1|
|natarajan.ramanathan93@gmil.com|Welcome123|

Scenario: Insurance Records
Given I am able to access the dashboard
When I enter the insurance records
|name|email|phone|address|age|
|venu|vg@gmail.com|4656876897|hgfuyg|24|
|reddy|bgt@ffnn.com|64574|i|25|
And I post it
Then I should be able to retrive the data from DB

Scenario: Insurance Records1
Given I am able to access the dashboard
When I enter the insurance records
"""

"""
And I post it
Then I should be able to retrive the data from DB