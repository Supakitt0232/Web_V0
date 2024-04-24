<<<<<<< Updated upstream
import React from "react";


import {
    Badge,
    Button,
    UncontrolledTooltip,
    Container,
    Row,
    Col,
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Theory extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                <DemoNavbar />
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-lg section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <Container className="mt-5">
                                <Row className="row-grid justify-content-center">
                                    <Col className="text-center" lg="12">
                                        <h2 className="display-1">
                                            สัตว์ 4 ทิศ คืออะไร? {" "}
                                        </h2>
                                        <span>
                                            สัตว์ 4 ทิศ หรือ DISC Peronality เป็นทั้งแบบทดสอบค้นหาตัวเองและแบบทดสอบบุคลิกภาพเกี่ยวกับลักษณะนิสัยและลักษณะการทำงานของคน 4 แบบ คือ D (Dominance), I (Influence), S (Steadiness) และ C (Compliance) โดยจะเปรียบเป็นสัตว์ทั้ง 4 ชนิดหรือสัตว์ 4 ทิศ ได้แก่ กระทิง, อินทรี, หนู และหมีตามลำดับ
                                            การที่เราได้รู้จักหรือได้เช็กตนเองจาก สัตว์ 4 ทิศ ก็เป็นส่วนหนึ่งแบบทดสอบแนะแนวอาชีพและการทายนิสัยด้วยเช่นกัน เพราะจะช่วยให้เข้าใจตนเองและรู้จักตัวตนมากขึ้น รวมถึงมองเห็นจุดแข็งและจุดอ่อนของตนเอง ประกอบการ
                                            ตัดสินใจก่อนเลือกอาชีพและเป็นการปรับตัวก่อนที่จะไปทำงานร่วมกับผู้อื่น ซึ่งแน่นอนว่า นอกจากจะได้รู้จักตัวตนตนเองแล้ว ยังได้รู้จักตัวตนของคนรอบข้างอีกด้วย
                                        </span>

                                        <div className="text-center">
                                            <h4 className="display-4 mb-5 mt-5">
                                            ลักษณะของสัตว์ทั้ง 4 ชนิด จะมีอะไรบ้าง ไปดูกัน
                                            </h4>

                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container>
                                <Row className="row-grid align-items-center">
                                    <Col className="order-md-2 pl-8 " md="6">
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            src={require("assets/img/theme/bull.jpg")}
                                        />
                                    </Col>
                                    <Col className="order-md-1 " md="6">
                                        <div className="pr-md-1">

                                            <h3>กระทิง</h3>
                                            <p>
                                                ใจร้อน จริงจังในทุก ๆ เรื่อง กล้าแสดงออกและกล้าได้กล้าเสีย เมื่อมีเป้าหมายแล้วคนลักษณะนี้จะพร้อมพุ่งชนทันที เรียกได้ว่าทำทุกอย่างอย่างรวดเร็วและทันใจ ชอบการแข่งขันและตนเองจะต้องเป็นผู้ชนะเท่านั้น โดยส่วนใหญ่มักชอบทำอะไรด้วยตนเองก่อน
                                            </p>
                                            <ul className="list-unstyled mt-5">
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="fa fa-star" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                มีความเป็นผู้นำ จริงจัง รักพวกพ้อง  สามารถปกป้องคนรอบข้างได้
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="danger"
                                                            >
                                                                <i className="fa fa-times" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                เชื่อมั่นตัวเองมากไป ชอบควบคุมคนอื่น ชอบเปรียบเทียบตนเองกับผู้อื่น
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="warning"
                                                            >
                                                                <i className="fa fa-line-chart" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                ต้องรู้จักอดทน รอคอย ทบทวน และยอมรับความผิดพลาด
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container className="mt-5">
                                <Row className="row-grid align-items-center">
                                    <Col className="order-md-2 pl-8 " md="6">
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            src={require("assets/img/theme/bull.jpg")}
                                        />
                                    </Col>
                                    <Col className="order-md-1 " md="6">
                                        <div className="pr-md-1">
                                            <h3>อินทรีย์</h3>
                                            <p>
                                                สุดยอดนักสร้างสรรค์ในองค์กร มีไอเดียที่แปลกใหม่ มีเรื่องราวที่ทำให้ผู้อื่นรู้สึกลุ้นและตื่นเต้นตามได้เสมอ
                                                มองโลกในภาพกว้าง ชอบการเปลี่ยนแปลง รักอิสระ รักในการสร้างสรรค์
                                                ช่างจินตนาการ มีความกระตือรือร้นตลอดเวลา
                                            </p>
                                            <ul className="list-unstyled mt-5">
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="fa fa-star" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                มีไหวพริบ มักมีวิธีคิดและขั้นตอนการทำงานที่แตกต่างไปจากคนอื่น ๆ
                                                                สามารถเชื่อมโยงสิ่งต่าง ๆ และสร้างสรรค์ออกได้อย่างลงตัว
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="danger"
                                                            >
                                                                <i className="fa fa-times" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">ไม่ค่อยมีงานที่เป็นชิ้นเป็นอัน เพราะมีไอเดียและโปรเจ็กต์ใหม่ ๆ ที่อยากทำแทรกเข้ามาตลอด</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="warning"
                                                            >
                                                                <i className="fa fa-line-chart" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                ควรจัดลำดับความสำคัญของงาน และลงมือทำอย่างจริงจัง โฟกัสรายละเอียดงานแต่ละงานให้ลึกซึ้ง
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container className="mt-5">
                                <Row className="row-grid align-items-center">
                                    <Col className="order-md-2 pl-8 " md="6">
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            src={require("assets/img/theme/bull.jpg")}
                                        />
                                    </Col>
                                    <Col className="order-md-1 " md="6">
                                        <div className="pr-md-1">

                                            <h3>หนู</h3>
                                            <p>
                                                อ่อนไหวง่าย ใช้อารมณ์มากกว่ากำลังหรือเหตุผล ใจดี มีเมตตา ชอบช่วยเหลือผู้อื่นเสมอ เปรียบเสมือนแม่พระในที่ทำงาน มองโลกในแง่ดี นักสานสัมพันธ์กับเพื่อร่วมงาน อ่อนน้อม ประนีประนอม สามารถไกล่เกลี่ยความขัดแย้งของเพื่อนร่วมงานได้
                                            </p>
                                            <ul className="list-unstyled mt-5">
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="fa fa-star" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                มีน้ำใจ ปรับตัวเข้ากับคนอื่นได้ง่าย เป็นมิตร สร้างเสียงหัวเราะและความสุขให้กับคนรอบข้างได้
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="danger"
                                                            >
                                                                <i className="fa fa-times" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                ขาดความเชื่อมั่นในตนเอง ขี้กลัว และขี้เกรงใจ ยอมคนง่ายจน ทำให้ถูกเอารัดเอาเปรียบบ่อย ๆ
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="warning"
                                                            >
                                                                <i className="fa fa-line-chart" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                พยายามเพิ่มความกล้า กล้าในการปฏิเสธและกล้าที่จะต่อสู้ในความขัดแย้ง รวมถึงต้องสร้างความเชื่อมั่นในตนเองให้มากขึ้น
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <Container className="mt-5">
                                <Row className="row-grid align-items-center">
                                    <Col className="order-md-2 pl-8 " md="6">
                                        <img
                                            alt="..."
                                            className="img-fluid"
                                            src={require("assets/img/theme/bull.jpg")}
                                        />
                                    </Col>
                                    <Col className="order-md-1 " md="6">
                                        <div className="pr-md-1">
                                            <h3>หมี</h3>
                                            <p>
                                                เน้นทำงานอย่างช้า ๆ มีความรอบคอบ ชอบในหลักการและทฤษฎี งานทุกชิ้นจะต้องออกมาเป๊ะ ใช้ตรรกะและเหตุผลเข้ามาสนับสนุนเสมอ
                                                ชอบจดจ่อกับสิ่งใดสิ่งหนึ่ง และโลกส่วนตัวสูง
                                            </p>
                                            <ul className="list-unstyled mt-5">
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="success"
                                                            >
                                                                <i className="fa fa-star" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                เป็นคนละเอียด แม่นยำ รอบคอบถี่ถ้วน และมีความรับผิดชอบสูง รวมถึงมีระบบระเบียบหลักการ ทฤษฎี และกฎเกณฑ์ที่ชัดเจน
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="danger"
                                                            >
                                                                <i className="fa fa-times" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                ไม่ชอบการเปลี่ยนแปลง ขาดไอเดียและแนวคิดใหม่ ๆ ขาดความยืดหยุ่นในการทำงาน เพราะพื้นฐานเป็น
                                                                คนยึดติดและมุ่งมั่นกับสิ่งใดสิ่งหนึ่ง
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Badge
                                                                className="badge-circle mr-3"
                                                                color="warning"
                                                            >
                                                                <i className="fa fa-line-chart" />
                                                            </Badge>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">
                                                                ไม่มีจุดที่ต้องแก้ไข
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>
                </main>
                <SimpleFooter />
            </>
        );
    }
}
export default Theory;
=======
>>>>>>> Stashed changes
