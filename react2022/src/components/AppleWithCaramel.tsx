type Props = {
    name: string | number
}

type PropsLink = {
    link: string[]
}

function AppleWithCaramel(props: Props) {
  return (
    <header className="header">
      <h1>{props.name}</h1>
      <Menu link={["Maçã", "Com", "Caramelo", "Login"]}/>
    </header>
  );
};
function Menu(props: PropsLink) {
    return (
    <ul className='menu'>
        {props.link.map(links => <li>{links}</li>)}
    </ul>
    );
}

export default AppleWithCaramel