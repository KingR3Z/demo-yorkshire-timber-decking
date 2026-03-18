"use client";

import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import { client } from "@/config/client";
import { useReveal } from "@/hooks/useReveal";
import { reviews, reviewsSummary } from "@/data/reviews";

function StarRating({ count = 5, size = 18 }: { count?: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="var(--gold)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function ReviewsPage() {
  const statsRef = useReveal(".stat-card");
  const gridRef = useReveal(".review-card");
  const ctaRef = useReveal(".cta-reveal");

  return (
    <InnerPageLayout>
      <style>{`
        .reviews-hero-item {
          opacity: 0;
          transform: translateY(20px);
          animation: reviewsFadeUp 0.8s ease forwards;
        }
        .reviews-hero-item:nth-child(1) { animation-delay: 0.1s; }
        .reviews-hero-item:nth-child(2) { animation-delay: 0.25s; }
        .reviews-hero-item:nth-child(3) { animation-delay: 0.4s; }
        .reviews-hero-item:nth-child(4) { animation-delay: 0.55s; }
        .reviews-hero-item:nth-child(5) { animation-delay: 0.7s; }
        @keyframes reviewsFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .reviews-masonry {
          column-count: 3;
          column-gap: 24px;
        }
        @media (max-width: 1024px) {
          .reviews-masonry { column-count: 2; }
        }
        @media (max-width: 640px) {
          .reviews-masonry { column-count: 1; }
        }
        .reviews-stats {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 640px) {
          .reviews-stats {
            grid-template-columns: 1fr !important;
          }
          .reviews-stats .stat-card {
            border-right: none !important;
            border-bottom: 1px solid #e8e8e8;
            padding: 20px 0 !important;
          }
          .reviews-stats .stat-card:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>

      {/* ── Hero Section ── */}
      <section
        style={{
          marginTop: "clamp(60px, 14vh, 100px)",
          background: "linear-gradient(135deg, #6B7D6E 0%, #7A8B7F 50%, #8A9A84 100%)",
          minHeight: "44vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(60px, 8vw, 100px) 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <p
            className="reviews-hero-item"
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Customer Reviews
          </p>
          <h1
            className="reviews-hero-item font-display"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#FFFFFF",
              lineHeight: 1.2,
              margin: "0 0 32px",
            }}
          >
            What Our Customers Say
          </h1>
          <p
            className="reviews-hero-item"
            style={{
              fontSize: "clamp(48px, 6vw, 80px)",
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "var(--gold)",
              lineHeight: 1,
              margin: "0 0 12px",
            }}
          >
            {reviewsSummary.averageRating.toFixed(1)}
          </p>
          <div
            className="reviews-hero-item"
            style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
          >
            <StarRating count={5} size={28} />
          </div>
          <p
            className="reviews-hero-item"
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <GoogleIcon size={18} />
            {reviewsSummary.totalReviews} Five-Star Reviews on Google
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section ref={statsRef} style={{ background: "#FFFFFF" }}>
        <div
          className="container-custom reviews-stats"
          style={{
            display: "grid",
            padding: "clamp(32px, 4vw, 56px) 0",
          }}
        >
          {[
            { value: reviewsSummary.totalReviews.toString(), label: "Reviews" },
            { value: reviewsSummary.averageRating.toFixed(1), label: "Average Rating" },
            { value: `${reviewsSummary.fiveStarPercentage}%`, label: "Five-Star" },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-card reveal-item"
              style={{
                textAlign: "center",
                padding: "16px 0",
                borderRight: i < 2 ? "1px solid #e8e8e8" : "none",
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(32px, 3vw, 48px)",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  margin: "0 0 4px",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--warm-grey)",
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="container-custom">
          <div style={{ height: "1px", background: "#e8e8e8" }} />
        </div>
      </section>

      {/* ── Reviews Masonry Grid ── */}
      <section
        ref={gridRef}
        style={{ background: "var(--cream)" }}
        className="section-padding"
      >
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 4vw, 64px)" }}>
            <p
              className="review-card reveal-item"
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--sage-dark)",
                marginBottom: "12px",
              }}
            >
              In Their Words
            </p>
            <h2
              className="review-card reveal-item font-display"
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "var(--charcoal)",
                margin: 0,
              }}
            >
              Every Review, Every Star
            </h2>
          </div>

          <div className="reviews-masonry">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="review-card reveal-item"
                style={{
                  breakInside: "avoid",
                  marginBottom: "24px",
                  display: "inline-block",
                  width: "100%",
                  background: "#FFFFFF",
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  padding: "clamp(24px, 2vw, 32px)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Google icon */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "12px", opacity: 0.4 }}>
                  <GoogleIcon size={16} />
                </div>

                {/* Stars */}
                <div style={{ marginBottom: "16px" }}>
                  <StarRating count={review.rating} size={16} />
                </div>

                {/* Review text */}
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--charcoal)",
                    margin: "0 0 20px",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer info */}
                <div
                  style={{
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* Avatar circle with initial */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "var(--sage)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--charcoal)",
                        margin: "0 0 2px",
                      }}
                    >
                      {review.name}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "var(--warm-grey)",
                        margin: 0,
                      }}
                    >
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        ref={ctaRef}
        style={{
          background: "linear-gradient(135deg, #6B7D6E 0%, #7A8B7F 50%, #8A9A84 100%)",
          padding: "clamp(60px, 6vw, 100px) 24px",
          textAlign: "center",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "700px" }}>
          <h2
            className="cta-reveal reveal-item font-display"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#FFFFFF",
              lineHeight: 1.3,
              margin: "0 0 16px",
            }}
          >
            Ready to Transform Your Garden?
          </h2>
          <p
            className="cta-reveal reveal-item"
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "500px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Join our growing list of happy customers across {client.basedIn}. Get in touch for a free, no-obligation estimate.
          </p>
          <div
            className="cta-reveal reveal-item"
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "#D9DDD6",
                color: "#2C2C2C",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c8cec3")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#D9DDD6")}
            >
              Get a Free Quote →
            </Link>
            <a
              href={reviewsSummary.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                background: "transparent",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
            >
              <GoogleIcon size={18} />
              Leave Us a Review
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
