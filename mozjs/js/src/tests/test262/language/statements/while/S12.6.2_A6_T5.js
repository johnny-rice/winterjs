// |reftest| error:SyntaxError
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Expression in "while" IterationStatement is bracketed with braces
es5id: 12.6.2_A6_T5
description: Checking if execution of "while '' break" fails
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
while '' break;
//
//////////////////////////////////////////////////////////////////////////////