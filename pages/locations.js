import styles from '../styles/table.module.scss'
import { Table, Tag, Space } from 'antd';

export default function locations({locations}){
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        }
      ];
    return (
        <div className={styles.tablediv}>
            <Table columns={columns} dataSource={locations} />
      </div>
    )
}


export const getStaticProps = async() => {
    const res = await fetch ('https://rickandmortyapi.com/api/location')
    const data = await res.json();
    const locations = data.results;
    return {
        props:{
            locations
        }
    }   
}