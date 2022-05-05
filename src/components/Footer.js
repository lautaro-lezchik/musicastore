import { Container, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { Row } from "react-bootstrap";

const Footer = () => {
    return (
        <Container className="footer">
            <Row className="footerText">
                <Typography gutterBottom variant="p" component="div">
                    2022 &nbsp;&nbsp;| &nbsp;&nbsp; Lautaro Lezchik&nbsp;&nbsp;  | &nbsp;&nbsp; Trabajo final curso React JS
                </Typography>
            </Row>
            <Row>
                <Link href="https://www.linkedin.com/in/lautaro-lezchik/" className="linkedinLink">LinkedIn</Link>
            </Row>
        </Container>
    );
}

export default Footer;