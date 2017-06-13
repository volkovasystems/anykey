
const assert = require( "assert" );
const anykey = require( "./anykey.js" );

assert.equal( anykey( "toString", NaN ), true, "should be true" );

assert.equal( anykey( "toString", 123 ), true, "should be true" );

assert.equal( anykey( [ "toString", "valueOf" ], 123 ), true, "should be true" );

assert.equal( anykey( Symbol.for( "property" ), { [ Symbol.for( "property" ) ]: "value" } ), true, "should be true" );

assert.equal( anykey( "property", { "property": "value" } ), true, "should be true" );

assert.equal( anykey( [ "toString", "valueOf", "yeah" ], false ), true, "should be true" );

assert.equal( anykey( [ "hello", "world", "yeah" ], "" ), false, "should be false" );

console.log( "ok" );
