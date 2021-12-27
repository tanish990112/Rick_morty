import { Layout, Menu } from 'antd';
import styles from '../styles/NavBar.module.scss';

const { Header} = Layout;
const NavBar= ()=>{
    return (
        <Layout>
        <Header className= {styles.nav}>
          <Menu className={styles.navmenu} mode="horizontal">
            <Menu.Item key="1"><a href='/'>Home</a></Menu.Item>
            <Menu.Item key="2"><a href='/episodes'>Episodes</a></Menu.Item>
            <Menu.Item key="3"><a href='/characters'>Characters</a></Menu.Item>
            <Menu.Item key="4"><a href='/locations'>Location</a></Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }

export default NavBar ;