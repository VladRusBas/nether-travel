var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Fortunes test', function(){
    test('getFortune() must return fortune', function(){
        expect(typeof fortune.getFortune() === 'string');
    });
});
