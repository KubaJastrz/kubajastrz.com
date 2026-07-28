/**
 * Encode text as decimal HTML character entities (&#NN;).
 * @see https://spencermortensen.com/articles/email-obfuscation/#link-entity
 */
export function toHtmlEntities(text: string): string {
	return [...text].map((char) => `&#${char.codePointAt(0)!};`).join("");
}

/** Encode a mailto href so harvesters reading raw HTML cannot recover the address. */
export function obfuscateMailtoHref(email: string): string {
	return toHtmlEntities(`mailto:${email}`);
}

export type ObfuscatedEmailLinkOptions = {
	email: string;
	className?: string;
	/** Encode visible link text too (recommended when it shows the address). */
	obfuscateText?: boolean;
};

/** Build a clickable mailto anchor using HTML entity obfuscation. */
export function obfuscateEmailLink({
	email,
	className,
	obfuscateText = true,
}: ObfuscatedEmailLinkOptions): string {
	const href = obfuscateMailtoHref(email);
	const text = obfuscateText ? toHtmlEntities(email) : email;
	const classAttr = className ? ` class="${className}"` : "";

	return `<a${classAttr} href="${href}" rel="nofollow">${text}</a>`;
}
