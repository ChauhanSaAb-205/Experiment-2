import { Container, Row, Col } from 'react-bootstrap'
import { Card, CardContent, Typography, Button } from '@mui/material'

const CardComponent = () => {
    const features = [
        { title: "Fast Performance", desc: "Optimized and lightning fast." },
        { title: "Secure", desc: "Top-level security built-in." },
        { title: "Scalable", desc: "Grow without limits." }
    ]

    return (
        <Container className="my-5">
        <Row>
        {features.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
            <Card elevation={3}>
            <CardContent>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2" color="text.secondary">
            {item.desc}
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
            Learn More
            </Button>
            </CardContent>
            </Card>
            </Col>
        ))}
        </Row>
        </Container>
    )
}

export default CardComponent
