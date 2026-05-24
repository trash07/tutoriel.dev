import * as React from 'react';
import IndexLayout from '../components/layout/IndexLayout';

const AboutPage = () => (
  <IndexLayout>
    <div className="hero">
      <div className="hero-label">À propos</div>
      <h1>À propos de tutoriel.dev</h1>
      <p>
        tutoriel.dev est un jardin digital communautaire dédié au partage de
        connaissances techniques. L'objectif est de rendre les sujets complexes
        accessibles à tous.
      </p>
    </div>
    <div className="list">
      <div className="tutorial-item">
        <h2>Notre mission</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginTop: 8 }}>
          Cibler la compréhension plutôt que la simple exécution. Chaque
          tutoriel publié ici vise à expliquer le pourquoi autant que le
          comment.
        </p>
      </div>
      <div className="tutorial-item">
        <h2>Contribuer</h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginTop: 8 }}>
          Ce site est ouvert aux contributions. Contactez-nous si vous souhaitez
          partager vos connaissances et animer cette communauté.
        </p>
      </div>
    </div>
  </IndexLayout>
);

export const Head = () => <title>À propos - tutoriel.dev</title>;

export default AboutPage;
