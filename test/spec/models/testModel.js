define(['js/models/testModel'], function(Model) {

    describe('Example test model', function() {

        beforeEach(function() {
            this.model = new Model({title: 'Test model'});
        });

        it('should have a title', function() {
            this.model.get('title').should.equal('Test model');
        });
    });

});
