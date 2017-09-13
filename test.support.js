"use strict";

/*;
              	@test-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "anykey",
              			"path": "anykey/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/anykey.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"anykey": "anykey"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var anykey = require("./anykey.support.js");
//: @end-client







//: @client:
describe("anykey", function () {

	describe("`anykey( 'toString', NaN )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey("toString", NaN), true);
		});
	});

	describe("`anykey( 'toString', 123 )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey("toString", 123), true);
		});
	});

	describe("`anykey( [ 'toString', 'valueOf' ], 123 )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey(["toString", "valueOf"], 123), true);
		});
	});

	describe("`anykey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey((0, _for2.default)("property"), (0, _defineProperty3.default)({}, (0, _for2.default)("property"), "value")), true);
		});
	});

	describe("`anykey( 'property', { 'property': 'value' } )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey("property", { "property": "value" }), true);
		});
	});

	describe("`anykey( [ 'toString', 'valueOf', 'yeah' ], false )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey(["toString", "valueOf", "yeah"], false), true);
		});
	});

	describe("`anykey( [ 'hello', 'world', 'yeah' ], '' )`", function () {
		it("should be equal to false", function () {
			assert.equal(anykey(["hello", "world", "yeah"], ""), false);
		});
	});

	describe("`anykey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", function () {
		it("should be equal to true", function () {var _object;
			var hello = (0, _symbol2.default)("hello");
			var hi = (0, _symbol2.default)("hi");
			var object = (_object = {}, (0, _defineProperty3.default)(_object, hello, 123), (0, _defineProperty3.default)(_object, hi, 123), _object);

			assert.equal(anykey([hello, hi], object), true);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYW55a2V5IiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiTmFOIiwiaGVsbG8iLCJoaSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFNBQVNELFFBQVMscUJBQVQsQ0FBZjtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxVQUFSLEVBQW9CSSxHQUFwQixDQUFkLEVBQXlDLElBQXpDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFILFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0MsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsVUFBUixFQUFvQixHQUFwQixDQUFkLEVBQXlDLElBQXpDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsNENBQVYsRUFBd0QsWUFBTztBQUM5REMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRSxVQUFGLEVBQWMsU0FBZCxDQUFSLEVBQW1DLEdBQW5DLENBQWQsRUFBd0QsSUFBeEQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxpRkFBVixFQUE2RixZQUFPO0FBQ25HQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxtQkFBWSxVQUFaLENBQVIsb0NBQXNDLG1CQUFZLFVBQVosQ0FBdEMsRUFBa0UsT0FBbEUsRUFBZCxFQUE2RixJQUE3RjtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGlEQUFWLEVBQTZELFlBQU87QUFDbkVDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLFVBQVIsRUFBb0IsRUFBRSxZQUFZLE9BQWQsRUFBcEIsQ0FBZCxFQUE2RCxJQUE3RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHNEQUFWLEVBQWtFLFlBQU87QUFDeEVDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLENBQUUsVUFBRixFQUFjLFNBQWQsRUFBeUIsTUFBekIsQ0FBUixFQUEyQyxLQUEzQyxDQUFkLEVBQWtFLElBQWxFO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsOENBQVYsRUFBMEQsWUFBTztBQUNoRUMsS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixNQUFwQixDQUFSLEVBQXNDLEVBQXRDLENBQWQsRUFBMEQsS0FBMUQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSw0R0FBVixFQUF3SCxZQUFPO0FBQzlIQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckMsT0FBSUcsUUFBUSxzQkFBUSxPQUFSLENBQVo7QUFDQSxPQUFJQyxLQUFLLHNCQUFRLElBQVIsQ0FBVDtBQUNBLE9BQUlDLCtEQUFhRixLQUFiLEVBQXNCLEdBQXRCLDBDQUE2QkMsRUFBN0IsRUFBbUMsR0FBbkMsV0FBSjs7QUFFQVIsVUFBT0ssS0FBUCxDQUFjSCxPQUFRLENBQUVLLEtBQUYsRUFBU0MsRUFBVCxDQUFSLEVBQXVCQyxNQUF2QixDQUFkLEVBQStDLElBQS9DO0FBQ0EsR0FORDtBQU9BLEVBUkQ7O0FBVUEsQ0F0REQ7QUF1REEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJhbnlrZXlcIixcblx0XHRcdFwicGF0aFwiOiBcImFueWtleS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYW55a2V5LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJhbnlrZXlcIjogXCJhbnlrZXlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGFueWtleSA9IHJlcXVpcmUoIFwiLi9hbnlrZXkuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJhbnlrZXlcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCAndG9TdHJpbmcnLCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbnlrZXkoIFwidG9TdHJpbmdcIiwgTmFOICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCAndG9TdHJpbmcnLCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbnlrZXkoIFwidG9TdHJpbmdcIiwgMTIzICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCBbICd0b1N0cmluZycsICd2YWx1ZU9mJyBdLCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbnlrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCAxMjMgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSwgeyBbIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSBdOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbnlrZXkoIFN5bWJvbC5mb3IoIFwicHJvcGVydHlcIiApLCB7IFsgU3ltYm9sLmZvciggXCJwcm9wZXJ0eVwiICkgXTogXCJ2YWx1ZVwiIH0gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoICdwcm9wZXJ0eScsIHsgJ3Byb3BlcnR5JzogJ3ZhbHVlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYW55a2V5KCBcInByb3BlcnR5XCIsIHsgXCJwcm9wZXJ0eVwiOiBcInZhbHVlXCIgfSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFueWtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicsICd5ZWFoJyBdLCBmYWxzZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFueWtleSggWyBcInRvU3RyaW5nXCIsIFwidmFsdWVPZlwiLCBcInllYWhcIiBdLCBmYWxzZSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFueWtleSggWyAnaGVsbG8nLCAnd29ybGQnLCAneWVhaCcgXSwgJycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYW55a2V5KCBbIFwiaGVsbG9cIiwgXCJ3b3JsZFwiLCBcInllYWhcIiBdLCBcIlwiICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFueWtleSggWyBTeW1ib2woICdoZWxsbycgKSwgU3ltYm9sKCAnaGknICkgXSwgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06IDEyMywgWyBTeW1ib2woICdoaScgKSBdOiAxMjMgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgaGVsbG8gPSBTeW1ib2woIFwiaGVsbG9cIiApO1xuXHRcdFx0bGV0IGhpID0gU3ltYm9sKCBcImhpXCIgKTtcblx0XHRcdGxldCBvYmplY3QgPSB7IFsgaGVsbG8gXTogMTIzLCBbIGhpIF06IDEyMyB9O1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFueWtleSggWyBoZWxsbywgaGkgXSwgb2JqZWN0ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
