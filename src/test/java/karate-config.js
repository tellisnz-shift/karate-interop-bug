function fn() {

  var config = {};
  config.testData = Java.type('examples.users.TestData');
  // works here fine
  karate.log(config.testData.getMessage());

  return config;
}
