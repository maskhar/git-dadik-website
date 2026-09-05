import { AICarousel } from "@/components/AICarousel";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Building2,
  Check,
  Code2,
  Cpu,
  Globe2,
  Lightbulb,
  LockKeyhole,
  MessageCircle,
  Network,
  PenLine,
  Settings2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=6285940834227&text=Halo+DWC.AI%2C+aku+mendapatkan+informasi+dari+Websitenya+%2Adadikwahyuchang.id%2A.%0AIngin+bertanya+nih+%3F+&type=phone_number&app_absent=0";

type Detail = { label: string; icon: LucideIcon };
type BrandNode = {
  name: string;
  subtitle: string;
  icon: LucideIcon;
  details?: Detail[];
  description?: string;
  poweredBy?: string;
};

const brandNodes: BrandNode[] = [
  {
    name: "CARUBRA AI",
    subtitle: "Perusahaan / AI Ecosystem",
    icon: Network,
    details: [
      { label: "Technology", icon: Cpu },
      { label: "Development", icon: Code2 },
      { label: "Automation", icon: Settings2 },
      { label: "Knowledge Systems", icon: BookOpen },
    ],
  },
  {
    name: "DWC.AI",
    subtitle: "Dadik Wahyu Chang AI Agent",
    icon: BrainCircuit,
    description: "AI berbasis buku, framework, pemikiran, dan pengalaman Dadik",
    poweredBy: "Powered by CARUBRA AI",
  },
  {
    name: "dadikwahyuchang.id",
    subtitle: "Service & Knowledge Hub",
    icon: Globe2,
    details: [
      { label: "Karya", icon: PenLine },
      { label: "Insight", icon: Lightbulb },
      { label: "Konsultasi", icon: MessageCircle },
      { label: "Akses DWC.AI", icon: LockKeyhole },
    ],
  },
];

const products = [
  { name: "FREE", subtitle: "Mulai Gratis", button: "Coba Gratis", icon: Sparkles, items: ["Kenalan dengan DWC.AI", "Akses knowledge publik", "Tanya branding & bisnis", "Via website / WhatsApp"] },
  { name: "PREMIUM", subtitle: "Pendalaman Insight", button: "Pilih Premium", icon: BrainCircuit, featured: true, items: ["Semua fitur Free", "Knowledge DWC lebih lengkap", "Buku & framework eksklusif", "Respons lebih dalam & relevan", "History / workspace"] },
  { name: "PRIVATE", subtitle: "Konsultasi Langsung", button: "Jadwalkan Konsultasi", icon: Users, items: ["Sesi langsung dengan Dadik", "AI pre-brief sebelum meeting", "Diagnosis & peluang strategis", "Untuk founder, leader, institusi"] },
  { name: "CUSTOM", subtitle: "AI Khusus Perusahaan", button: "Diskusikan Kebutuhan", icon: Building2, items: ["AI berbasis SOP & knowledge bisnis", "Integrasi sistem & workflow", "Automation & development", "Dibangun oleh CARUBRA AI"] },
];

const journey = [
  ["Konten", "Personal Brand Dadik", Users],
  ["DADIK WAHYU CHANG.ID", "Service & Knowledge Hub", Globe2],
  ["DWC.AI", "Digital extension", BrainCircuit],
  ["FREE / PREMIUM", "Pilih akses", Sparkles],
  ["PRIVATE", "Konsultasi", Users],
  ["CUSTOM AI", "Solusi perusahaan", Building2],
  ["CARUBRA AI", "Technology ecosystem", Network],
] as const;

const journeyRows: Array<[number, number?]> = [[0, 1], [2, 3], [4, 5], [6]];
const messages = [
  { text: "Dadik Wahyu Chang = expert & pemilik knowledge", icon: Users },
  { text: "DWC.AI = digital extension dari pengalaman Dadik", icon: BrainCircuit },
  { text: "CARUBRA AI = mesin teknologi yang membangun dan mengembangkan sistemnya", icon: Network },
];

export default function AIPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#10233f]">
      <Navbar forceSolid />
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="mb-8 flex justify-center gap-3 text-primary opacity-70" aria-hidden="true"><span className="mt-4 h-px w-20 bg-primary" /><Network className="h-8 w-8" /><span className="mt-4 h-px w-20 bg-primary" /></div>
        <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.3em] text-primary">Ekosistem Layanan</p>
        <h1 className="mx-auto max-w-5xl text-center text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">Dadik Wahyu Chang <span className="text-primary">AI</span></h1>
        <p className="mt-5 text-center text-xl font-bold text-primary sm:text-2xl">Jangan Sekadar Tanya AI. Tanya Pengalaman.</p>
        <div className="mx-auto mt-7 grid max-w-4xl gap-2 rounded-3xl border border-primary/30 bg-white/90 p-3 text-left text-sm leading-relaxed text-slate-700 shadow-sm sm:grid-cols-3 sm:gap-0 sm:rounded-full sm:px-5 sm:py-3 sm:text-center">
          <span className="rounded-2xl bg-slate-50 px-3 py-2 sm:rounded-none sm:bg-transparent sm:px-3 sm:py-0">
            <strong className="font-semibold text-[#10233f]">Carubra</strong> = perusahaan / multiverse AI
          </span>
          <span className="rounded-2xl bg-slate-50 px-3 py-2 sm:border-x sm:border-primary/20 sm:rounded-none sm:bg-transparent sm:px-3 sm:py-0">
            <strong className="font-semibold text-[#10233f]">DWC.AI</strong> = produk jadi / contoh implementasi
          </span>
          <span className="rounded-2xl bg-slate-50 px-3 py-2 sm:rounded-none sm:bg-transparent sm:px-3 sm:py-0">
            <strong className="font-semibold text-[#10233f]">dadikwahyuchang.id</strong> = hubungi layanan
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle number="1" title="Struktur Brand" />
        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-3">
          {brandNodes.map(({ name, subtitle, icon: Icon, details, description, poweredBy }, index) => (
            <div key={name} className="contents">
              <article className="flex min-h-64 flex-1 flex-col rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-lg shadow-slate-900/5"><Icon className="mx-auto h-14 w-14 text-primary" /><h3 className="mt-5 text-2xl font-black text-foreground">{name}</h3><p className="mt-2 font-semibold">{subtitle}</p><div className="my-5 h-px bg-primary/20" />{details && <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 sm:grid-cols-4">{details.map(({ label, icon: DetailIcon }) => <span key={label} className="flex min-h-20 flex-col items-center justify-start gap-2 rounded-2xl bg-slate-50 px-3 py-3 text-center leading-tight"><DetailIcon className="h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6" /><span className="block max-w-24 break-words text-xs font-semibold sm:text-[11px] md:text-xs">{label}</span></span>)}</div>}{description && <p className="text-sm leading-relaxed text-slate-600">{description}</p>}{poweredBy && <span className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-bold text-primary"><Sparkles className="h-4 w-4" />{poweredBy}</span>}</article>
              {index < brandNodes.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>

        <SectionTitle number="2" title="Produk & Layanan" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map(({ name, subtitle, button, icon: Icon, items, featured }) => (
            <article key={name} className={`relative flex min-h-[390px] flex-col rounded-3xl border p-6 shadow-lg shadow-slate-900/5 ${featured ? "border-primary bg-[#10233f] text-white" : "border-slate-200 bg-white"}`}>
              {featured && <span className="mx-auto mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-black uppercase tracking-wide text-white"><Sparkles className="h-4 w-4" />Populer</span>}
              <Icon className="h-12 w-12 text-primary" /><h3 className={`mt-5 text-2xl font-black ${featured ? "!text-white" : "text-foreground"}`}>{name}</h3><p className={featured ? "font-semibold text-white" : "font-semibold"}>{subtitle}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">{items.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul>
              <a href={whatsappUrl} className={`mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold transition hover:-translate-y-0.5 ${featured ? "bg-primary text-white hover:bg-red-700" : "border border-primary text-primary hover:bg-primary hover:text-white"}`}>{button}<ArrowRight className="h-4 w-4" /></a>
            </article>
          ))}
        </div>

        <SectionTitle number="3" title="Alur Perjalanan User" />
        <div className="flex flex-col gap-1 xl:hidden">
          {journeyRows.map((row, rowIndex) => {
            const first = journey[row[0]];
            const secondIndex = row[1];
            const second = secondIndex === undefined ? undefined : journey[secondIndex];
            const reverse = rowIndex % 2 === 1;
            return (
              <div key={rowIndex}>
                {second ? (
                  <div className={`flex items-center gap-2 ${reverse ? "flex-row-reverse" : ""}`}>
                    <div className="w-[calc(50%-0.875rem)]"><JourneyCard title={first[0]} subtitle={first[1]} Icon={first[2]} mobile /></div>
                    <ArrowRight className={`h-6 w-6 shrink-0 text-primary ${reverse ? "rotate-180" : ""}`} aria-hidden="true" />
                    <div className="w-[calc(50%-0.875rem)]"><JourneyCard title={second[0]} subtitle={second[1]} Icon={second[2]} mobile /></div>
                  </div>
                ) : (
                  <div className="flex justify-end"><div className="w-[calc(50%-0.875rem)]"><JourneyCard title={first[0]} subtitle={first[1]} Icon={first[2]} mobile /></div></div>
                )}
                {rowIndex < journeyRows.length - 1 && <div className={`flex py-1 ${reverse ? "justify-start pl-[22%]" : "justify-end pr-[22%]"}`}><ArrowDown className="h-6 w-6 text-primary" aria-hidden="true" /></div>}
              </div>
            );
          })}
        </div>
        <div className="hidden items-center gap-2 xl:flex">
          {journey.map(([title, subtitle, Icon], index) => <div key={title} className="contents"><JourneyCard title={title} subtitle={subtitle} Icon={Icon} />{index < journey.length - 1 && <ArrowRight className="h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6" aria-hidden="true" />}</div>)}
        </div>
        <AICarousel />
        <div className="mx-auto mt-5 flex max-w-3xl items-center justify-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-3 text-center text-sm font-semibold"><Sparkles className="h-5 w-5 shrink-0 text-primary" />DWC.AI menjadi pintu masuk menuju layanan konsultasi dan solusi AI yang lebih dalam.</div>

        <SectionTitle number="4" title="Pesan Utama" />
        <div className="grid gap-4 md:grid-cols-3">{messages.map(({ text, icon: Icon }, index) => <article key={text} className="flex items-center gap-5 rounded-2xl bg-[#10233f] p-6 text-lg font-bold text-white"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary"><Icon className="h-7 w-7 text-white" /></span><div><span className="mb-2 block text-sm text-primary">0{index + 1}</span>{text}</div></article>)}</div>

        <div className="my-12 grid items-center gap-6 rounded-3xl border border-primary/20 bg-primary/5 p-7 md:grid-cols-[1fr_auto_1.4fr]"><div className="flex items-center gap-4"><Target className="h-14 w-14 shrink-0 text-primary" /><div><p className="text-xl font-black text-primary">Cocok untuk:</p><p className="mt-1 font-semibold text-foreground">entrepreneur, brand owner, creative leader, organisasi, pemerintah, dan perusahaan</p></div></div><span className="hidden h-20 w-px bg-primary/20 md:block" /><div className="text-center"><a href={whatsappUrl} className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-lg font-black text-white transition hover:bg-red-700">Explore via dadikwahyuchang.id <ArrowRight className="h-5 w-5" /></a><p className="mt-3 text-sm font-bold tracking-wide text-foreground">DWC.AI <span className="px-2 text-primary">•</span> FREE <span className="px-2 text-primary">•</span> PREMIUM <span className="px-2 text-primary">•</span> PRIVATE <span className="px-2 text-primary">•</span> CUSTOM</p></div></div>
      </section>
      <Footer />
    </main>
  );
}

function JourneyCard({ title, subtitle, Icon, mobile = false }: { title: string; subtitle: string; Icon: LucideIcon; mobile?: boolean }) {
  return <article className={`flex items-center rounded-2xl border border-slate-200 bg-white shadow-sm ${mobile ? "min-h-32 w-full min-w-0 gap-2.5 p-3 sm:min-h-36 sm:gap-4 sm:p-5" : "min-h-40 flex-1 flex-col justify-center gap-2 p-3 text-center"}`}><Icon className={`${mobile ? "h-8 w-8 sm:h-10 sm:w-10" : "h-10 w-10"} shrink-0 text-primary`} /><div className="min-w-0 flex-1"><h3 className={`font-black leading-tight text-foreground [overflow-wrap:anywhere] ${mobile ? "text-sm sm:text-base" : "text-[15px]"}`}>{title}</h3><p className={`mt-1 leading-snug text-slate-600 [overflow-wrap:anywhere] ${mobile ? "text-xs sm:text-sm" : "text-xs"}`}>{subtitle}</p></div></article>;
}

function FlowArrow() {
  return <span className="flex shrink-0 items-center justify-center text-primary" aria-hidden="true"><ArrowDown className="h-7 w-7 lg:hidden" /><ArrowRight className="hidden h-7 w-7 lg:block" /></span>;
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return <div className="mb-5 mt-14 flex items-center gap-4"><span className="rounded-lg bg-primary px-3 py-1 text-xl font-black text-white">{number}</span><h2 className="text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl">{title}</h2><span className="h-px flex-1 bg-slate-300" /></div>;
}
