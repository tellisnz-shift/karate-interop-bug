# karate-interop-bug

BUG Output with [38ad211](https://github.com/intuit/karate/commit/38ad21199c4bd28c45bc1ab5f43845d30264d5d4):

```
Warning: Nashorn engine is planned to be removed from a future JDK release
15:27:48.957 [main] INFO  com.intuit.karate - Hello World! 
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by net.minidev.asm.DynamicClassLoader (file:/Users/tom/.m2/repository/net/minidev/json-smart/2.2/json-smart-2.2.jar) to method java.lang.ClassLoader.defineClass(java.lang.String,byte[],int,int)
WARNING: Please consider reporting this to the maintainers of net.minidev.asm.DynamicClassLoader
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release

com.intuit.karate.exception.KarateException: -unknown-:4 - javascript evaluation failed: testData.getMessage(), TypeError: testData.getMessage is not a function in <eval> at line number 1

	at ✽.* def message = testData.getMessage() (-unknown-:4)

---------------------------------------------------------
feature: classpath:examples/users/users.feature
scenarios:  1 | passed:  0 | failed:  1 | time: 0.0344
---------------------------------------------------------
HTML report: (paste into browser to view) | Karate version: 1.0.0
file:/Users/tom/code/karate-interop-bug/karate-interop-bug/target/surefire-reports/examples.users.users.html
---------------------------------------------------------
```

WORKING Output with [80729d5](https://github.com/intuit/karate/commit/80729d5a42e72abc97d319249c4fb43832348638)

```
Warning: Nashorn engine is planned to be removed from a future JDK release
15:17:59.737 [main] INFO  com.intuit.karate - Hello World! 
15:17:59.769 [main] INFO  com.intuit.karate - [print] Hello World!
---------------------------------------------------------
feature: classpath:examples/users/users.feature
scenarios:  1 | passed:  1 | failed:  0 | time: 0.0085
---------------------------------------------------------
HTML report: (paste into browser to view) | Karate version: 1.0.0
file:/Users/tom/code/karate-interop-bug/karate-interop-bug/target/surefire-reports/examples.users.users.html
---------------------------------------------------------
```
