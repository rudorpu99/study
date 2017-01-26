describe("170115 숙제", function() {
  it("max, min, sum 개선(여러개 인자와 배열 모두 대응 가능하도록)", function() {

    function max(arr) {
        //console.log();
        // 본질은 인자를 검색해서 배열로 만드는것

        var num = arguments[0];
        if(typeof arr === 'number') num = arr[0] ;

        var arr = typeof arguments[0] === 'number' ? arguments : arguments[0];
        var MaxNum = arr[0];

        for (var i = 1; i < arguments.length; i++) {
            if (num < arguments[i]) num = arguments[i];
        }
        return num;
    }


    expect( max(1,5,6,3,2,10,4) ).toBe(10);
    expect( max([4,6,3,2,7,11,1]) ).toBe(11);

  });

  it("자판기를 만들어라. 자율. 마음대로, 배운것 총동원해서 최대한 멋지게", function() {



  });

});
