import Link from "next/link";
function Header() {
  return (
    <div className="header">
      <h1>header</h1>
      <div>
        <Link href="/">놀러오슈</Link>
        <Link href="/introduce">소개</Link>
        <Link href="/travel">여행</Link>
        <Link href="/plan">기획</Link>
        <Link href="/community">커뮤니티</Link>
        <Link href="/login">login</Link>
        {/* <form>
          <input type="text" placeholder="search input"></input>
          <button>검색</button>
        </form>
        <Link href="/mypage/login">login</Link>
        <Link href="/mypage">mypage</Link>
        <Link href="/menu">menu</Link> */}
      </div>
    </div>
  );
}

export default Header;
