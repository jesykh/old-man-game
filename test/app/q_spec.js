define([
    'chai',
    'app/q'
  ], function(
    chai,
    Q
  ) {
    var expect = chai.expect;

    describe('Quintus Instance', function() {
      it('is defined', function() {
        expect(Q).to.be.defined;
      });
    });
  });
