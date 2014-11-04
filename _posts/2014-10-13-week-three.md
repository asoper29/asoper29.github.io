---
layout: post
title:  
image:
---

###October 13, 2014

Week thee of The Iron Yard is over, and it was quite an eventful week. We started the week by delving into Object Oriented Programming and converting all of our previous assignments into OOP. At first I wasn't sure what the difference was, just seemed like a little change of structure. That "little" change in structure was a big deal. OOP allows you to: avoid cluttering the global name space, reuse objects, prevent redundant code, and allows for easier maintenance of code.

After delving a little more into OOP, we began to discuss array methods, primarily the .forEach method. We had previously used for loops, such as this block of code in string calculator:

    for (var j = 1; j <= 10; j++){
      for (var i = 0; i < numLet.length; i++){
        print(numLet[j], numLet[i], j+i);
      }
    };

We then replaced that block of code using .forEach and came up with this:

    numLet.forEach(function(a, i){
      numLet.forEach(function(b, j){
        test(a, b, i + j);
      });
    });

Using forEach was simpler and easier to implement and understand than for loops when dealing with an array.

We spent the remainder of the week continuing to refactor and trying to get a better grasp on OOP while also beginning to learn about build driven development and test driven development. We messed around with Chai and Mocha, both BDD and TDD, and converted all of our testing in our projects. Up until this point we have been using console.log for our testing:

    var test = function (a,b,c) {
      console.log('it should add "' + a + '" to "' + b + '": ',
      add(a, b) === c);
    };

While this helped to test our code, it relied upon the user to notice any errors in the console.log, it wouldn't throw an error. This problem became more prevalent when you had multiple lines of multi-entry console.logs where a small error was much less obvious. I did end up with more test code than before, but was worth it:

    var assert = require('chai').assert;

    describe('fromEnglish()', function(){
      it('should return "0" when given "zero" and "zero"', function() {
        assert.equal(stringCalc().fromEnglish('zero', 'zero'), 0);
      });
      it('should return "0" when given "zero" and "one"', function() {
        assert.equal(stringCalc().fromEnglish('zero', 'one'), 1);
      });
      it('should return "0" when given "zero" and "two"', function() {
        assert.equal(stringCalc().fromEnglish('zero', 'two'), 2);
      });

I still haven't decided if I prefer BDD over TDD and look forward to doing some more testing to figure out the pros and cons of each.

Lessons learned:
1. Mocha and Chai take more time to use, but makes testing so much easier.
2. OOP seems to be more effective than functional-programming.
