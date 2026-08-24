"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Motion engine — ported from the design deck's vanilla script to React.
// A global effect wires scroll / pointer listeners once; a per-route effect
// re-scans the DOM after each navigation (Next swaps <main>, so reveals,
// counters, parallax and the cold-chain rail must be re-bound).

const EASE = "cubic-bezier(.19,1,.22,1)";

function prefersReduced() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function runCount(el: HTMLElement, rm: boolean) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";
  const raw = el.dataset.count || "0";
  const target = parseFloat(raw);
  const dec = (raw.split(".")[1] || "").length;
  if (rm) { el.textContent = target.toFixed(dec); return; }
  const dur = 1500;
  let t0: number | null = null;
  const step = (ts: number) => {
    if (t0 === null) t0 = ts;
    const p = Math.min((ts - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(dec);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target.toFixed(dec);
  };
  requestAnimationFrame(step);
}

export function Motion() {
  const pathname = usePathname();

  // ── Global listeners (once) ──────────────────────────────────────────────
  useEffect(() => {
    const rm = prefersReduced();
    let ticking = false;

    const docTop = (el: HTMLElement) => {
      let t = 0;
      let n: HTMLElement | null = el;
      while (n) { t += n.offsetTop; n = n.offsetParent as HTMLElement | null; }
      return t;
    };

    const frame = () => {
      ticking = false;
      const vh = window.innerHeight;

      if (!rm) {
        document.querySelectorAll<HTMLElement>(".parx").forEach((el) => {
          if (el.offsetParent === null) return;
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          const speed = parseFloat(el.dataset.speed || "0.08");
          const mid = r.top + r.height / 2 - vh / 2;
          el.style.transform = `translate3d(0,${(-mid * speed).toFixed(2)}px,0)`;
        });
      }

      const head = document.getElementById("head");
      if (head) head.classList.toggle("stuck", window.scrollY > 12);
      const prog = document.getElementById("prog");
      if (prog) {
        const h = document.documentElement.scrollHeight - vh;
        prog.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
      }

      // Cold-chain rail
      const railSec = document.getElementById("coldrail");
      const railFill = document.getElementById("railFill");
      const railMark = document.getElementById("railMark");
      const railRead = document.getElementById("railRead");
      const railNodes = document.querySelectorAll<HTMLElement>(".rail__node");
      if (railSec && railFill && railSec.offsetParent !== null) {
        const r = railSec.getBoundingClientRect();
        let p = (vh * 0.82 - r.top) / (r.height * 0.72);
        p = Math.max(0, Math.min(1, p));
        const pct = p * 100;
        railFill.style.width = pct + "%";
        if (railMark) railMark.style.left = pct + "%";
        if (railRead) {
          let temp = 4.2 + Math.sin(p * Math.PI * 2.1) * 1.5 + Math.sin(p * 9.3) * 0.35;
          temp = Math.max(2.2, Math.min(7.6, temp));
          railRead.textContent = temp.toFixed(1);
        }
        railNodes.forEach((n, i) => n.classList.toggle("lit", p >= i * 0.3 + 0.08));
      }
    };

    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(frame); }
    };
    const onResize = () => onScroll();

    // Spotlight on dark bands
    const onMove = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.(".sec--band, .rail-sec, .foot") as HTMLElement | null;
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      t.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    if (!rm && window.matchMedia("(hover: hover)").matches) {
      document.addEventListener("mousemove", onMove, { passive: true });
    }
    // expose docTop for the per-route effect via a tiny global
    (window as unknown as { __mFrame?: () => void }).__mFrame = frame;
    void docTop;
    frame();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  // ── Per-route scan ───────────────────────────────────────────────────────
  useEffect(() => {
    const rm = prefersReduced();

    // Split headlines into animatable lines
    document.querySelectorAll<HTMLElement>("[data-lines]").forEach((el) => {
      if (el.dataset.split) return;
      el.dataset.split = "1";
      const parts = el.innerHTML.split(/<br\s*\/?>/i);
      el.innerHTML = parts.map((p) => `<span class="ln"><i>${p}</i></span>`).join("");
      el.classList.add("lines");
    });

    // Stagger grid children
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((g) => {
      const base = parseInt(g.dataset.stagger || "70", 10) || 70;
      const kids = g.querySelectorAll<HTMLElement>(":scope > [data-anim]");
      kids.forEach((k, i) => { k.style.transitionDelay = Math.min(i, 7) * base + "ms"; });
    });

    // Reveal observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("in");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach((c) => runCount(c, rm));
          if (el.hasAttribute("data-count")) runCount(el, rm);
          window.setTimeout(() => el.classList.add("done"), 2200);
          io.unobserve(el);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
    );
    document
      .querySelectorAll<HTMLElement>("[data-anim]:not(.in), .lines:not(.in), .wsplit:not(.in), .steps:not(.in), .proof__c:not(.in)")
      .forEach((el) => io.observe(el));

    // Card tilt (desktop)
    const tiltCleanups: Array<() => void> = [];
    if (!rm && window.matchMedia("(hover: hover) and (min-width: 1080px)").matches) {
      document.querySelectorAll<HTMLElement>(".tilt").forEach((c) => {
        const move = (e: MouseEvent) => {
          const r = c.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          c.style.transform = `perspective(900px) rotateX(${(-y * 3.2).toFixed(2)}deg) rotateY(${(x * 3.2).toFixed(2)}deg) translateY(-5px)`;
        };
        const leave = () => { c.style.transform = ""; };
        c.addEventListener("mousemove", move);
        c.addEventListener("mouseleave", leave);
        tiltCleanups.push(() => {
          c.removeEventListener("mousemove", move);
          c.removeEventListener("mouseleave", leave);
        });
      });
    }

    // Reveal anything already on-screen immediately, then sync the frame
    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>("[data-anim], .lines, .wsplit, .proof__c").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
          el.classList.add("in");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach((c) => runCount(c, rm));
          if (el.hasAttribute("data-count")) runCount(el, rm);
        }
      });
      document.querySelectorAll<HTMLElement>(".steps").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add("in");
      });
      (window as unknown as { __mFrame?: () => void }).__mFrame?.();
    });

    return () => {
      io.disconnect();
      tiltCleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  void EASE;
  return null;
}
