import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import { useEffect, useState } from 'react';
import CoinInfoModal from '../CryptoCoinInfoModal';
import AddAssetform from '../AddAssetForm';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const handleChange = value => {
  console.log(`selected ${value}`);
};

export default function AppHeader() {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState()
  const [coin, setCoin] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const {crypto} = useCrypto()
    
  useEffect(() => {
    const keypress = event => {
      if (event.key === '/') {
        setSelect((prev) => !prev)
      }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, [])
    
    function handleSelect(value) {
      setModal(true)
      setCoin(crypto.find(c => c.id === value))
    }

    return (<Layout.Header style={headerStyle}>
       <Select
    style={{ width: 250 }}
    open={select}
    onSelect={handleSelect}
    onClick={() => setSelect((prev) => !prev)}
    value="press / to open"
    options={crypto.map(coin => ({
      label: coin.name,
      value: coin.id,
      icon: coin.icon,
    }))}
    optionRender={(option) => (
      <Space>
        <img 
          src={option.data.icon} 
          alt={option.data.label}
          style={{width: 20}}
        ></img> {option.data.label}
      </Space>
    )}
  />
   <Button type="primary" onClick={() => setDrawer(true)}>Primary Button</Button>

  <Modal 
        open={modal}
        onCancel={() => setModal(false)}
        footer={null}>
          <CoinInfoModal coin={coin}></CoinInfoModal>
  </Modal>

  <Drawer
        width={600}
        title="Basic Drawer"
        onClose={() => setDrawer(false)}
        open={drawer}>
        
        <AddAssetform></AddAssetform>
  </Drawer>


    </Layout.Header>)
}