import './Service.scss';
import { Container, Row, Col } from 'reactstrap';
function Service() {
    return (
        <div className="container-fluid" style={{ padding: '10px 0px' }}>
            <Container fluid style={{ backgroundColor: '#F6F6F6', margin: '40px 0px' }}>
                <Container>
                    <Row className="py-5">
                        <Col md="12" lg="6">
                            <div className="checkin-img">
                                <img
                                    src="images/services/service_details-2.jpg"
                                    alt="alternative"
                                    className="img-fluid ser-img"
                                />
                            </div>
                        </Col>
                        <Col md="12" lg="6">
                            <div className="services">
                                <p className="my-1">
                                    <img className="iconCat" src={'/images/icons8/icons8-cat-footprint-16.png'} />
                                    <span className="topic1">Chúng tôi cung cấp</span>
                                </p>
                                <h2 className="topic2">THĂM KHÁM BỆNH ĐỊNH KÌ</h2>
                                <div>
                                    <p className="p-text">
                                        <bold className="fw-bold">
                                            Các cuộc khám sức khỏe định kỳ để kiểm tra sức khỏe của thú cưng của bạn và
                                            phát hiện sớm các vấn đề sức khỏe trước khi chúng trở nên nghiêm trọng.
                                        </bold>
                                        <br />
                                        Giúp phát hiện sớm các bệnh lý và điều trị chúng trước khi chúng trở nên nghiêm
                                        trọng. <br />
                                        Kiểm tra sức khỏe tổng thể của thú cưng của bạn và đảm bảo chúng được cung cấp
                                        đủ dinh dưỡng và các chất dinh dưỡng cần thiết. <br />
                                        Đưa ra các lời khuyên và hướng dẫn để giúp bạn chăm sóc thú cưng của mình tốt
                                        hơn.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid style={{ backgroundColor: 'antiquewhite', margin: '40px 0px', height: '460px' }}>
                <Container>
                    <Row className="py-5">
                        <Col md="12" lg="6" xl="6">
                            <div class="img-contain">
                                <div class="con-image">
                                    <img src="/images/dog/dogbg1.png" alt="alternation" />
                                </div>
                            </div>
                        </Col>
                        <Col md="12" lg="6">
                            <div class="con-text text-center text-center">
                                <p class="topic2">NHỮNG CHUYẾN ĐI THÚ VỊ</p>
                                <p class="p-text">
                                    Những chuyến đi thú vị này sẽ giúp thú cưng của bạn có những trải nghiệm mới lạ và
                                    thú vị, và đồng thời cũng giúp bạn tăng cường mối quan hệ với chúng. Tuy nhiên, hãy
                                    nhớ luôn giữ an toàn và đảm bảo rằng thú cưng của bạn được tiêm phòng đầy đủ và có
                                    giấy tờ bảo hiểm sức khỏe trước khi đi chuyến đi nào.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
export default Service;
