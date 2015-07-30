define(['js/models/Snippet'], function(Model) {
    describe('Snippet Model', function() {

        beforeEach(function() {
            this.model = undefined;
        });

        it('should create a model', function() {
            this.model = new Model({title: 'Snippet', description: 'Description', code: '.span { color: red; }'});
            this.model.get('title').should.equal('Snippet');
            this.model.get('code').should.equal('.span { color: red; }');
            this.model.get('description').should.equal('Description');
        });

        it('should have default title', function() {
            this.model = new Model({description: 'Description', code: '.span { color: red; }'});
            this.model.get('title').should.equal('untitled');
        });

        it('should error when empty', function() {
            this.model = new Model();
            this.model.save({title: 'Snippet', description: 'Description', code: ''});
            this.model.isValid().should.not.equal(true);
            this.model.validationError.should.equal('Empty snippet');
        });
    });
});
