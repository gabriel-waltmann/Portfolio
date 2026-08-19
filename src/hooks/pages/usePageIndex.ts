import portfolio from "@/data/portfolio.json";
import { getTotalWorkTime } from "@/utils/math/get-work-time";

export function usePageIndex() {
  const totalWorkTime = getTotalWorkTime(portfolio.profile.careerStartYear);

  return {
    totalWorkTime,
  };
}
