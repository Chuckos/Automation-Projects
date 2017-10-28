// Expect:

var expect = require('chai').expect
    , foo = 'bar'
    , beverages = { tea: [ 'chai', 'matcha', 'oolong'] };
    var answer = 43;


describe('Chai using Expect Example', function () {
    it('should pass the chai exampe', function (){
        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.lengthOf(3);
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    });

    it('allows you to include arbitrary messages to prepend to any failed assertions that might occur', function(){
        // AssertionError: expected 43 to equal 42.
        expect(answer).to.equal(42);

        // AssertionError: topic [answer]: expected 43 to equal 42.
        expect(answer, 'topic [answer]').to.equal(42);
    });
});

