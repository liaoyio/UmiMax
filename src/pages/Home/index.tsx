import { Col, Row } from 'antd';

import ACard from './components/ACard';
import BCard from './components/BCard';
import CCard from './components/CCard';

import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';

const HomePage: React.FC = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 949);
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={responsive ? 24 : 18}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              {' '}
              <ACard />{' '}
            </Col>
            <Col span={24}>
              {' '}
              <BCard />{' '}
            </Col>
            {/* <Col span={24}> <MiniCard /> </Col> */}
          </Row>
        </Col>
        <Col span={responsive ? 24 : 6}>
          {' '}
          <CCard />{' '}
        </Col>
      </Row>
    </RcResizeObserver>
  );
};

export default HomePage;
