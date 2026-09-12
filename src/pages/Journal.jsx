import { useState } from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { articles } from '../data/journal';
export default function Journal() {
  const [article, setArticle] = useState(null);
  return (
    <section className="section page-top">
      <Container>
        <SectionTitle
          eyebrow="TRAIL JOURNAL"
          title="Stories From Higher Ground"
          text="Field notes, practical wisdom and portraits from across the Himalayas."
        />
        <div className="card-grid">
          {articles.map((a) => (
            <Card className="article" key={a.title}>
              <img src={a.image} alt="" />
              <div>
                <span className="overline">
                  {a.category} · {a.date}
                </span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <button onClick={() => setArticle(a)}>Read story →</button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
      <Modal
        open={!!article}
        onClose={() => setArticle(null)}
        title={article?.title}
      >
        <p>{article?.excerpt}</p>
        <p>
          The trail teaches patience: one step, one breath and one wide horizon
          at a time. Full journal entry coming soon.
        </p>
      </Modal>
    </section>
  );
}
