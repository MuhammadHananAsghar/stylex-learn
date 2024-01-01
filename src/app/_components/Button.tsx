import stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import { buttonTokens } from "./ButtonTokens.stylex";

const styles = stylex.create({
    base: {
        backgroundColor: buttonTokens.background,
        color: buttonTokens.accent,
        cursor: "pointer",
        padding: "5px 10px",
        borderRadius: "20px",
    }
});

// style?: StyleXStyles #### If you want to change any style use this line
// Otherwise if you want to only allow to change specific use below

export default function Button ({
    onClick,
    children,
    style
} : Readonly<{
    onClick?: () => void,
    children: React.ReactNode,
    style?: StyleXStyles<{
        backgroundColor?: string;
        color?: string;
    }>
}>) {
    return (
        <button {...stylex.props(styles.base, style)} onClick={onClick}>
            {children}
        </button>
    )
}