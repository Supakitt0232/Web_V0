import React from "react";
import { Button, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Start extends React.Component {
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
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-9 pb-9">
              <Row className="justify-content-center">
                <Col lg="5">
                  <CardBody className="px-lg-5 py-lg-5 ">
                    <Form role="form">                                          

                      <div className="text-center">
                        <Button className="my-4" color="primary" type="button">
                          เริ่มต้น
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Start;
