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
  googleReviewUrl: "#",
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Verified Customer",
    date: "2025",
    rating: 5,
    text: "Excellent work from The Yorkshire Timber Decking Company. Professional, reliable and the finished deck looks absolutely stunning. Highly recommended for anyone in Sheffield looking for quality timber work.",
  },
];
