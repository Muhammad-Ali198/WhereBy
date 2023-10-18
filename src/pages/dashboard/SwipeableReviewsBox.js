import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import Accurx from "../../assets/svgs/Accurx.svg";
import Wellnite from "../../assets/svgs/Wellnite.svg";
import EduShark from "../../assets/svgs/EduShark.svg";
import { autoPlay } from "react-swipeable-views-utils";
import bgOverlay from "../../assets/images/dashboard/overlay.webp";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, MobileStepper, Typography } from "@mui/material";
import aeroplaneProp from "../../assets/images/dashboard/aeroplaneProp.png";
import ladyProp from "../../assets/images/dashboard/ladyProp.png";
import reviewerImage1 from "../../assets/images/dashboard/reviewerImage1.jpg";
import reviewerImage2 from "../../assets/images/dashboard/reviewerImage2.jpg";
import reviewerImage3 from "../../assets/images/dashboard/reviewerImage3.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableReviewsBox = () => {
  const theme = useTheme();
  const maxSteps = images.length;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box
        sx={{
          p: 2,
          borderRadius: 3,
          position: "relative",
          //   minHeight: 300,
          backgroundImage: `url(${bgOverlay})`,
          backgroundSize: "cover",
          backgroundColor: "#F8DBD5",
          width: "-webkit-fill-available"
        }}>
        <Box
          component="img"
          alt="Medical Images."
          src={aeroplaneProp}
          sx={{
            top: 20,
            left: 20,
            position: "absolute",
            width: { xs: 80, sm: 100, md: 180 }
          }}
        />
        <Box
          component="img"
          alt="Medical Images."
          src={ladyProp}
          sx={{
            width: 150,
            right: 10,
            bottom: 10,
            position: "absolute",
            display: { xs: "none", sm: "none", md: "block" }
          }}
        />
        <Typography>{images[activeStep]?.label}</Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          interval={5000}
          onChangeIndex={handleStepChange}>
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    pt: 2,
                    display: "flex",
                    overflowY: "hidden",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "-webkit-fill-available"
                  }}>
                  <Box component="img" src={step?.companyImage} my={10} width={160} />
                  <Typography
                    lineHeight={1.1}
                    fontFamily={"Custom-Roslinda"}
                    textAlign={"center"}
                    px={{ xs: 6, sm: 6, md: 10 }}
                    fontSize={{ xs: 30, sm: 36, md: 48 }}>
                    {step.msg}
                  </Typography>
                  <Box py={6} gap={2} display={"flex"} alignItems={"center"}>
                    <Box
                      component="img"
                      alt="Medical Images."
                      src={step?.reviewerImage}
                      width={60}
                      maxHeight={60}
                      borderRadius={2}
                    />
                    <Box>
                      <Typography fontWeight={"bold"} fontFamily={'"Inter", sans-serif'}>
                        {step?.reviewerName}
                      </Typography>
                      <Typography fontFamily={'"Inter", sans-serif'}>
                        {step?.reviewerDesignation}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <MobileStepper
        sx={{
          mt: 2,
          display: "flex",
          background: "transparent",
          justifyContent: "space-evenly"
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            disableRipple
            onClick={handleNext}
            sx={{ visibility: activeStep === maxSteps - 1 && "hidden", color: "black" }}>
            <ArrowForwardIcon />
          </Button>
        }
        backButton={
          <Button
            disableRipple
            size="small"
            onClick={handleBack}
            sx={{ visibility: activeStep === 0 && "hidden", color: "black" }}>
            <ArrowBackIcon />
          </Button>
        }
      />
    </>
  );
};

export default SwipeableReviewsBox;

const images = [
  {
    companyImage: Wellnite,
    msg: "“Whereby's tools have been a game changer for us. We can create HIPAA-compliant video rooms for every single session. It's perfectly compliant with every rule and regulation.”",
    reviewerImage: reviewerImage1,
    reviewerName: "Paulo González",
    reviewerDesignation: "CEO & Co-founder - Wellnite"
  },
  {
    companyImage: EduShark,
    msg: "“Within two hours, our developer was able to implement more than he had in the eight months prior with Agora.”",
    reviewerImage: reviewerImage2,
    reviewerName: "Andrew Mowat",
    reviewerDesignation: "CEO & Co-founder - EduSpark"
  },
  {
    companyImage: Accurx,
    msg: "“With Whereby, neither physicians nor their patients need to download an app or remember a specific login, they can jump right into a video call — saving admin time from eating into clinic appointments.”",
    reviewerImage: reviewerImage3,
    reviewerName: "Donnie Belfon",
    reviewerDesignation: "Product Manager - accuRx"
  }
];
