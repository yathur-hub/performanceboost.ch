import React from 'react';

/** Programmatische Navigation aus beliebigen Komponenten (App.tsx hört auf dieses Event). */
export function navigate(path: string) {
  window.dispatchEvent(new CustomEvent('navigation-change', { detail: path }));
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Interner Link mit echtem href (crawlbar, Mittelklick/neuer Tab funktioniert),
 * der bei normalem Klick clientseitig navigiert.
 */
export default function Link({ href, onClick, children, ...rest }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(href);
  };
  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
