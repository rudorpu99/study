describe("161211 숙제", function() {
  it("1. 배열의 숫자를 모두 더하는 sum함수를 만드시오", function() {

    function sum(arr){
      var total = 0;
      for(var i = 0;i<arr.length;i++){
        total += arr[i];
      }
      return total;
    }
    expect( sum([1,2,3,4,5,6,7,8,9,10]) ).toBe(55);
    expect( sum([10,20,77,3,12,8]) ).toBe(130);
  });

  it("2. 배열에서 가장 큰 숫자를 찾는 max함수를 만드시오(기존에 만든 max를 개선)", function() {

    function max(arr){
      var num = arr[0];
      for(var i = 1;i<arr.length;i++){
        if(num<arr[i]) num = arr[i];
      }
      return num;
    }
    expect( max([1,2,4,10,3,7]) ).toBe(10);
    expect( max([2,10,-5,19,-4,20,12]) ).toBe(20);
  });

  it("3. 특정 숫자 이상의 숫자만 합산하는 sumIf 함수를 만드시오", function() {
    function sumIf(arr,targetNum) {
      var total = 0;
      for(var i = 1;i<arr.length;i++){
        if(targetNum<=arr[i]) total+=arr[i];
      }
      return total;
    }
    expect( sumIf([4,5,2,1,5,6,4,7], 6) ).toBe(13);
    expect( sumIf([3,-4,1,9,10,20], 10) ).toBe(30);
  });


  var inventory = [
  	{name: 'apples', quantity: 2},
  	{name: 'bananas', quantity: 0},
  	{name: 'cherries', quantity: 5},
  	{name: 'grapes', quantity: 10},
  	{name: 'strawberries', quantity: 8}
  ];



	it('4-1. 원하는 데이터의 index를 찾는 findIndex 함수', function(){
      function findIndex(arr, func){
        for(var i=0;i<arr.length;i++){
          if(func(arr[i])) return i;
        }
      }

      expect(
        findIndex(inventory, function(fruit) {
            return fruit.name === 'bananas';//실행문이 아니라 선언문이다(이렇게 될거다 라는.)
        })
      ).toBe(1);
      expect(
        findIndex(inventory, function(fruit) {
            return fruit.name === 'cherries';
        })
      ).toBe(2);
      expect(
        findIndex(inventory, function(fruit) {
            return fruit.name === 'strawberries';
        })
      ).toBe(4);
	});

	it('4-2. 반복되는 데이터를 마크업으로 변환하는 template 함수', function() {
      function template(arr,func) {
        var total=func(arr[0]);
        for(var i=1;i<arr.length;i++){
          total += func(arr[i]);
        }
        return total;
      }
		expect(
		  template(inventory, function(fruit) {
			  return '<li>'+fruit.name+'<span>수량 : '+fruit.quantity +'</span></li>';
		  })
		).toBe('<li>apples<span>수량 : 2</span></li><li>bananas<span>수량 : 0</span></li><li>cherries<span>수량 : 5</span></li><li>grapes<span>수량 : 10</span></li><li>strawberries<span>수량 : 8</span></li>');
	});

  it('5. isZero함수를 만드세요', function() {

    function isZero(num) {
      return num===0;
    }
    expect( isZero(0) ).toBe(true);
    expect( isZero(!0) ).toBe(false);
	});

  it('6. isNum함수를 만드세요', function() {
    function isNum(txt) {
      return typeof txt === 'number';
    }

    expect( isNum(0) ).toBe(true);
    expect( isNum('0') ).toBe(false);
	});

  it('7. getRandom함수를 만드세요', function() {
    //function getRandom(num) {
    //  var result = getZeroOrOne();
    //  console.log(Math.random() * 6);


    //}

    function getRandom(num) {
      for(var i=0,result=0;i<num;i++){
         result += getZeroOrOne();
      }
      return result;
    }

    function getZeroOrOne(){
        var random = Math.random();//random는 Math.random 함수를 실행해서 나오는 결과값
        return random >= 0.6 ? 1 : 0;//그 결과값이 0.6보다크거나 같다면 1, 미만이라면 0 리턴
    }
    //getZeroOrOne의 함수는 0 또는 1을 반환합니다.
    expect( getRandom(5) ).toMatch(/[0-4]/);
	});

  it('8. rangeAge 함수를 만드세요', function() {
    function rangeAge(arr,age) {
      for(var i=arr.length-1,n=1;i>0;i--,n++){
        if(age>=i+0) return arr[arr.length-n];
      }
      return arr[arr.length-n];

      if(age>=60) return arr[6];
      if(age>=50) return arr[5];
      if(age>=40) return arr[4];
      if(age>=30) return arr[3];
      if(age>=20) return arr[2];
      if(age>=10) return arr[1];
      if(age<10) return arr[0];


    }
    expect( rangeAge(['아동', '십대', '이십대', '삼십대', '사십대', '오십대', '육십대이상'], 60)).toBe('육십대이상');
    expect( rangeAge(['아동', '십대', '이십대', '삼십대', '사십대', '오십대', '육십대이상'], 0)).toBe('아동');
	});

  var testArray1 = [1,2,3,4,5],
      answer1 = {
          values:[1,2,3,4,5],
          indexs:[0,1,2,3,4],
          array:testArray1
      },
      testArray2 = ["요", "세", "하", "녕", "안"],
      testResult2 = "",
      answer2 = "안녕하세요";

  function iterate(arr,func) {
    var i = arr.length;
    while(i){
      i--;
      func(arr[i],i,arr);
    }
  }

  it('9. 배열을 뒤에서 부터 순회하며 값, 인덱스, 해당배열 갑들을 받는다.', function(){
    iterate(testArray1, function(value, index, array){
        expect(value).toBe(answer1.values[index]);
        expect(index).toBe(answer1.indexs[index]);
        expect(array).toBe(answer1.array);
    });
  });

  it('9. 배열의 값을 뒤에서부터 순회하며 더한다', function(){
    iterate(testArray2, function(value){
        testResult2 += value;
    });
    expect(testResult2).toBe(answer2);
  });


  it('10. 이중배열을 받아서 순차적으로 출력하는 quiz 함수를 만드세요', function() {

    var answer = [
      ["hacosa", "하코사"],
      ["javascript", "자바스크립트"],
      ["study", "스터디"]
    ];

    quiz(answer, function (eng, kor, index) {
        console.log( "배열의 첫번째: " + eng + ", 배열의 두번째: " + kor + ", 배열의 인덱스:" + index );
    });

    function quiz(arr,func) {
      for(var i = 0;i<arr.length;i++){
        func(arr[i][0],arr[i][1],i);
      }
    }
    //결과값
    //배열의 첫번째: hacosa, 배열의 두번째: 하코사, 배열의 인덱스:0
    //배열의 첫번째: javascript, 배열의 두번째: 자바스크립트, 배열의 인덱스:1
    //배열의 첫번째: study, 배열의 두번째: 스터디, 배열의 인덱스:2

    expect().toBe();

	});

  it('11. rangeAge 함수를 while문으로 만드세요', function() {
    function rangeAge(arr,age) {
      var i=arr.length-1,
          n=1;
      while(i>0){
        if(age>=i+0) return arr[arr.length-n];
        i--;
        n++;
      }
      return arr[arr.length-n];

      //if(age>=60) return arr[6];
      //if(age>=50) return arr[5];
      //if(age>=40) return arr[4];
      //if(age>=30) return arr[3];
      //if(age>=20) return arr[2];
      //if(age>=10) return arr[1];
      //if(age<10) return arr[0];


    }
    expect( rangeAge(['아동', '십대', '이십대', '삼십대', '사십대', '오십대', '육십대이상'], 60)).toBe('육십대이상');
    expect( rangeAge(['아동', '십대', '이십대', '삼십대', '사십대', '오십대', '육십대이상'], 0)).toBe('아동');
	});

});
