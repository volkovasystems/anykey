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

const assert = require( "should/as-function" );

//: @server:
const anykey = require( "./anykey.js" );
//: @end-server

//: @client:
const anykey = require( "./anykey.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "anykey", ( ) => {

	describe( "`anykey( 'toString', NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( "toString", NaN ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf" ], "hello" ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf" ], 123 ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf" ], [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`anykey( [ 0, 1 ], { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ 0, 1 ], { 0: "hello", 1: "world" } ), true );
		} );
	} );

	describe( "`anykey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true );
		} );
	} );

	describe( "`anykey( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( "property", { "property": "value" } ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf', 'yeah' ], false )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf", "yeah" ], false ), true );
		} );
	} );

	describe( "`anykey( [ 'hello', 'world', 'yeah' ], '' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( anykey( [ "hello", "world", "yeah" ], "" ), false );
		} );
	} );

	describe( "`anykey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let hello = Symbol( "hello" );
			let hi = Symbol( "hi" );
			let object = { [ hello ]: 123, [ hi ]: 123 };

			assert.equal( anykey( [ hello, hi ], object ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf" ], function yeah( ){ } ), true );
		} );
	} );

} );
//: @end-server


//: @client:
describe( "anykey", ( ) => {

	describe( "`anykey( 'toString', NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( "toString", NaN ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf" ], "hello" ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf" ], 123 ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf" ], [ 1, 2, 3 ] ), true );
		} );
	} );

	describe( "`anykey( [ 0, 1 ], { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ 0, 1 ], { 0: "hello", 1: "world" } ), true );
		} );
	} );

	describe( "`anykey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true );
		} );
	} );

	describe( "`anykey( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( "property", { "property": "value" } ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf', 'yeah' ], false )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf", "yeah" ], false ), true );
		} );
	} );

	describe( "`anykey( [ 'hello', 'world', 'yeah' ], '' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( anykey( [ "hello", "world", "yeah" ], "" ), false );
		} );
	} );

	describe( "`anykey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let hello = Symbol( "hello" );
			let hi = Symbol( "hi" );
			let object = { [ hello ]: 123, [ hi ]: 123 };

			assert.equal( anykey( [ hello, hi ], object ), true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( anykey( [ "toString", "valueOf" ], function yeah( ){ } ), true );
		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "anykey", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`anykey( 'toString', NaN )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( "toString", NaN );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( [ "toString", "valueOf" ], "hello" );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( [ "toString", "valueOf" ], 123 );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( [ "toString", "valueOf" ], [ 1, 2, 3 ] );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`anykey( [ 0, 1 ], { 0: 'hello', 1: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( [ 0, 1 ], { 0: "hello", 1: "world" } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`anykey( Symbol.for( 'property' ), { [ Symbol.for( 'property' ) ]: 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );
		} );
	} );

	describe( "`anykey( 'property', { 'property': 'value' } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( "property", { "property": "value" } );
				}

			).value;

			assert.equal( result, true );
		} );
	} );



	describe( "`anykey( [ 'toString', 'valueOf', 'yeah' ], false )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( [ "toString", "valueOf", "yeah" ], false );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

	describe( "`anykey( [ 'hello', 'world', 'yeah' ], '' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( [ "hello", "world", "yeah" ], "" );
				}

			).value;

			assert.equal( result, false );
		} );
	} );

	describe( "`anykey( [ Symbol( 'hello' ), Symbol( 'hi' ) ], { [ Symbol( 'hello' ) ]: 123, [ Symbol( 'hi' ) ]: 123 } )`", ( ) => {
		it( "should be equal to true", ( ) => {
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

			assert.equal( result, true );
		} );
	} );

	describe( "`anykey( [ 'toString', 'valueOf' ], function yeah( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return anykey( [ "toString", "valueOf" ], function yeah( ){ } );
				}

			).value;

			assert.equal( result, true );
		} );
	} );

} );
//: @end-bridge
