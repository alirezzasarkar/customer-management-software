// src/utils/numberToPersianWords.js

export const convertNumberToPersianWords = (num) => {
  const units = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
  const teens = [
    "ده",
    "یازده",
    "دوازده",
    "سیزده",
    "چهارده",
    "پانزده",
    "شانزده",
    "هفده",
    "هجده",
    "نوزده",
  ];
  const tens = [
    "",
    "ده",
    "بیست",
    "سی",
    "چهل",
    "پنجاه",
    "شصت",
    "هفتاد",
    "هشتاد",
    "نود",
  ];
  const hundreds = [
    "",
    "یکصد",
    "دویست",
    "سیصد",
    "چهارصد",
    "پانصد",
    "ششصد",
    "هفتصد",
    "هشتصد",
    "نهصد",
  ];
  const thousands = [
    "",
    "یک هزار",
    "دو هزار",
    "سه هزار",
    "چهار هزار",
    "پنج هزار",
    "شش هزار",
    "هفت هزار",
    "هشت هزار",
    "نه هزار",
  ];
  const millions = [
    "",
    "یک میلیون",
    "دو میلیون",
    "سه میلیون",
    "چهار میلیون",
    "پنج میلیون",
    "شش میلیون",
    "هفت میلیون",
    "هشت میلیون",
    "نه میلیون",
  ];
  const billions = [
    "",
    "یک میلیارد",
    "دو میلیارد",
    "سه میلیارد",
    "چهار میلیارد",
    "پنج میلیارد",
    "شش میلیارد",
    "هفت میلیارد",
    "هشت میلیارد",
    "نه میلیارد",
  ];

  if (num === 0) return "صفر";

  let words = "";

  // تبدیل قسمت میلیاردها
  if (Math.floor(num / 1000000000) > 0) {
    words += billions[Math.floor(num / 1000000000)] + " ";
    num %= 1000000000;
  }

  // تبدیل قسمت میلیون‌ها
  if (Math.floor(num / 1000000) > 0) {
    words += millions[Math.floor(num / 1000000)] + " ";
    num %= 1000000;
  }

  // تبدیل قسمت هزاران
  if (Math.floor(num / 1000) > 0) {
    words += thousands[Math.floor(num / 1000)] + " ";
    num %= 1000;
  }

  // تبدیل قسمت صدگان
  if (Math.floor(num / 100) > 0) {
    words += hundreds[Math.floor(num / 100)] + " ";
    num %= 100;
  }

  // تبدیل قسمت دهگان و یکان
  if (num >= 10 && num < 20) {
    words += teens[num - 10] + " ";
  } else {
    if (Math.floor(num / 10) > 0) {
      words += tens[Math.floor(num / 10)] + " ";
      num %= 10;
    }
    if (num > 0) {
      words += units[num] + " ";
    }
  }

  return words.trim();
};
