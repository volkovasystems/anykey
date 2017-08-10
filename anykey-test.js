
const assert = require( "assert" );
const anykey = require( "./anykey.js" );

assert.equal( anykey( "toString", NaN ), true, "should be equal to true" );

assert.equal( anykey( "toString", 123 ), true, "should be equal to true" );

assert.equal( anykey( [ "toString", "valueOf" ], 123 ), true, "should be equal to true" );

assert.equal( anykey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true, "should be equal to true" );

assert.equal( anykey( "property", { "property": "value" } ), true, "should be equal to true" );


assert.equal( anykey( [ "toString", "valueOf", "yeah" ], false ), true, "should be equal to true" );

assert.equal( anykey( [ "hello", "world", "yeah" ], "" ), false, "should be equal to false" );

var hello = Symbol( "hello" );
var hi = Symbol( "hi" );
var object = { [ hello ]: 123, [ hi ]: 123 };
assert.equal( anykey( [ hello, hi ], object ), true, "should be equal to true" );

console.log( "ok" );
