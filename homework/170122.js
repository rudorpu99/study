var fruits = [{
    "name":"사과",
    "quantity":30,
    "price":500
}, {
    "name":"바나나",
    "quantity":40,
    "price":1500
}, {
    "name":"딸기",
    "quantity":25,
    "price":2000
}, {
    "name":"포도",
    "quantity":55,
    "price":1800
}, {
    "name":"키위",
    "quantity":100,
    "price":4200
}, {
    "name":"수박",
    "quantity":15,
    "price":9800
}, {
    "name":"감",
    "quantity":250,
    "price":2300
}];

//[문1] price가 4000 이상인 과일을 찾자
//[ { name: '키위', quantity: 100, price: 4200 },{ name: '수박', quantity: 15, price: 9800 } ]


var findPrice = fruits.filter(function(arguments){
  return arguments.price >= 4000;
});

console.log(findPrice);



//[문2]price가 4000 이상인 과일 이름을 찾자
//["키위", "수박"]


var filterName = function(data) {
    return data.name;
}
var mapName = findPrice.map(filterName);
console.log(mapName);



//[문3]price가 낮은 순서대로 정렬하자
/*
 [ { name: '사과', quantity: 30, price: 500 },
 { name: '바나나', quantity: 40, price: 1500 },
 { name: '포도', quantity: 55, price: 1800 },
 { name: '딸기', quantity: 25, price: 2000 },
 { name: '감', quantity: 250, price: 2300 },
 { name: '키위', quantity: 100, price: 4200 },
 { name: '수박', quantity: 15, price: 9800 } ]
 */

var sortPrice = fruits.sort(function(a,b){
    return a.price > b.price;
});
console.log(sortPrice);


//[문4]quantity에 '개', price에 '원' 을 붙여라
/*
 [ { name: '사과', quantity: '30개', price: '500원' },
 { name: '바나나', quantity: '40개', price: '1500원' },
 { name: '딸기', quantity: '25개', price: '2000원' },
 { name: '포도', quantity: '55개', price: '1800원' },
 { name: '키위', quantity: '100개', price: '4200원' },
 { name: '수박', quantity: '15개', price: '9800원' },
 { name: '감', quantity: '250개', price: '2300원' } ]
 */

var a = {age : 30};
var b = a;
b.age = 20;
console.log(a.age);


/*
[문5] 오른쪽 테스트를 만족시켜라
힌트: 배열.join('') 하면 배열의 내용을 문자열로 반환한다.
ex:   [1,2,3].join('') === '123';
 */







/*
 expect( createTable(fruits) ).toBe('<table><tr><td>사과</td><td>30</td><td>500</td></tr><tr><td>바나나</td><td>40</td><td>1500</td></tr><tr><td>딸기</td><td>25</td><td>2000</td></tr><tr><td>포도</td><td>55</td><td>1800</td></tr><tr><td>키위</td><td>100</td><td>4200</td></tr><tr><td>수박</td><td>15</td><td>9800</td></tr><tr><td>감</td><td>250</td><td>2300</td></tr></table>')
*/

/*

var tr = function(arguments){
    return "<tr><td>"+arguments.name+"</td><td>"+arguments.quantity+"</td><td>"+""+arguments.price+"</td></tr>";
};

function createTable(data){
    var trMap = data.map(tr);
    return '<table>'+trMap.join('')+'</table>';
}

createTable(fruits);

console.log(createTable(fruits));

*/


/*
 [문6]
 5번 문제의 인자로 들어갔던 fruits 배열의 각 객체에 다른 프로퍼티가 추가되어도 동작하는가?
 그렇지 않다면 동작하게끔 5번을 개선하라
 예를 들면 {name: '사과', quantity: 30, price: 500, color: 'red'} 처럼 color 같은 프로퍼티가 추가된 경우.
 for(var key in obj) 를 사용해야 할 것이다.(다른방법도 물론있지만..) for in 반복문은 스스로 공부해서 적용하라
 배열.push() 도 필요하다면 사용하라. 모르면 공부 ㄱㄱ
*/



function createTable(data){
    var trMap = data.map(function(data){
        var result = '';
        for (var key in data) {
            result += "<td>"+data[key]+"</td>";
        }
        return "<tr>"+result+"</tr>";
    }).join('');
    return '<table>'+trMap+'</table>';
}

console.log(createTable(fruits));


/*
 각 과일들의 수량을 모두 팔았을 때, 목표금액 이상을 번 과일의 과일이름(name)과
 총판매금액(earnedMoney)을 가지는 객체들을 반환하는 sell 함수를 만드시오.
 (sell 함수는 첫번째 인자로 과일(fruits), 두번째 인자로 목표금액(targetMoney)을 인자로 가지는 함수이다.
 **총판매금액 기준으로 내림차순)
 ex) function sell(fruits, targetMoney){ }
*/
/*
 sell(fruits, 100000) === [
 {name:'감', earnedMoney: 575000},
 {name:'키위', earnedMoney: 420000},
 {name:'수박', earnedMoney: 147000}
 ]
*/


function sucpruits(fruits){

    return targetMoney < (fruits[0].quantity * fruits[0].price);
};
function sell(fruits, targetMoney){

    console.log(sucpruits);
    //aaa = fruits[0].name:'';
    //bbb = earnedMoney :'' ;
    //earnedMoney
    //return earnedMoney;
}
sell(fruits,100000);
