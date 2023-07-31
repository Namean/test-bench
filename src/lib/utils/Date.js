const ArticleDate = () => {
  let d = new Date();
};

const integerToDayOfWeek = (input) => {
  if (input === 0) return "sunday";
  if (input === 1) return "monday";
  if (input === 2) return "tuesday";
  if (input === 3) return "wednesday";
  if (input === 4) return "thursdayday";
  if (input === 5) return "friday";
  if (input === 6) return "saturday";
};

const integerToMonth = (input) => {
  if (input === 0) return "january";
  if (input === 1) return "february";
  if (input === 2) return "march";
  if (input === 3) return "april";
  if (input === 4) return "may";
  if (input === 5) return "june";
  if (input === 6) return "july";
  if (input === 7) return "auguest";
  if (input === 8) return "september";
  if (input === 9) return "october";
  if (input === 10) return "november";
  if (input === 11) return "december";
};

export default ArticleDate;
