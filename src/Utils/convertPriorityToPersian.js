export const convertPriorityToPersian = (priority) => {
  const priorityMap = {
    low_priority: "کم",
    mid_priority: "متوسط",
    high_priority: "زیاد",
  };

  return priorityMap[priority] || priority;
};
