import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function Layout() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Layout
