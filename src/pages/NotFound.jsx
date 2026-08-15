import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { useLanguage } from '../i18n/LanguageContext';

function NotFound() {
  const { t } = useLanguage();
  return (
    <div
      className="section d-flex align-items-center justify-content-center text-center mt-5"
      style={{ minHeight: '60vh', backgroundColor: 'var(--bg-light)' }}
    >
      <Seo title={t.notFound.seoTitle} description={t.notFound.seoDesc} noindex />
      <Container>
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#111f5a' }}>
          {t.notFound.title}
        </h1>
        <p className="lead text-muted mb-4">{t.notFound.desc}</p>
        <Button
          variant="primary"
          style={{ backgroundColor: '#111f5a', borderColor: '#111f5a' }}
          as={Link}
          to="/"
        >
          {t.notFound.backHome}
        </Button>
      </Container>
    </div>
  );
}

export default NotFound;
