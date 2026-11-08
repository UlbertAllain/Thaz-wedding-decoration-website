import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function ArrowLink({ href, children, className = "", ariaLabel }: Props) {
  return (
    <Link className={`text-link ${className}`} href={href} aria-label={ariaLabel}>
      <span>{children}</span>
      <span className="text-link__arrow" aria-hidden="true">↗</span>
    </Link>
  );
}
