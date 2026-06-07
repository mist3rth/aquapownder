import React from 'react';
import { FAQItem } from '../ui/FAQItem';
import { FAQ_DATA } from '../../constants/data';

export const FAQ: React.FC = () => {
  return (
    <section className="tile-faq reveal active" id="faq">
      <div className="faq-inner">
        <h2>Questions fréquentes.</h2>
        {FAQ_DATA.map((item) => (
          <FAQItem key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};
