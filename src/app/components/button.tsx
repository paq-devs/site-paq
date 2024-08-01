"use-client";

import Link from "next/link";

type Props = {
    title: string;
    href: string;
    width?: string;
    height?: string;
};

type SubmitProps = {
    title: string;
    width?: string;
    height?: string;
    isEnabled?: boolean;
};

export default function Button({ title, href, width, height }: Props) {
    return (
        <Link
            href={href}
            className={`flex items-center font-poppins justify-center rounded-[10px] bg-azul-paq text-base text-white font-semibold`}
            type="button"
            style={{ width: width, height: height }}
        >
            {title}
        </Link>
    );
}

export function SubmitButton({ title, width, height, isEnabled }: SubmitProps) {
    return (
        <button
            type="submit"
            className={`flex items-center justify-center rounded-[10px] bg-azul-paq text-base text-white submit-button`}
            style={{ width: width, height: height }}
            disabled={!isEnabled}
        >
            {title}
        </button>
    );
}
