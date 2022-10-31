import toDate from "../src/utils/toDate";
import get from "../src/utils/get";

function isLeapYear(d) {
  const date = toDate(d);
  const { $Y } = get(date);

  // 4 年一润；100 年不润；400 年一润。
  // 地球公转的回归年为 365 日 5时 48分 46秒；而我们通常定义一年为 365 天，所以每隔 4 年多出 0.9688 日，因此每四年一润，闰年 366 日。但是四年增加一日，又会比四个回归年多 0.0312 日 
  // (1 - 0.9688) ，400年后将多3.12日,故在400年中少设3个闰年,也就是在400年中只设97个闰年，这样公历年的平均长度与回归年就相近似了。
  // 由此规定：年份是整百数的必须是400的倍数才是闰年，例如1900年、2100年就不是闰年。
  return ($Y % 4 === 0 && $Y % 100 !== 0) || $Y % 400 === 0;

  //除此之外，也可以使用更简单的方式，借助原生 Date 对象的能力。
  // date.setMonth(1);
  // return daysInMonth(date) >= 29  
}

export default isLeapYear;
