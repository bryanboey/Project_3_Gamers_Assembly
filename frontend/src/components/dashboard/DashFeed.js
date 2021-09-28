import React from 'react'
import {Row,Col} from 'antd';
import FeedNewsCard from './FeedNewsCard';
import newsData from './dummyNewsData';

function DashFeed() {
    return (
        <Row style={{padding:"10px"}} >
            <Col span={24}><h2>News Feed</h2></Col>
            <Row justify="center" gutter={[0,32]}>
                {newsData.map(
                    (data,index) => <FeedNewsCard key={index} data={data}/>
                )}
            </Row>
        </Row>
    )
}

export default DashFeed;
