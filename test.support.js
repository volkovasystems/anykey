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

	describe("`anykey( [ 'toString', 'valueOf' ], 'hello' )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey(["toString", "valueOf"], "hello"), true);
		});
	});

	describe("`anykey( [ 'toString', 'valueOf' ], 123 )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey(["toString", "valueOf"], 123), true);
		});
	});

	describe("`anykey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey(["toString", "valueOf"], [1, 2, 3]), true);
		});
	});

	describe("`anykey( [ 0, 1 ], { 0: 'hello', 1: 'world' } )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey([0, 1], { 0: "hello", 1: "world" }), true);
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

	describe("`anykey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", function () {
		it("should be equal to true", function () {
			assert.equal(anykey(["toString", "valueOf"], function yeah() {}), true);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYW55a2V5IiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiTmFOIiwiaGVsbG8iLCJoaSIsIm9iamVjdCIsInllYWgiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLHFCQUFULENBQWY7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUJBLFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0MsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsVUFBUixFQUFvQkksR0FBcEIsQ0FBZCxFQUF5QyxJQUF6QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSCxVQUFVLGdEQUFWLEVBQTRELFlBQU87QUFDbEVDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLENBQUUsVUFBRixFQUFjLFNBQWQsQ0FBUixFQUFtQyxPQUFuQyxDQUFkLEVBQTRELElBQTVEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsNENBQVYsRUFBd0QsWUFBTztBQUM5REMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRSxVQUFGLEVBQWMsU0FBZCxDQUFSLEVBQW1DLEdBQW5DLENBQWQsRUFBd0QsSUFBeEQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxvREFBVixFQUFnRSxZQUFPO0FBQ3RFQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxDQUFFLFVBQUYsRUFBYyxTQUFkLENBQVIsRUFBbUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBbkMsQ0FBZCxFQUFnRSxJQUFoRTtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGtEQUFWLEVBQThELFlBQU87QUFDcEVDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBUixFQUFrQixFQUFFLEdBQUcsT0FBTCxFQUFjLEdBQUcsT0FBakIsRUFBbEIsQ0FBZCxFQUE4RCxJQUE5RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGlGQUFWLEVBQTZGLFlBQU87QUFDbkdDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLG1CQUFZLFVBQVosQ0FBUixvQ0FBc0MsbUJBQVksVUFBWixDQUF0QyxFQUFrRSxPQUFsRSxFQUFkLEVBQTZGLElBQTdGO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsaURBQVYsRUFBNkQsWUFBTztBQUNuRUMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsVUFBUixFQUFvQixFQUFFLFlBQVksT0FBZCxFQUFwQixDQUFkLEVBQTZELElBQTdEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsc0RBQVYsRUFBa0UsWUFBTztBQUN4RUMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRSxVQUFGLEVBQWMsU0FBZCxFQUF5QixNQUF6QixDQUFSLEVBQTJDLEtBQTNDLENBQWQsRUFBa0UsSUFBbEU7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSw4Q0FBVixFQUEwRCxZQUFPO0FBQ2hFQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxDQUFFLE9BQUYsRUFBVyxPQUFYLEVBQW9CLE1BQXBCLENBQVIsRUFBc0MsRUFBdEMsQ0FBZCxFQUEwRCxLQUExRDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLDRHQUFWLEVBQXdILFlBQU87QUFDOUhDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQyxPQUFJRyxRQUFRLHNCQUFRLE9BQVIsQ0FBWjtBQUNBLE9BQUlDLEtBQUssc0JBQVEsSUFBUixDQUFUO0FBQ0EsT0FBSUMsK0RBQWFGLEtBQWIsRUFBc0IsR0FBdEIsMENBQTZCQyxFQUE3QixFQUFtQyxHQUFuQyxXQUFKOztBQUVBUixVQUFPSyxLQUFQLENBQWNILE9BQVEsQ0FBRUssS0FBRixFQUFTQyxFQUFULENBQVIsRUFBdUJDLE1BQXZCLENBQWQsRUFBK0MsSUFBL0M7QUFDQSxHQU5EO0FBT0EsRUFSRDs7QUFVQU4sVUFBVSw0REFBVixFQUF3RSxZQUFPO0FBQzlFQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBUSxDQUFFLFVBQUYsRUFBYyxTQUFkLENBQVIsRUFBbUMsU0FBU1EsSUFBVCxHQUFnQixDQUFHLENBQXRELENBQWQsRUFBd0UsSUFBeEU7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQSxDQXhFRDtBQXlFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImFueWtleVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYW55a2V5L3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9hbnlrZXkuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImFueWtleVwiOiBcImFueWtleVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgYW55a2V5ID0gcmVxdWlyZSggXCIuL2FueWtleS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcbmRlc2NyaWJlKCBcImFueWtleVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoICd0b1N0cmluZycsIE5hTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFueWtleSggXCJ0b1N0cmluZ1wiLCBOYU4gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnIF0sICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbnlrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCBcImhlbGxvXCIgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnIF0sIDEyMyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFueWtleSggWyBcInRvU3RyaW5nXCIsIFwidmFsdWVPZlwiIF0sIDEyMyApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFueWtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicgXSwgWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbnlrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCBbIDEsIDIsIDMgXSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFueWtleSggWyAwLCAxIF0sIHsgMDogJ2hlbGxvJywgMTogJ3dvcmxkJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYW55a2V5KCBbIDAsIDEgXSwgeyAwOiBcImhlbGxvXCIsIDE6IFwid29ybGRcIiB9ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCBTeW1ib2wuZm9yKCAncHJvcGVydHknICksIHsgWyBTeW1ib2wuZm9yKCAncHJvcGVydHknICkgXTogJ3ZhbHVlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYW55a2V5KCBTeW1ib2wuZm9yKCBcInByb3BlcnR5XCIgKSwgeyBbIFN5bWJvbC5mb3IoIFwicHJvcGVydHlcIiApIF06IFwidmFsdWVcIiB9ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCAncHJvcGVydHknLCB7ICdwcm9wZXJ0eSc6ICd2YWx1ZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFueWtleSggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnLCAneWVhaCcgXSwgZmFsc2UgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbnlrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiwgXCJ5ZWFoXCIgXSwgZmFsc2UgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ2hlbGxvJywgJ3dvcmxkJywgJ3llYWgnIF0sICcnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFueWtleSggWyBcImhlbGxvXCIsIFwid29ybGRcIiwgXCJ5ZWFoXCIgXSwgXCJcIiApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgU3ltYm9sKCAnaGVsbG8nICksIFN5bWJvbCggJ2hpJyApIF0sIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiAxMjMsIFsgU3ltYm9sKCAnaGknICkgXTogMTIzIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGhlbGxvID0gU3ltYm9sKCBcImhlbGxvXCIgKTtcblx0XHRcdGxldCBoaSA9IFN5bWJvbCggXCJoaVwiICk7XG5cdFx0XHRsZXQgb2JqZWN0ID0geyBbIGhlbGxvIF06IDEyMywgWyBoaSBdOiAxMjMgfTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhbnlrZXkoIFsgaGVsbG8sIGhpIF0sIG9iamVjdCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFueWtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicgXSwgZnVuY3Rpb24geWVhaCggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGFueWtleSggWyBcInRvU3RyaW5nXCIsIFwidmFsdWVPZlwiIF0sIGZ1bmN0aW9uIHllYWgoICl7IH0gKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
