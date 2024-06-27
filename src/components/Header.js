

  function Header() {
    return (
      <header>
        <img src={
          process.env.PUBLIC_URL + '/little-lemon-192.png'
        } alt="Little Lemon Logo" />
      </header>
    );
  }

export default Header