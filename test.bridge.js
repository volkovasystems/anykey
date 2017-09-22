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
              */

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:
describe("anykey", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`anykey( 'toString', NaN )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return anykey("toString", NaN);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`anykey( [ 'toString', 'valueOf' ], 'hello' )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return anykey(["toString", "valueOf"], "hello");
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`anykey( [ 'toString', 'valueOf' ], 123 )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return anykey(["toString", "valueOf"], 123);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`anykey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return anykey(["toString", "valueOf"], [1, 2, 3]);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`anykey( [ 0, 1 ], { 0: 'hello', 1: 'world' } )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return anykey([0, 1], { 0: "hello", 1: "world" });
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`anykey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return anykey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);
		});
	});

	describe("`anykey( 'property', { 'property': 'value' } )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return anykey("property", { "property": "value" });
			}).

			value;

			assert.equal(result, true);
		});
	});



	describe("`anykey( [ 'toString', 'valueOf', 'yeah' ], false )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return anykey(["toString", "valueOf", "yeah"], false);
			}).

			value;

			assert.equal(result, true);
		});
	});

	describe("`anykey( [ 'hello', 'world', 'yeah' ], '' )`", function () {
		it("should be equal to false", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return anykey(["hello", "world", "yeah"], "");
			}).

			value;

			assert.equal(result, false);
		});
	});

	describe("`anykey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let hello = Symbol( "hello" );
   					let hi = Symbol( "hi" );
   					let object = { [ hello ]: 123, [ hi ]: 123 };
   
   					return anykey( [ hello, hi ], object );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);
		});
	});

	describe("`anykey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return anykey(["toString", "valueOf"], function yeah() {});
			}).

			value;

			assert.equal(result, true);
		});
	});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImFueWtleSIsIk5hTiIsInZhbHVlIiwiZXF1YWwiLCJ5ZWFoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0ksS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE9BQVEsVUFBUixFQUFvQkMsR0FBcEIsQ0FBUDtBQUNBLElBSlc7O0FBTVhDLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0QjtBQUNBLEdBVkQ7QUFXQSxFQVpEOztBQWNBTCxVQUFVLGdEQUFWLEVBQTRELFlBQU87QUFDbEVJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxPQUFRLENBQUUsVUFBRixFQUFjLFNBQWQsQ0FBUixFQUFtQyxPQUFuQyxDQUFQO0FBQ0EsSUFKVzs7QUFNWEUsUUFO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WEUsUUFORjs7QUFRQWQsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLEtBQXRCO0FBQ0EsR0FWRDtBQVdBLEVBWkQ7O0FBY0FMLFVBQVUsNEdBQVYsRUFBd0gsWUFBTztBQUM5SEksS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFFR1AsVUFBT2UsS0FBUCxDQUFjUCxNQUFkLEVBQXNCLElBQXRCO0FBQ0EsR0FsQkQ7QUFtQkEsRUFwQkQ7O0FBc0JBTCxVQUFVLDREQUFWLEVBQXdFLFlBQU87QUFDOUVJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxPQUFRLENBQUUsVUFBRixFQUFjLFNBQWQsQ0FBUixFQUFtQyxTQUFTSSxJQUFULEdBQWdCLENBQUcsQ0FBdEQsQ0FBUDtBQUNBLElBSlc7O0FBTVhGLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0QjtBQUNBLEdBVkQ7QUFXQSxFQVpEOztBQWNBLENBN0tEO0FBOEtBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJhbnlrZXlcIixcblx0XHRcdFwicGF0aFwiOiBcImFueWtleS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYW55a2V5LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJhbnlrZXlcIjogXCJhbnlrZXlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuZGVzY3JpYmUoIFwiYW55a2V5XCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoICd0b1N0cmluZycsIE5hTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFueWtleSggXCJ0b1N0cmluZ1wiLCBOYU4gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnIF0sICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCBcImhlbGxvXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnIF0sIDEyMyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFueWtleSggWyBcInRvU3RyaW5nXCIsIFwidmFsdWVPZlwiIF0sIDEyMyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFueWtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicgXSwgWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCBbIDEsIDIsIDMgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCBbIDAsIDEgXSwgeyAwOiAnaGVsbG8nLCAxOiAnd29ybGQnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFsgMCwgMSBdLCB7IDA6IFwiaGVsbG9cIiwgMTogXCJ3b3JsZFwiIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFueWtleSggU3ltYm9sLmZvciggJ3Byb3BlcnR5JyApLCB7IFsgU3ltYm9sLmZvciggJ3Byb3BlcnR5JyApIF06ICd2YWx1ZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFueWtleSggU3ltYm9sLmZvciggXCJwcm9wZXJ0eVwiICksIHsgWyBTeW1ib2wuZm9yKCBcInByb3BlcnR5XCIgKSBdOiBcInZhbHVlXCIgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoICdwcm9wZXJ0eScsIHsgJ3Byb3BlcnR5JzogJ3ZhbHVlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gYW55a2V5KCBcInByb3BlcnR5XCIsIHsgXCJwcm9wZXJ0eVwiOiBcInZhbHVlXCIgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnLCAneWVhaCcgXSwgZmFsc2UgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiwgXCJ5ZWFoXCIgXSwgZmFsc2UgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ2hlbGxvJywgJ3dvcmxkJywgJ3llYWgnIF0sICcnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFueWtleSggWyBcImhlbGxvXCIsIFwid29ybGRcIiwgXCJ5ZWFoXCIgXSwgXCJcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgU3ltYm9sKCAnaGVsbG8nICksIFN5bWJvbCggJ2hpJyApIF0sIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiAxMjMsIFsgU3ltYm9sKCAnaGknICkgXTogMTIzIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBoZWxsbyA9IFN5bWJvbCggXCJoZWxsb1wiICk7XG5cdFx0XHRcdFx0bGV0IGhpID0gU3ltYm9sKCBcImhpXCIgKTtcblx0XHRcdFx0XHRsZXQgb2JqZWN0ID0geyBbIGhlbGxvIF06IDEyMywgWyBoaSBdOiAxMjMgfTtcblxuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFsgaGVsbG8sIGhpIF0sIG9iamVjdCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFueWtleSggWyAndG9TdHJpbmcnLCAndmFsdWVPZicgXSwgZnVuY3Rpb24geWVhaCggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFueWtleSggWyBcInRvU3RyaW5nXCIsIFwidmFsdWVPZlwiIF0sIGZ1bmN0aW9uIHllYWgoICl7IH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
