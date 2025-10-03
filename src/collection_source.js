const Excel = require('@zurmokeeper/exceljs');
const workbook = new Excel.Workbook();
workbook.xlsx.readFile('tableissue.xlsx');


//帮我初始化列表, 然后使用列表的some方法
const collection = [1, 2, 3, 4, 5];
const hasEvenNumber = collection.some(num => num % 2 === 0);
collection.forEach(num => console.log(num));
console.log(hasEvenNumber); // 输出: true


