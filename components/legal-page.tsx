export interface LegalSection {
  heading: string;
  body?: string[];
  list?: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap wrap--narrow">
          <div data-anim="rise">
            <p className="eyebrow">Legal</p>
            <h1 className="d1">{title}</h1>
            <p className="lead mt-24">{intro}</p>
            <p className="note mt-16">Last updated · {updated}</p>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap wrap--narrow">
          {sections.map((s, i) => (
            <div data-anim="rise" key={s.heading} style={{ marginBottom: i === sections.length - 1 ? 0 : 40 }}>
              <h2 className="d3">{s.heading}</h2>
              {s.body && s.body.map((p, j) => <p key={j} className="mt-16">{p}</p>)}
              {s.list && (
                <div className="kv kv--bare mt-16">
                  {s.list.map((item) => (
                    <div className="kv__row" key={item}><span className="kv__v kv__v--l">{item}</span><span className="kv__dots" /></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
