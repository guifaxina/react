type Props = {
    link: string[];
}

function Menu(props: Props) {
    return (
    <ul className='menu'>
        {props.link.map((links, index) => <li key={index}><a>{links}</a></li>)}
    </ul>
    );
}

export default Menu