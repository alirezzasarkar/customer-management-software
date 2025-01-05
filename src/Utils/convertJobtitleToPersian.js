export const convertJobtitleToPersian = (item) => {
  const jobMap = {
    admin: "مدیر مجموعه",
    system_manager: "مدیر سامانه",
    accountant: "حسابدار",
    regular: "کاربر عادی",
  };

  return jobMap[item] || item;
};
