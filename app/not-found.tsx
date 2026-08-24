import Link from "next/link";

export default function NotFound() {
  return (
    <div className="sec sec--band" style={{ minHeight: "72vh", display: "flex", alignItems: "center" }}>
      <span className="spot" aria-hidden="true" />
      <div className="wrap wrap--narrow" style={{ textAlign: "center" }}>
        <p className="eyebrow eyebrow--onband eyebrow--c">Error · 404</p>
        <h1 className="d1">Page not found.</h1>
        <p className="lead mt-24">The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back on track.</p>
        <div className="btns mt-40" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn--onband">Back to home <span className="arw">→</span></Link>
          <Link href="/solutions" className="btn btn--wire">Explore products</Link>
        </div>
      </div>
    </div>
  );
}
