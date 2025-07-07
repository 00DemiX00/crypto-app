import { Flex, Tag, Typography, Divider } from "antd"
import CoinInfo from "./CoinInfo"

export default function CoinInfoModal({coin}) {
    return(
        <>
        <CoinInfo coin={coin} withSymbol></CoinInfo>
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