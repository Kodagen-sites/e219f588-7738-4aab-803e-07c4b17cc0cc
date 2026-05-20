import type { ReactElement } from "react";

type Socials = {
  instagram?: string;
  linkedin?: string;
  x?: string;
  threads?: string;
  youtube?: string;
  facebook?: string;
  tiktok?: string;
  pinterest?: string;
  whatsapp?: string;
};

const ICONS: Record<keyof Socials, ReactElement> = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.4V9.65H5.67v8.75h2.67ZM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.4 9.9v-4.78c0-2.56-1.37-3.75-3.2-3.75-1.47 0-2.13.81-2.5 1.38V9.65h-2.67c.04.76 0 8.75 0 8.75h2.67v-4.88c0-.24.02-.48.09-.65.19-.49.63-1 1.37-1 .97 0 1.36.74 1.36 1.82v4.71h2.88Z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.5 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  threads: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.7 14.1c-1 .85-2.35 1.27-4.06 1.27-2 0-3.55-.65-4.6-1.93-.93-1.14-1.45-2.7-1.57-4.65-.13-2.07.2-3.88.97-5.4.84-1.65 2.16-2.83 3.94-3.5C11.3 1.45 12.55 1.3 14 1.6c1.55.33 2.85 1.13 3.78 2.3a.6.6 0 0 1-.93.75c-.74-.93-1.78-1.56-3.04-1.83-1.18-.25-2.2-.13-3.13.18-1.5.55-2.6 1.55-3.32 2.95-.66 1.3-.95 2.9-.83 4.78.1 1.7.55 3.05 1.32 3.98.85 1.04 2.1 1.55 3.78 1.55 1.43 0 2.55-.34 3.35-1 .8-.67 1.2-1.6 1.2-2.78v-.6c-.62.42-1.4.65-2.34.65-1.27 0-2.3-.34-3.07-1.02-.78-.7-1.18-1.6-1.18-2.7 0-1.12.4-2 1.2-2.65.8-.66 1.85-1 3.13-1 .9 0 1.66.2 2.27.62.13-.34.34-.62.6-.85a.6.6 0 0 1 .82.86 1.5 1.5 0 0 0-.42 1.06v3.45c0 1.65-.58 2.97-1.7 3.92zm-3.6-2.95c.97 0 1.78-.27 2.43-.8a2.9 2.9 0 0 0 1.07-2.18c0-.45-.12-.85-.38-1.2-.27-.36-.65-.66-1.16-.88a3.6 3.6 0 0 0-1.45-.32c-.95 0-1.72.23-2.32.7-.6.46-.9 1.06-.9 1.8 0 .73.27 1.32.83 1.77.55.45 1.26.68 2.13.68z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.24 5 12 5 12 5s-6.24 0-7.81.42A2.51 2.51 0 0 0 2.42 7.19 26.13 26.13 0 0 0 2 12a26.13 26.13 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.77C5.76 19 12 19 12 19s6.24 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77A26.13 26.13 0 0 0 22 12a26.13 26.13 0 0 0-.42-4.81ZM10 15V9l5.2 3Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88V14.9h-2.54v-2.9h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v6.98C18.34 21.13 22 17 22 12z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.45a8.16 8.16 0 0 0 4.77 1.53V7.6a4.85 4.85 0 0 1-1.84-.91Z" />
    </svg>
  ),
  pinterest: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.09 2.46 7.6 5.97 9.16-.08-.78-.16-1.97.03-2.82.18-.78 1.16-4.96 1.16-4.96s-.3-.6-.3-1.48c0-1.39.8-2.42 1.81-2.42.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.18-4.06-2.85 0-4.52 2.14-4.52 4.34 0 .86.33 1.79.74 2.29.08.1.09.18.07.28-.07.31-.25 1-.28 1.14-.04.18-.14.22-.33.13-1.21-.56-1.96-2.32-1.96-3.74 0-3.04 2.21-5.83 6.37-5.83 3.35 0 5.94 2.38 5.94 5.57 0 3.32-2.1 6-5.01 6-.98 0-1.9-.51-2.21-1.11l-.6 2.29c-.22.84-.81 1.89-1.21 2.53A10 10 0 1 0 12 2Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.52 3.48A11.81 11.81 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.96c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63a11.93 11.93 0 0 0 5.84 1.49h.01c6.59 0 11.96-5.36 11.96-11.96 0-3.19-1.24-6.19-3.51-8.42Z" />
    </svg>
  ),
};

const LABEL: Record<keyof Socials, string> = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  x: "X",
  threads: "Threads",
  youtube: "YouTube",
  facebook: "Facebook",
  tiktok: "TikTok",
  pinterest: "Pinterest",
  whatsapp: "WhatsApp",
};

export function SocialLinks({ socials }: { socials: Socials }) {
  const present = (Object.keys(socials) as Array<keyof Socials>).filter(
    (k) => !!socials[k]
  );
  if (present.length === 0) return null;
  return (
    <ul className="flex items-center gap-3">
      {present.map((k) => (
        <li key={k}>
          <a
            href={socials[k]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={LABEL[k]}
            className="w-8 h-8 inline-flex items-center justify-center rounded-full text-ink/60 hover:text-accent hover:bg-white/8 transition-colors"
          >
            {ICONS[k]}
          </a>
        </li>
      ))}
    </ul>
  );
}
