import { Flex, Tag, Typography, Divider } from "antd"

export default function CoinInfoModal({coin}) {
    return(
        <>
        <Flex align="center">
            <img src={coin.icon} alt={coin.name} style={{width: 40, marginRight: 10}}></img>
            <Typography.Title level={2} style={{margin: 0}}>
                ({coin.symbol}) {coin.name}
            </Typography.Title>
        </Flex>
        <Divider></Divider>
        <Typography.Paragraph>
            <Typography.Text strong>1 час: </Typography.Text>
            <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
            <Typography.Text strong>1 день: </Typography.Text>
            <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
            <Typography.Text strong>1 неделя: </Typography.Text>
            <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
        </Typography.Paragraph>
        <Typography.Paragraph>
            <Typography.Text strong>Цена: </Typography.Text>
            {coin.price.toFixed(2)} $
        </Typography.Paragraph>
        <Typography.Paragraph>
            <Typography.Text strong>Цена в BTC: </Typography.Text>
            {coin.priceBtc} 
        </Typography.Paragraph>
        <Typography.Paragraph>
            <Typography.Text strong>Рыночная капитализация: </Typography.Text>
            {coin.marketCap} $
        </Typography.Paragraph>
        {coin.contractAddress && (<Typography.Paragraph>
            <Typography.Text strong>Адрес контракта: </Typography.Text>
            {coin.contractAddress} 
        </Typography.Paragraph>)}
        </>

    )
}