import { Container } from "@mui/material";
import Link from '@mui/material/Link';
import { Row } from "react-bootstrap";

const Footer = () => {
    return (
        <Container className="footer">
            <Row className="align-center">
                2022 | Lautaro Lezchik | Trabajo final curso React JS
            </Row>
            <Row>
                <Link href="https://www.linkedin.com/in/lautaro-lezchik/">LinkedIn</Link>
            </Row>
        </Container>
    );
}

export default Footer;