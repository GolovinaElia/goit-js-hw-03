// Напиши функцию countProps(obj), считающую кол - во свойств в объекте.
// Функция возвращает число - количество свойств.

const countProps = function (obj) {
    
    for (let i = 0; i < obj.length; i += 1) {
        total += Number(countProps[i]);
    }
};


console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3