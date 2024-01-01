import stylex from "@stylexjs/stylex";
import Button from "./_components/Button";

const s = stylex.create({
  main: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

const greyButton = stylex.create({
  base: {
    backgroundColor: "grey",
    color: "black"
  }
})

export default function Home() {
  return (
    <main className={stylex(s.main)}>
      Hello Learning Stylex
      <br />
      <Button>Hello</Button>
      <Button style={greyButton.base}>Hello</Button>
    </main>
  )
}
