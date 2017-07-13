/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "anykey",
			"path": "anykey/anykey.js",
			"file": "anykey.js",
			"module": "anykey",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/anykey.git",
			"test": "anykey-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Checks if all keys exists on the entity.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"kein": "kein",
			"portel": "portel",
			"raze": "raze"
		}
	@end-include
*/

const doubt = require( "doubt" );
const kein = require( "kein" );
const portel = require( "portel" );
const raze = require( "raze" );

const anykey = function anykey( key, entity ){
	/*;
		@meta-configuration:
			{
				"key:required": [
					"number",
					"string",
					"symbol",
					[ "number", "string", "symbol" ]
				],
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

	if( !doubt( key, AS_ARRAY ) ){
		key = [ key ];
	}

	if( arguments.length == 2 ){
		entity = portel( entity );

	}else{
		entity = zelf( this );
	}

	try{
		return raze( key ).some( ( key ) => kein( key, entity ) );

	}catch( error ){
		throw new Error( `cannot check any keys, ${ error.stack }` );
	}
};

module.exports = anykey;
