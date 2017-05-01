var supertest = require("supertest");
var should    = require("should");

// This agent refers to PORT where program is running.

var server = supertest.agent("http://localhost:3000");

describe('people', function(){
   it('create person', function() {
      assert(someModule.doesSomeThing());
   });
});