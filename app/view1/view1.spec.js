'use strict';

// describe('myApp.view1 module', function() {

//   beforeEach(module('myApp.view1'));

//   describe('view1 controller', function(){

//     it('should ....', inject(function($controller) {
//       //spec body
//       var view1Ctrl = $controller('View1Ctrl');
//       expect(view1Ctrl).toBeDefined();
//     }));

//   });
// });

// console.log("test1");

describe('Test ',() => {

    it('Blog must be displayed',()=>{
        expect(5+5).toBe(10);
    });

    beforeAll(() => {
        console.log('beforeAll()')
    });

    it('Blog must be displayed',()=>{
        expect(5+5).toBe(11);
    });
    
    // it();
    // it();
    // it();
    // it();
});