import { Flex, Typography } from "antd"

function CoinInfo({coin}) {
    return (<Flex align="center">
            <img 
                src={coin.icon} 
                alt={coin.name} 
                style={{width: 40, 
                marginRight: 10}}>
            </img>
            <Typography.Title level={2} style={{margin: 0}}>
             {coin.name}
            </Typography.Title>
    </Flex>)
}

export default CoinInfo