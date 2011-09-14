// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionDeclaration within a "for-in" Statement is not allowed
 *
 * @section 12.6.4
 * @path 12_Statement/12.6_Iteration_Statements/12.6.4_The_for_in_Statement/S12.6.4_A13_T2.js
 * @description Declaring function within a "for-in" Statement that is within a function call
 * @negative
 */

(function(){

for(x in this){
    function __func(){};
};

})();
