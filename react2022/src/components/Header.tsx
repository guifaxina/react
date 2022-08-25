import Menu from "./Menu"

type Props = {
    name: string | number
}


function Header(props: Props) {
  return (
    <header className="header">
      <h1>{props.name}</h1>
      <Menu link={["Contact", "About", "Our plans", "Login"]}/>
    </header>
  );
};


export default Header