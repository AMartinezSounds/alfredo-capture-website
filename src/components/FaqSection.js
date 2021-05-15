import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Believe us. We would like to listen to your idea.</p>
            <p>
              It is very important we all are in the same page, so we will agree a call through Skype. We want to see your face no matter where you are.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>We are open 24/7... or kind of.</p>
            <p>
              We spend tons of hours in our office every day so it is almost impossible not to meet us.
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferent Payment Methods">
          <div className="answer">
            <p>We accept different payment methods. Bitcoins included.</p>
            <p>
              We accept payments with Paypal, bank transfers or Bizum.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer.">
          <div className="answer">
            <p>We offer a question: What does your project need?</p>
            <p>
              Do not worry for what we can do. Really, just tell us your idea, we will take care of the rest.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
