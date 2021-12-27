import { Layout, Menu } from 'antd';
import styles from '../styles/NavBar.module.scss';
import Link from 'next/link'

const { Header} = Layout;
const NavBar= ()=>{
    return (
        <Layout>
        <Header className= {styles.nav}>
          <Menu className={styles.navmenu} mode="horizontal">
            <Menu.Item key="1"><Link href='/'>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link href='/episodes'>Episodes</Link></Menu.Item>
            <Menu.Item key="3"><Link href='/characters'>Characters</Link></Menu.Item>
            <Menu.Item key="4"><Link href='/locations'>Location</Link></Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }

export default NavBar ;