interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500">{props.text ?? "Default"}</button>;
}

export function Home() {
  return (
    <div>
      <Button text="Enviar"></Button>
      <Button></Button>
      <Button></Button>
    </div>
  );
}
