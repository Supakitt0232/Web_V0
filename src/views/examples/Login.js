import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";


class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    const handleSubmit = (event) => {
      event.preventDefault()
      const data = new FormData()
      const jsonData = {
        username : data.get('username'),
        password : data.get('password')
      }

      fetch('http://localhost:3333/login',{
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body:JSON.stringify(jsonData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success',data)
      })
      .catch((error) => {
        console.error('Error',error)
      })
    }
    
  return(
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
            <Container className="pt-lg-1">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-2">
                      <div className="btn-wrapper text-center">
                      <span className="btn-inner--icon ml-4">
                            <img
                              alt="..."
                              src={
                                require("assets/img/brand/logo1.png")
                              }
                              height={100}
                              width={200}
                            />
                          </span>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5 ">
                      <div className="text-center text-muted mb-4">
                        <big className="text-success">สำหรับนักศึกษา</big>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="ชื่อผู้ใช้งาน" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="รหัสผ่าน"
                              type="password"
                              autoComplete="off"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>จดจำรหัสผ่าน</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={handleSubmit}
                          >
                            เข้าสู่ระบบ
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>ลืมรหัสผ่านใช่หรือไม่?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="http://localhost:3000/register-page"
                        // onClick={(e) => e.preventDefault()}
                      >
                        <small>ยังไม่มีบัญชีใช่ไหม สร้างกันเลย</small>
                      </a>
                    </Col>
                    
                    
                  </Row>
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

export default Login;
