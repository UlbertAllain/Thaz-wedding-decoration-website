import Link from "next/link";

type Props = { index: string; title: string; meta: string; id?: string; metaHref?: string };

export function SectionLabel({ index, title, meta, id, metaHref }: Props) {
  return (
    <div className="section-label" id={id}>
      <span>{index} — {title}</span>
      {metaHref
        ? <Link href={metaHref} className="section-label__link">{meta}</Link>
        : <span>{meta}</span>}
    </div>
  );
}
