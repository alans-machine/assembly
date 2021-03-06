var assert = require('assert');

var parser = require('../assembly_parser');

describe('assembly parser', function(){
    it('should parse without newline', function(){
	var result = parser.parse('s0,I,s0,I,R;s0,_,s1,I,L;s1,I,s1,I,L;s1,_,s2,_,R;');

	assert(result);
    });

    it('should parse with newlines', function(){
	var result = parser.parse('s0,I,s0,I,R;\ns0,_,s1,I,L;\ns1,I,s1,I,L;\ns1,_,s2,_,R;');

	assert(result);
    });

    it('should parse with definitions', function(){
	var result = parser.parse('def successor s0,I,s0,I,R;s0,_,s1,I,L;s1,I,s1,I,L;s1,_,s2,_,R; end\n');

	assert(result);
    });
});
