import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';
import Worklist from './Worklist';

const Works = () => {
  return (
    <>

    <FadeInSection>
    <div className="container">
      <div className="text-center my-20">
        <h2 className="content-heading relative text-4xl md:text-5xl text-center my-10"><strong><span className="inline text-red">My Clients</span> - My Success</strong></h2>
        <p className="px-10">Keep clients informed throughout the project. Regular updates and transparent communication help build trust and prevent misunderstandings. Be open to feedback and willing to make iterates. Flexibility shows that you value their input and are committed to delivering the best possible outcome.</p>
      </div>
    </div>
    </FadeInSection>

    <div className="container">
      <div className="my-10 py-5">
        <div className="my-work-list flex flex-wrap justify-evenly gap-12">
          <Worklist />
        </div>
      </div>
    </div>

    <FadeInSection>
    <div className="container">
      <div className="text-center my-32 px-10">
        <h2 className="text-4xl md:text-5xl text-center my-10"><strong>Employer - Customer - <span className="inline-block color-darkpink">Bonding</span></strong></h2>
        <p className="mb-10">Building a strong bond between customers and employers is essential for long-term success and loyalty. Customer satisfaction is a crucial aspect of any business, especially in design and development.</p>
        <Button btnlink='patrons' btnstyle='btn-primary' label='ALL MY EMPLOYERS' />
      </div>
    </div>
    </FadeInSection>

    </>
  );
}

export default Works;