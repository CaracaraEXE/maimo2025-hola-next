const Navbar = () => {
  return (
    <div className="nav_container">
        <h1>Logo</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Cosas</a></li>
            </ul>
        </nav>
    </div>
    //CLASS NO EXISTE EN REACT, SINO CLASSNAME
    //Nuestro JSX. El JSX solo puede tener un elemento padre, no puede haber hermanos. No puede ver dos DIVS a la misma altura, sino un DIV que encierre a dos DIVS.
  );
};

export default Navbar;
