#Mocha Setup -- for integration testing

Assumes using G-express generator

## Steps

1. create test dir in root
1. install dependencies
    * "chai"
    * "chai-http"
    * "mocha"
```sh
npm i chai chai-http mocha --save-dev
```
1. Add a "test" script to *package.json* in top object:
```json
"test": "mocha"
```
1. Create *mocha.opts* in *test/*, add the following flag so that mocha looks in all the directories within the *test/*
```
--recursive
```
1. Create new folder called integration within *test/*
1. Create a new file for each route resource you are testing. - i.e. *cars-routes.js*  - within *integration/* create *cars-routes.js*
1. chai.should models behavior driven development. chai.expect is like hoping x is what happens
1. Add following base testing for each testing route.
```javascript
    process.env.NODE_ENV = 'test';

    var chai = require('chai');
    var chaiHttp = require('chai-http');
    var server = require('../../src/server/app');
    var should = chai.should();

    chai.use(chaiHttp);


    describe('car routes', function() {


      // beforeEach(function(done) {
      //   done();
      // });

      // afterEach(function(done) {
      //   done();
      // });

      describe('', function() {

        it('', function(done) {
            done();
        });
      });

    });
```

1. add middleware to *app.js* to turn off logger when *process.env.NODE_ENV* is 'test'
```javascript
    if (process.env.NODE_ENV !== 'test') {
        app.use(logger(dev)):
    }
```



##Other Notes
TYPICAL PYRAMID OF TESTING
80% unit
15% integration
5% functional

MICHAEL'S PREFERRED PYRAMID
80% integration
20% unit/functional

* Pick a naming convention and stick with it.
* Whenever you are tempted to type something into a print statement or debugger expression, write is as a test instead" -- Martin Fowler
* Unit tests should be fast, isolated, and repeatable
* webdriver.js for functional testing