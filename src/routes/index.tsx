import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "../assets/hero.jpg";
import headshotAsset from "../assets/fernanda-headshot.jpg.asset.json";
import photo1Asset from "../assets/fernanda-1.jpg.asset.json";
import photo2Asset from "../assets/fernanda-2.jpg.asset.json";
import photo3Asset from "../assets/fernanda-3.jpg.asset.json";
const portraitImg = headshotAsset.url;
import logoAsset from "../assets/logo-fernanda.png.asset.json";
const logoImg = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fernanda Serralbo | Psicóloga Clínica" },
      {
        name: "description",
        content:
          "Psicologia clínica com acolhimento e ética. Psicoterapia individual online para adultos e adolescentes com a Fernanda Serralbo. Agende sua consulta.",
      },
      { property: "og:title", content: "Fernanda Serralbo | Psicóloga Clínica" },
      {
        property: "og:description",
        content:
          "Psicoterapia individual online para adultos e adolescentes. Um espaço seguro de acolhimento e cuidado com a sua saúde mental.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "5511971880020";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá, Fernanda! Gostaria de agendar uma consulta.",
)}`;

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Contato", href: "#contato" },
];

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img
            src={logoImg}
            alt="Logotipo de Fernanda Serralbo, psicóloga"
            width={160}
            height={160}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-display text-lg font-medium tracking-tight text-foreground">
            Fernanda Serralbo
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-md"
          >
            Agende sua consulta
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full text-foreground md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-base font-medium text-primary-foreground"
            >
              Agende sua consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="section-anchor relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1600}
          height={1000}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-20 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Psicologia Clínica • Online
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Cuidar da mente é um ato de{" "}
            <span className="text-primary">gentileza</span> consigo mesmo.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Um espaço seguro, acolhedor e ético para você compreender suas
            emoções, desenvolver autoconhecimento e caminhar com mais equilíbrio
            emocional. Psicoterapia individual online para adultos e adolescentes.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:shadow-xl"
            >
              Agende sua consulta
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/60 px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-accent"
            >
              Conheça meu trabalho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return AboutInner();
}

function SectionPhoto({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure
      className={`group overflow-hidden rounded-3xl border border-border bg-secondary/40 shadow-sm ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
      />
    </figure>
  );
}


function AboutInner() {
  return (
    <section id="sobre" className="section-anchor bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="mx-auto md:mx-0">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-accent/50 blur-2xl" aria-hidden="true" />
            <img
              src={portraitImg}
              alt="Fernanda Serralbo, psicóloga clínica"
              width={900}
              height={900}
              loading="lazy"
              className="relative h-56 w-56 rounded-full border-4 border-background object-cover shadow-xl sm:h-72 sm:w-72"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Sobre Mim
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Fernanda Serralbo
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sou Fernanda Serralbo, psicóloga clínica formada em Psicologia, com
              especialização em Terapia Cognitivo-Comportamental pelo Hospital
              Israelita Albert Einstein. Acredito que todo ser humano carrega uma
              história singular, e meu compromisso é oferecer um espaço de escuta
              qualificada, acolhimento e respeito à sua individualidade.
            </p>
            <p>
              O processo terapêutico é uma construção conjunta, baseada em
              confiança e vínculo. Meu trabalho busca promover autoconhecimento,
              autonomia e bem-estar emocional, sempre pautado pela ética e pelo
              rigor científico.
            </p>
            <p>
              Atendo exclusivamente de forma online, garantindo praticidade,
              sigilo e a possibilidade de realizar terapia no conforto do seu
              espaço.
            </p>

            <div className="mt-2 rounded-2xl border border-border bg-background/60 p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Como meu trabalho pode te ajudar
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Minha atuação vai muito além de ouvir: juntos, vamos compreender
                os padrões que sustentam o sofrimento emocional e desenvolver
                ferramentas práticas para o seu dia a dia. Você ganha um espaço
                seguro para se expressar sem julgamentos, aprende a identificar e
                questionar pensamentos que te paralisam, fortalece a
                autoconfiança e constrói estratégias concretas para lidar com
                ansiedade, autoestima e TDAH. O objetivo é que você saia de cada
                sessão com mais clareza, autonomia e recursos reais para viver com
                mais equilíbrio e propósito.
              </p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12l2 2 4-4" />
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              CRP 06/209356
            </span>
            <span className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
              Atendimento online
            </span>
            <span className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
              Adultos e adolescentes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

type Specialty = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const SPECIALTIES: Specialty[] = [
  {
    title: "Ansiedade",
    description:
      "A ansiedade se manifesta em preocupação excessiva, tensão corporal, medos paralisantes e pensamentos catastróficos que atrapalham o dia a dia. Na TCC, aprendemos a identificar os gatilhos ansiosos, questionar pensamentos distorcidos e desenvolver estratégias práticas de regulação emocional, para que você recupere calma, foco e controle sobre a própria vida.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    title: "Autoestima e Confiança",
    description:
      "A baixa autoestima alimenta o autocriticismo, a comparação constante e a sensação de nunca ser suficiente. Juntas, vamos reconhecer seus valores, reescrever a narrativa interna crítica e construir uma relação mais gentil e confiante com você mesmo, baseada em evidências reais da sua história, capacidades e conquistas.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "TDAH",
    description:
      "O Transtorno de Déficit de Atenção e Hiperatividade afeta foco, organização e regulação emocional, gerando frustração e sobrecarga. O acompanhamento clínico combina psicoeducação, técnicas de organização e rotinas, gestão de tempo e regulação de impulsos, estratégias práticas para transformar o caos em estrutura e potencializar suas qualidades.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v1.2h6V16.8c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
];

function Specialties() {
  return (
    <section id="abordagem" className="section-anchor bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Foco de Atendimento
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Como posso te ajudar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Atendimento exclusivamente online para adultos e adolescentes, com a
            Terapia Cognitivo-Comportamental, uma abordagem estruturada, ativa e
            baseada em evidências científicas.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {SPECIALTIES.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {s.icon}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <SectionPhoto
          src={photo1Asset.url}
          alt="Fernanda Serralbo sorrindo em seu consultório com um livro nas mãos"
          className="mt-14"
        />

      </div>
    </section>
  );
}

const TCC_POINTS = [
  {
    title: "Compreende seus pensamentos",
    desc: "Você aprende a identificar e questionar os pensamentos automáticos que alimentam a ansiedade e o autocriticismo, trocando distorções por uma leitura mais realista.",
  },
  {
    title: "Regula suas emoções",
    desc: "Desenvolve estratégias práticas para lidar com medo, tristeza, raiva e frustração, recuperando o equilíbrio emocional no dia a dia.",
  },
  {
    title: "Transforma comportamentos",
    desc: "Substitui hábitos que te paralisam por ações que te aproximam dos seus objetivos e valores, construindo mudança real e duradoura.",
  },
  {
    title: "Ferramentas práticas",
    desc: "Sai de cada sessão com exercícios concretos para aplicar entre os encontros, percebendo sua evolução ao longo do processo.",
  },
];

function TccSection() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              A Terapia Cognitivo-Comportamental
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Entenda como a TCC transforma vidas
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A Terapia Cognitivo-Comportamental parte de uma ideia simples e
              poderosa: não são as situações que causam nosso sofrimento, mas a
              forma como interpretamos e damos significado a elas. Pensamentos,
              emoções e comportamentos formam um ciclo, e quando compreendemos
              esse ciclo, ganhamos a chave para transformá-lo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Com a TCC você aprende a observar os pensamentos automáticos que
              disparam a ansiedade, a reconhecer o autocriticismo que mina a
              autoestima e a substituir hábitos paralisantes por ações que te
              aproximam de uma vida com mais sentido. É um processo ativo,
              colaborativo e focado no presente, com técnicas práticas que você
              aplica entre as sessões e que constroem resultados visíveis.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Minha especialização no Hospital Israelita Albert Einstein me
              trouxe o aporte técnico e científico para conduzir esse processo
              com segurança, ética e cuidado individualizado.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {TCC_POINTS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <SectionPhoto
            src={photo2Asset.url}
            alt="Fernanda Serralbo lendo material de estudo em Terapia Cognitivo-Comportamental"
            className="md:col-span-2"
          />

        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Primeiro contato",
    desc: "Você envia uma mensagem pelo WhatsApp. Conversamos brevemente sobre sua demanda e combinamos o melhor horário para a primeira sessão.",
  },
  {
    num: "02",
    title: "Sessão de avaliação",
    desc: "Na primeira sessão online, conheço sua história e expectativas. Juntas definimos os objetivos e o plano terapêutico mais adequado.",
  },
  {
    num: "03",
    title: "Processo terapêutico",
    desc: "Sessões semanais de 50 minutos, por videochamada, em um espaço seguro, sigiloso e acolhedor para o seu desenvolvimento.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Como Funciona
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Sessões 100% online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Toda a terapia acontece por videochamada, com sigilo total, no
            conforto do seu espaço. Simples, prático e seguro.
          </p>
        </div>

        <SectionPhoto
          src={photo3Asset.url}
          alt="Fernanda Serralbo sentada com livro de Terapia Cognitivo-Comportamental"
          className="mt-12"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {STEPS.map((step) => (
            <div key={step.num} className="relative">
              <div className="font-display text-5xl font-bold text-primary/25">
                {step.num}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card p-8 text-center sm:flex-row sm:gap-6 sm:text-left">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>
          <p className="text-base text-foreground">
            <span className="font-semibold">Duração:</span> sessões de 50
            minutos • <span className="font-semibold">Frequência:</span>{" "}
            normalmente semanal • <span className="font-semibold">Plataforma:</span>{" "}
            Google Meet ou Zoom, com link enviado a cada sessão.
          </p>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Como faço para agendar a primeira consulta?",
    a: "Basta enviar uma mensagem pelo WhatsApp. Retorno o contato para entender brevemente sua demanda e combinarmos um horário. O agendamento é simples e feito de forma humanizada.",
  },
  {
    q: "A terapia online é tão eficaz quanto a presencial?",
    a: "Sim. Diversos estudos científicos confirmam que a psicoterapia online tem eficácia equivalente à presencial, mantendo o mesmo rigor ético, sigilo e qualidade do processo terapêutico.",
  },
  {
    q: "Quais faixas etárias você atende?",
    a: "Atendo exclusivamente adultos e adolescentes. Cada faixa etária é acolhida com uma escuta adaptada às suas necessidades e momento de vida.",
  },
  {
    q: "Qual é a duração e a frequência das sessões?",
    a: "Cada sessão dura 50 minutos. A frequência mais comum é semanal, mas pode ser ajustada de acordo com as necessidades e o plano terapêutico definido em conjunto.",
  },
  {
    q: "As informações que eu compartilhar são sigilosas?",
    a: "Absolutamente. O sigilo é um pilar do Código de Ética profissional do psicólogo. Tudo o que é compartilhado nas sessões é estritamente confidencial.",
  },
  {
    q: "Qual o valor da consulta e como funciona o pagamento?",
    a: "Os valores e formas de pagamento são combinados no primeiro contato, com transparência. O pagamento é feito antes de cada sessão ou mensalmente, conforme o acordado.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-anchor bg-background py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Perguntas Frequentes
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tire suas dúvidas
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium text-foreground">
                    {item.q}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-base leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="section-anchor bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
          Contato
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
          Dar o primeiro passo é um ato de coragem. Estou aqui para acolher você
          com respeito e cuidado. Envie uma mensagem e agende sua consulta.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 text-base font-medium text-primary shadow-lg transition-all hover:opacity-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp (11) 97188-0020
          </a>
          <a
            href="mailto:fernanda.serralbo@hotmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="Logotipo de Fernanda Serralbo, psicóloga"
                width={160}
                height={160}
                loading="lazy"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-display text-lg font-medium">
                Fernanda Serralbo
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              Psicóloga clínica. Psicoterapia individual online para adultos e
              adolescentes, com acolhimento, ética e cuidado.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-background/80">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-background/70 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-background/80">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/70">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  WhatsApp: (11) 97188-0020
                </a>
              </li>
              <li>
                <a
                  href="mailto:fernanda.serralbo@hotmail.com"
                  className="transition-colors hover:text-primary"
                >
                  fernanda.serralbo@hotmail.com
                </a>
              </li>
              <li>CRP 06/209356</li>
              <li>Atendimento online para todo o Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center text-xs text-background/55">
          © {new Date().getFullYear()} Fernanda Serralbo • Psicóloga Clínica
          • CRP 06/209356. Este site não oferece emergências psiquiátricas, em
          casos de urgência, ligue 188 (CVV).
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-xl shadow-black/20 transition-transform hover:scale-105 sm:px-5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">Agende agora</span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />



        <Specialties />
        <TccSection />
        <HowItWorks />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
