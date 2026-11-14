import React from 'react';

/** **fett** im Fliesstext. */
export function renderInline(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-semibold text-slate-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}

/** Minimaler Markdown-Renderer für Fachtexte: Absätze, «## » Zwischentitel, «- » Listen, **fett**. */
export function SimpleMarkdown({ text }: { text: string }) {
  return (
    <div className="space-y-5">
      {text.split('\n\n').map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} className="pt-6 text-xl sm:text-2xl font-display font-semibold text-slate-900 tracking-tight">
              {block.slice(3)}
            </h2>
          );
        }
        if (block.startsWith('- ')) {
          return (
            <ul key={i} className="space-y-2.5">
              {block.split('\n').map((li, j) => (
                <li key={j} className="flex gap-3 text-body text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#686DF4] shrink-0 mt-2.5" aria-hidden="true" />
                  <span>{renderInline(li.replace(/^- /, ''))}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-body text-slate-700 leading-relaxed">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
