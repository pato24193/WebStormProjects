let dayOfWeek = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
// let day = new Date('2023-04-25');
let day = new Date();
console.log('Hôm nay là ' + dayOfWeek[day.getDay()]);
