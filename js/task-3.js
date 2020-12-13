// Напиши функцию findBestEmployee(employees),
//     которая принимает объект сотрудников
// и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта
// в формате "имя": "кол-во задач".

// { empname = employees.name[]; empvalue = employees.value[]; }

// let empname;
// let empvalue;
// // const findBestEmployee = function (employees) {
//     for (let i = 0; i < employees.length - 1; i++) {
//         for (let j = i + 1; j < employees.length; j++) {
//           if (employees.value[i] > employees.value[j]) {
//             empname = employees.name[i];
//             empvalue = employees.value[i];
//             }
//         }
//     }
//     return employees.name;
// }
// const findBestEmployee = function (employees) {
// // let empname = '';
    // for (let i = 0; i < employees.length - 1; i++) {
    //     for (let j = i + 1; j < employees.length; j++) {
    //       if (employees.value[i] > employees.value[j]) {
    //         empname = employees.key[i];

//             }
//         }
//     }
//     return empname;
// };
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux