import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, type Icon as PhosphorIcon } from "@phosphor-icons/react";
import { Icon } from "./Icon";

type CtaLinkProps = {
  children: ReactNode;
  /** Internal route. */
  to?: string;
  /** External or mailto destination. */
  href?: string;
  variant?: "primary" | "light" | "ghost" | "ghost-dark";
  /** Trailing icon; pass null for a text-only pill. */
  icon?: PhosphorIcon | null;
  className?: string;
  onClick?: () => void;
};

/** Pill CTA with the trailing icon nested in its own circle. */
export default function CtaLink({ children, to, href, variant = "primary", icon, className = "", onClick }: CtaLinkProps) {
  const external = !!href && /^https?:/.test(href);
  const TrailingIcon = icon === undefined ? (external ? ArrowUpRight : ArrowRight) : icon;
  const classes = `btn btn-${variant} ${TrailingIcon ? "btn-has-icon" : ""} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
      {TrailingIcon && (
        <span className="btn-icon" aria-hidden="true">
          <Icon icon={TrailingIcon} size={16} weight="bold" />
        </span>
      )}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} onClick={onClick}>{content}</Link>;
  }
  return (
    <a href={href} className={classes} onClick={onClick} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {content}
    </a>
  );
}
