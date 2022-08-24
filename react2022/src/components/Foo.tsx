import Menu from "./Menu"

type Props = {
    name: string | number
}


function Foo(props: Props) {
  return (
    <header className="header">
      <h1>{props.name}</h1>
      <Menu link={["Foo", "Ba", "Foo ba", "Login"]}/>
    </header>
  );
};


export default Foo