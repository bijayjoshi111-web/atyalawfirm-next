import AnimateOnScroll from "@/components/AnimateOnScroll";

const sections = [
  {
    label: "Intro",
    lines: ["Yeah… Atya Law…", "From the streets to the courts, we rise…", "Kathmandu vibes…"],
  },
  {
    label: "Verse 1",
    lines: [
      "Step in the court, yeah we ready to fight,",
      "Black coats on, yeah we move with the right.",
      "Truth in the file, facts on sight,",
      "Every case we touch, we bring it to light.",
      "",
      "No fear, no doubt, we stand so tall,",
      "When justice calls, we answer the call.",
      "From the ground up, yeah we built this name,",
      "Atya Law Firm, remember the name.",
    ],
  },
  {
    label: "Hook",
    lines: [
      "Atya Law, we don't back down,",
      "Turn every loss to a victory crown.",
      "Truth in our voice, power in pen,",
      "Fight for the people again and again.",
    ],
  },
  {
    label: "Verse 2",
    lines: [
      "Contracts signed, yeah we seal it tight,",
      "Rights protected, we defend what's right.",
      "From the alleys to the high court gate,",
      "We carry the weight, we challenge fate.",
      "",
      "Every client got a story to tell,",
      "We break those chains, we break that shell.",
      "Law is our weapon, sharp and clean,",
      "Living the code, know what I mean?",
    ],
  },
  {
    label: "Bridge",
    lines: [
      "Kathmandu city, yeah we represent,",
      "Anamnagar roots, every move is intent.",
      "From struggle to strength, from doubt to proof,",
      "We stand for justice—that's living truth.",
    ],
  },
  {
    label: "Final Verse",
    lines: [
      "Legacy built on honor and grind,",
      "Sharp like the law, yeah we one of a kind.",
      "Future is ours, no limits, no flaw,",
      "Stand up—stand proud—ATYA LAW!",
    ],
  },
  {
    label: "Outro",
    lines: ["Yeah… justice never sleeps…", "Atya Law Firm… we keep it real."],
  },
];

export default function AnthemLyrics() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-3">Our Identity</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">Firm Anthem</h2>
            <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto mt-5" />
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
          {sections.map((section, i) => (
            <AnimateOnScroll key={section.label} delay={i * 80} direction="up">
              <div className="border border-white/10 p-6 hover:border-[#c9a84c]/40 transition-colors">
                <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-4">
                  {section.label}
                </p>
                <div className="space-y-1">
                  {section.lines.map((line, j) =>
                    line === "" ? (
                      <div key={j} className="h-3" />
                    ) : (
                      <p key={j} className="text-white/70 text-sm leading-relaxed font-light">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
