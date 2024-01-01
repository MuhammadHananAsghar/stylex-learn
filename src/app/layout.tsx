import type { Metadata } from 'next'
import stylex from "@stylexjs/stylex";
import './globals.css'

const DARK_MODE = "@media (prefers-color-scheme: dark)";

const s = stylex.create({
  body: {
    fontFamily: "sans-serif",
    backgroundColor: {
      default: "white",
      [DARK_MODE]: "black",
    },
    color: {
      default: "black",
      [DARK_MODE]: "white",
    },
  },
});


export const metadata: Metadata = {
  title: 'Stylex Learning',
  description: 'Stylex App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body {...stylex.props(s.body)}>{children}</body>
    </html>
  )
}
