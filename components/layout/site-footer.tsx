import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="foot">
      <span className="spot" aria-hidden="true" />
      <div className="wrap">
        <div className="foot__grid">
          <div>
            <Logo onBand />
            <p className="foot__tag">
              Importers and distributors of animal-health products in Pakistan.
              We don&apos;t manufacture — we select, import, store and supply.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/research">Brands</Link></li>
              <li><Link href="/quality">Quality &amp; why us</Link></li>
              <li><Link href="/insights">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4>Who we serve</h4>
            <ul>
              <li><Link href="/industries">Broilers</Link></li>
              <li><Link href="/industries">Layers</Link></li>
              <li><Link href="/industries">Breeders</Link></li>
              <li><Link href="/industries">Vets &amp; feed mills</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <address>
              Rathore Heights, Plot No. 14<br />Johar Boulevard, DHA Phase 5<br />Islamabad, Pakistan<br /><br />
              <a href="mailto:chbilalpharmaceuticals@gmail.com">chbilalpharmaceuticals@gmail.com</a><br />
              <a href="tel:+923368883198">+92 336 8883 198</a><br />
              <a href="tel:+923028699198">+92 302 8699 198</a> · WhatsApp
            </address>
          </div>
        </div>
        <div className="foot__bar">
          <span>© 2026 Bilal Pharmaceuticals · CEO Muhammad Imran</span>
          <span>Veterinary use only · Follow label directions</span>
        </div>
      </div>
    </footer>
  );
}
