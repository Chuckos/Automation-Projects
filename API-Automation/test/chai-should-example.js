var should = require('chai').should() //actually call the function
 , foo = 'bar'
 , beverages = { tea: [ 'chai', 'matcha', 'oolong' ]};



describe('Chai test', function() {
    it('test', function(){

        foo.should.be.a('string');
        foo.should.equal('bar');
        foo.should.have.lengthOf(3);
        beverages.should.have.property('tea').with.lengthOf(3);

    });

});

