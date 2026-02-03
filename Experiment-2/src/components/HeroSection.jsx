import { Container, Button } from 'react-bootstrap'

const HeroSection = () => {
    return (
        <div className="hero">
        <Container className="text-center text-white">
        <h1>Build Faster with TechNova</h1>
        <p>Modern solutions for modern startups</p>
        <Button variant="primary" size="lg">Get Started</Button>
        </Container>
        </div>
    )
}

export default HeroSection
