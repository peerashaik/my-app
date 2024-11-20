import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';
import Worklist from './Worklist';

const Works = () => {
  return (
    <>
    <div className="content">

      <FadeInSection>
      <div className="container">
        <div className="blockquote text-center my-10">
          <h2 className="content-heading text-center text-uppercase mb-3"><strong><span className="text-red">Clients</span> . Success</strong></h2>
          <p className="px-10">Keep clients informed throughout the project. Regular updates and transparent communication help build trust and prevent misunderstandings. Be open to feedback and willing to make iterates. Flexibility shows that you value their input and are committed to delivering the best possible outcome.</p>
        </div>
      </div>
      </FadeInSection>

      <div className="container my-10 py-5">
        <div className="my-work-list" id="scrollspy-works" data-bs-spy="scroll" data-bs-offset="0">
          <Worklist />
        </div>
      </div>

      <FadeInSection>
      <div className="container">
        <div className="blockquote text-center my-10 px-10">
          <h2 className="mb-3 text-center text-uppercase"><strong>Employer . Customer . <span className="color-darkpink">Bonding</span></strong></h2>
          <p>Building a strong bond between customers and employers is essential for long-term success and loyalty. Customer satisfaction is a crucial aspect of any business, especially in design and development.</p>
          <Button btnlink='patrons' btnstyle='btn-primary' label='ALL MY EMPLOYERS' />
        </div>
      </div>
      </FadeInSection>

    </div>
    </>
  );
}

export default Works;