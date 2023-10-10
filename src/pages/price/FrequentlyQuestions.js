import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { Faq } from "../../assets/AssetsExport";
import { ExpandMore } from "@mui/icons-material";

const FrequentlyQuestions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box bgcolor={"white"} py={5} pb={15}>
      <Container
        maxWidth={"md"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: ""
        }}>
        <Box mb={8}>
          <img width={120} src={Faq} />
        </Box>
        <Typography fontSize={48} fontWeight={"bold"} mb={10} fontFamily={"EB Garamond, serif"}>
          Frequently asked questions
        </Typography>
        <Box>
          {faqData.map((itm, idx) => (
            <Accordion
              component={"div"}
              expanded={expanded === `panel${idx}`}
              onChange={handleChange(`panel${idx}`)}
              key={idx}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Typography py={2}>{itm.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{itm.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FrequentlyQuestions;

const faqData = [
  {
    question: "How many participants can join the meeting?",
    answer:
      "Free and Pro plans allow up to 100 participants, Business plans can have up to 200 participants."
  },
  {
    question: "How many people can use one license?",
    answer:
      "You can host an unlimited number of meetings but if you would like to have more than one meeting concurrently, you will need additional user licenses."
  },
  {
    question: "What is the difference between the Free and Pro plans?",
    answer:
      "Both Free and Pro plans allow for unlimited 1 meetings with no time limit. The Free plan has a 45-minutes time limit for each meeting with three or more total participants. If you need your group meetings to last longer than 45 minutes, you can sign up for a Pro account. Pro also includes recording and custom branding."
  },
  {
    question: "Can I pay annually instead of monthly?",
    answer:
      "You sure can. Both the Pro and Business plans can be paid monthly or annually. Plus you'll get a discount if you pay for the whole year!"
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "You can cancel your subscription to Whereby at any time. You will continue to receive the features you've paid for until the end of that billing cycle."
  },
  {
    question: "Is the Free plan always free?",
    answer:
      "Yes! We will never ask for payment on our Free plan, but there will be a 45-minute time limit on every meeting you have with 3 or more participants."
  },
  {
    question: "Will my meetings be private?",
    answer:
      "our Whereby meeting room will be locked as default meaning any guest will have to 'Knock' and be approved to join the meeting by you. A meeting cannot start until the owner of the user license has joined. We also offer encrypted video calls on every meeting with 4 participants or less."
  }
];
