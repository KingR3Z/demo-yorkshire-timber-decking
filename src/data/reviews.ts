import { client } from "@/config/client";

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: 5;
  text: string;
}

export const reviewsSummary = {
  totalReviews: 1,
  averageRating: 5.0,
  fiveStarPercentage: 100,
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJN1t_tDEuekgRhVJ5p6EuZe0",
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Paul",
    date: "2021",
    rating: 5,
    text: "Positive: Responsiveness, Punctuality, Quality, Professionalism.",
  },
];
