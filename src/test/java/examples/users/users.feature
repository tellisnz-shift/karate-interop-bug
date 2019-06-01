Feature: interop bug

Background:
* def message = testData.getMessage()

Scenario: should print message from java interop
* print message
