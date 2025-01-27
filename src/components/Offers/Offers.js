import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Offers.css";

function FAQ() {
  const faqs = [
    {
      question: "What services does Capital Stay Rentals offer?",
      answer: `
        Capital Stay offers comprehensive management, guest communication, pricing & revenue
        management, and a user-friendly online portal where landlords can manage their properties.
        Guests enjoy seamless booking with instant confirmation, secure payments, personalized
        guest services, concierge assistance, and round-the-clock support.
      `,
    },
    {
      question: "Why choose Capital Stay Holiday Homes?",
      answer: `
        Holiday homes offer home-like comfort with more space and amenities compared to traditional
        hotel rooms. They provide a personalized and cost-effective option for families or groups,
        with features like kitchen facilities to save on dining costs. Capital Stay Holiday Homes
        are located in diverse, scenic locations, from beachside villas to mountain cabins.
      `,
    },
    {
      question: "What are the benefits of staying in a holiday home?",
      answer: `
        Holiday homes provide an authentic experience by immersing guests in the local culture and
        community. They offer privacy, flexibility to cook meals, and leisure activities at your
        own pace, making them ideal for travelers seeking a unique, comfortable, and economical
        stay.
      `,
    },
    {
      question: "How are holiday homes cost-effective?",
      answer: `
        Renting a holiday home can be more economical than booking multiple hotel rooms, especially
        for families or groups. The inclusion of kitchen facilities allows guests to save on dining
        costs while enjoying a comfortable and spacious environment.
      `,
    },
    {
      question: "What makes Capital Stay Holiday Homes unique?",
      answer: `
        Capital Stay Holiday Homes offer unique locations, from beachside villas to mountain cabins,
        ensuring scenic and memorable stays. They provide both property owners and guests with
        lucrative and flexible investment and travel opportunities.
      `,
    },
  ];

  return (
    <div className="faq-section py-5 bg-light">
      <div className="container">
        <h2 className="text-black fw-bold text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
