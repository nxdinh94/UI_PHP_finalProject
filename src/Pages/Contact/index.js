import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './Contact.scss';

function Contact() {
    return (
        <Container fluid className="co-contact">
            <Container>
                <Row>
                    <Col lg="6" className="co-text">
                        <p className="h1">Liên hệ với chúng tôi</p>
                        <p className="discipt">
                            Hệ thống dịch vụ chăm sóc thú cưng chuyên nghiệp, cung cấp nhiều dịch vụ chăm sóc, bảo vệ
                            thú cưng.
                        </p>
                        <Row>
                            <Col lg="10" className="d-flex list-card">
                                <div className="cards">
                                    <img src="/images/icons8/icons8-email-80.png" loading="lazy" alt="alternative" />
                                    <p className="h3">Email</p>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=pettuvn@gmail.com&su=SUBJECT&body=BODY"
                                        target="_blank"
                                    >
                                        petvn@gmail.com
                                    </a>
                                </div>
                                <div className="cards">
                                    <img src="/images/icons8/icons8-location-80.png" loading="lazy" alt="alternative" />
                                    <p className="h3">Địa chỉ</p>
                                    <a href="#mymap">470 Đường Trần Đại Nghĩa - phường Hòa Quý</a>
                                </div>
                                <div className="cards">
                                    <img src="/images/icons8/icons8-phone-80.png" loading="lazy" alt="alternative" />
                                    <p className="h3">Hotline</p>
                                    <a href="https://zalo.me/0384566800" target="_blank">
                                        0384566800
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" className="co-img">
                        <img src="/images/team/team-alt-1.jpg" loading="lazy" className="img-fluid" alt="alternation" />
                    </Col>
                </Row>

                <Row className="my-3">
                    <Col>
                        <div className="maps">
                            <iframe
                                id="mymap"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.7470406684765!2d108.24970943867771!3d15.974581142030233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421088e365cc75%3A0x6648fdda14970b2c!2zNDcwIMSQxrDhu51uZyBUcuG6p24gxJDhuqFpIE5naMSpYSwgSG_DoCBI4bqjaSwgTmfFqSBIw6BuaCBTxqFuLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1687253012088!5m2!1svi!2s"
                                width="600"
                                height="450"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Contact;
