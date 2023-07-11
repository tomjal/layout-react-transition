import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Layout
