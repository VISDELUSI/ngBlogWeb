'use strict'
console.log('TEST!');
describe('Test ',() => {

    it('Blog must be displayed displayed',()=>{
        expect(5+5).toBe(10);
    });

    beforeAll(() => {
        console.log('beforeAll() in blogpost ')
    });

    it('Blog must be displayed',()=>{
        expect(5+5).toBe(11);
    });
    
    // it();
    // it();
    // it();
    // it();
});