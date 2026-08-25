/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { photo, type PhotoKey } from "@/lib/images";
import { Ph } from "@/components/site/ph";
import { Chips } from "@/components/site/chips";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights & news",
  description:
    "Practical notes for the people we supply — handling, storage, seasonal risks and what's new in the Bilal Pharmaceuticals range.",
  alternates: { canonical: "/insights" },
};

const ART_PHOTOS: PhotoKey[] = ["farmHouse", "eggsFarm", "henStanding", "brooderHouse", "labBench", "chicks"];

export default function InsightsPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap">
          <div className="split" style={{ alignItems: "end" }}>
            <div data-anim="rise">
              <p className="eyebrow">Insights &amp; news</p>
              <h1 className="d1">Notes from <span className="hl">the field.</span></h1>
            </div>
            <div data-anim="rise">
              <p className="lead">Practical writing for the people we supply — handling, storage, seasonal risks and what&apos;s new in our range.</p>
              <p className="note">Articles are original demo content and not a substitute for veterinary advice.</p>
            </div>
          </div>
        </div>
      </div>

      {featured && (
        <div className="sec">
          <div className="wrap">
            <div className="split split--mid">
              <div data-anim="rise">
                <Ph className="r-43" src={photo("freeRange", 1000, 78)} alt={featured.title} cap={featured.title} />
              </div>
              <div data-anim="rise">
                <p className="eyebrow">Featured · {featured.category}</p>
                <h2 className="d2">{featured.title}</h2>
                <p className="lead mt-24">{featured.excerpt}</p>
                <p className="note">{featured.readTime}</p>
                <p className="mt-32 mb-0"><Link href={`/insights/${featured.slug}`} className="txtlink">Read the article <span className="arw">→</span></Link></p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="sec sec--tint">
        <div className="wrap">
          <div style={{ marginBottom: 40 }}>
            <Chips items={["All", "Vaccination", "Gut Health", "Biosecurity", "Company news"]} />
          </div>
          <div className="grid g3" data-stagger="80">
            {rest.map((post, i) => (
              <Link href={`/insights/${post.slug}`} className="artcard" data-anim="rise" key={post.id} style={{ color: "inherit" }}>
                <div className="artcard__img">
                  <Ph anim={false} className="ph--flat" src={photo(ART_PHOTOS[i % ART_PHOTOS.length], 720, 76)} alt={post.title} />
                </div>
                <div className="artcard__b">
                  <div className="artcard__meta">{post.category} · {post.readTime.replace(" read", "")}</div>
                  <span className="d4">{post.title}</span>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap wrap--narrow">
          <div className="card" data-anim="rise" style={{ padding: 44 }}>
            <div className="split split--mid" style={{ gap: 40 }}>
              <div>
                <span className="card__k">Stay informed</span>
                <span className="d3">Get new articles by email</span>
                <p>Occasional practical notes for the operations we supply. No product spam.</p>
              </div>
              <div>
                <div className="field" style={{ marginBottom: 14 }}>
                  <label htmlFor="sub-email">Email address</label>
                  <input id="sub-email" type="email" placeholder="you@company.com" />
                </div>
                <button className="btn" type="button">Subscribe <span className="arw">→</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
