class Calculator{
    add(a,b){
        return a+b
    }
    minus(a,b){
        return a-b
    }
    division(a,b){
        return a/b
    }
    multiplication(a,b){
        return a*b
    }
}

describe('calculate',function(){
    var calculate= new Calculator(); //access to class Calculator
    it('should be able to add 2 digits',function(){
        expect(calculate.add(1,2)).toBe(3)
    })
    it('should be able to minus 2 digits',function(){
        expect(calculate.minus(1,2)).toBe(-1)
    })
    it('should be able to add 2 digits',function(){
        expect(calculate.division(1,2)).toBe(0.5)
    })
    it('should be able to add 2 digits',function(){
        expect(calculate.division(1,0)).toBeNaN
    })
    it('should be able to add 2 digits',function(){
        expect(calculate.multiplication(1,2)).not.toBeNaN
    })
})

describe('comparision',function(){
    var object;
    it('should be able to decide if object is defined',function(){
    expect(object).toBeDefined
    })
    // it('should be able to decide if object2 is defined',function(){
    //     expect(object2).not.toBeDefined
    //     })
    it('should be able to decide if object is defined',function(){
        expect(object).not.toBeUndefined
         })
    // it('should be able to decide if object is defined',function(){
    //     expect(object5).toBeUndefined
    // })
})

describe('checking Toequal and toBe',function(){
    it('ToEqual',function(){
        var a=[1,2,3]
        var b=[1,2,3]
        expect(a).toEqual(b)
        expect('hello').toContain('h')})
    // it('ToEqual',function(){
    //     var a=[1,2,3]
    //     var b=[1,2,3]
    //     expect(a).toBe(b)
    // }) In this case test fails, because to be means==
})
describe('boolean matcher', function(){
    it("truth",function(){
        expect(true).toBeTruthy();
        expect({}).toBeTruthy();
    })
})
 
//SPY
describe('asynch',function(){
    it('can wait for a time',function(){
        var foo=0;
        runs(function(){
            setTimeout(function(){foo=1;},250)});
        runs(function(){expect(foo).toEqual(0);});
        waits(1000);
        runs(function(){expect(foo).toEqual(1);});
        
    })
})