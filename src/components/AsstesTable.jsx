import { Table } from 'antd';
import { useCrypto } from '../context/crypto-context';

const columns = [
  {
    title: 'Криптовалюта',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Цена, $',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Количество монет',
    dataIndex: 'amount',
    sorter: (a, b) => a.amount - b.amount,
  },
];

export default function AssetsTable() {
    const {assets} = useCrypto()
    const data = assets.map((a) => ({
        key: a.id,
        name: a.name,
        price: a.price,
        amount: a.amount,
    }))
    return (
        <Table 
            columns={columns} 
            dataSource={data}
            pagination={false}>
        </Table>
    )
}