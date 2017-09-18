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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImFueWtleSIsIk5hTiIsInZhbHVlIiwiZXF1YWwiLCJ5ZWFoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0ksS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLE9BQVEsVUFBUixFQUFvQkMsR0FBcEIsQ0FBUDtBQUNBLElBSlc7O0FBTVhDLFFBTkY7O0FBUUFkLFVBQU9lLEtBQVAsQ0FBY1AsTUFBZCxFQUFzQixJQUF0QjtBQUNBLEdBVkQ7QUFXQSxFQVpEOztBQWNBTCxVQUFVLGdEQUFWLEVBQTRELFlBQU87QUFDbEVJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxPQUFRLENBQUUsVUFBRixFQUFjLFNBQWQsQ0FBUixFQUFtQyxPQUFuQyxDQUFQO0FBQ0EsSUFKVzs7QUFNWEUsUUFO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UUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6Qjs7QUFFWixlQUFXO0FBQ1YsV0FBT0MsT0FBUSxDQUFFLFVBQUYsRUFBYyxTQUFkLENBQVIsRUFBbUMsU0FBU0ksSUFBVCxHQUFnQixDQUFHLENBQXRELENBQVA7QUFDQSxJQUpXOztBQU1YRixRQU5GOztBQVFBZCxVQUFPZSxLQUFQLENBQWNQLE1BQWQsRUFBc0IsSUFBdEI7QUFDQSxHQVZEO0FBV0EsRUFaRDs7QUFjQSxDQTdKRDtBQThKQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYW55a2V5XCIsXG5cdFx0XHRcInBhdGhcIjogXCJhbnlrZXkvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2FueWtleS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwiYW55a2V5XCI6IFwiYW55a2V5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmRlc2NyaWJlKCBcImFueWtleVwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCAndG9TdHJpbmcnLCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFwidG9TdHJpbmdcIiwgTmFOICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCBbICd0b1N0cmluZycsICd2YWx1ZU9mJyBdLCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gYW55a2V5KCBbIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCIgXSwgXCJoZWxsb1wiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCBbICd0b1N0cmluZycsICd2YWx1ZU9mJyBdLCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCAxMjMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnIF0sIFsgMSwgMiwgMyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gYW55a2V5KCBbIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCIgXSwgWyAxLCAyLCAzIF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSwgeyBbIFN5bWJvbC5mb3IoICdwcm9wZXJ0eScgKSBdOiAndmFsdWUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFN5bWJvbC5mb3IoIFwicHJvcGVydHlcIiApLCB7IFsgU3ltYm9sLmZvciggXCJwcm9wZXJ0eVwiICkgXTogXCJ2YWx1ZVwiIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCAncHJvcGVydHknLCB7ICdwcm9wZXJ0eSc6ICd2YWx1ZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGFueWtleSggXCJwcm9wZXJ0eVwiLCB7IFwicHJvcGVydHlcIjogXCJ2YWx1ZVwiIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCBbICd0b1N0cmluZycsICd2YWx1ZU9mJywgJ3llYWgnIF0sIGZhbHNlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gYW55a2V5KCBbIFwidG9TdHJpbmdcIiwgXCJ2YWx1ZU9mXCIsIFwieWVhaFwiIF0sIGZhbHNlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCBbICdoZWxsbycsICd3b3JsZCcsICd5ZWFoJyBdLCAnJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFsgXCJoZWxsb1wiLCBcIndvcmxkXCIsIFwieWVhaFwiIF0sIFwiXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYW55a2V5KCBbIFN5bWJvbCggJ2hlbGxvJyApLCBTeW1ib2woICdoaScgKSBdLCB7IFsgU3ltYm9sKCAnaGVsbG8nICkgXTogMTIzLCBbIFN5bWJvbCggJ2hpJyApIF06IDEyMyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgaGVsbG8gPSBTeW1ib2woIFwiaGVsbG9cIiApO1xuXHRcdFx0XHRcdGxldCBoaSA9IFN5bWJvbCggXCJoaVwiICk7XG5cdFx0XHRcdFx0bGV0IG9iamVjdCA9IHsgWyBoZWxsbyBdOiAxMjMsIFsgaGkgXTogMTIzIH07XG5cblx0XHRcdFx0XHRyZXR1cm4gYW55a2V5KCBbIGhlbGxvLCBoaSBdLCBvYmplY3QgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhbnlrZXkoIFsgJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnIF0sIGZ1bmN0aW9uIHllYWgoICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBhbnlrZXkoIFsgXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIiBdLCBmdW5jdGlvbiB5ZWFoKCApeyB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
