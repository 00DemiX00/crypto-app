import { Layout, Card, Statistic, List, Typography, Spin } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { fetchAssets, fakeFetchCrypto } from '../../api';
import { percentDifference } from '../../utils';

const siderStyle = {
padding: '1rem'
};

export default function AppSider() {
  const [loading, setLoading] = useState(false)
  const [crypto, setCrypto] = useState([])
  const [assets, setAssets] = useState([])
  
  useEffect(() =>{
      async function preload() {
        setLoading(true)
        const { result } = await fakeFetchCrypto()
        const assets = await fetchAssets()

        setAssets(assets.map(asset => {
          const coin = result.find((c) => c.id === asset.id)
          return {
            grow: asset.price < coin.price, //рост/падение цены монеты с момента покупки
            growPercent: percentDifference(asset.price, coin.price), //процент роста/падения монеты
            totalAmount: asset.amount * coin.price, //сколько в деньгах у нас есть конкретной монеты 
            totalProfit: asset.amount * coin.price - asset.amount * asset.price, //сколько заработали/потеряли 

            ...asset
          }
        }))
        setCrypto(result)
        setLoading(false)
      }
      preload()
    }, [])

    if(loading) {
      return <Spin fullscreen></Spin>
    }
    
  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {assets.map(asset => (
        <Card key={asset.id} style={{marginBottom: '1rem'}}>
        <Statistic
          title = {asset.id}
          value={asset.totalAmount}
          precision={2}
          valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
          prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined/>}
          suffix="$">
        </Statistic>
        <List size="small"
          dataSource={[
            {title: 'Итоговая прибыль', value: asset.totalProfit},
            {title: 'Количество монет', value: asset.amount},
            {title: 'Разница %', value: asset.growPercent}
          ]}
          renderItem={(item) => (
          <List.Item>
          <span>{item.title}</span>
          <span>{item.value}</span>
          </List.Item>)}
        />
      </Card>
      ))}
      
      {/* <Card>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />}
          suffix="%">
        </Statistic>
      </Card> */}
    </Layout.Sider>)
}