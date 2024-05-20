import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
//กำหนดรูปภาพได้
const items = [
  {
    src: require("assets/img/small/1.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/small/2.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/small/3.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/small/4.png"),
    altText: "",
    caption: "",
    header: "",
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            
          </div>
          <Container className="py-md-7">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="6">
                <h1 className="text-white font-weight-light">
                  DISC หลักการบุคลิกภาพในรูปแบบของสัตว์ 4 ทิศที่ต้องรู้
                </h1>
                <p className="lead text-mute  mt-4">
                รู้จักตัวตนและบุคลิกตัวเองในรูปแบบของสัตว์ทั้ง 4 ทิศ พร้อมทำแบบทดสอบเพื่อวัดบุคลิกภาพว่าอยู่ในรูปแบบสัตว์ชนิดใด<br/> 
                </p>
                <Button
                  className="btn-white mt-1 "
                  color="default"
                  href="http://localhost:3001/theory"
                  
                >
                  อ่านเพิ่มเติม
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
