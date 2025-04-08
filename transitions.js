document.addEventListener("DOMContentLoaded", function () {
    // Animate the carousel-cta
    const carCta = document.getElementById('car-cta');
    let carCtaAnimated = false;
    carCta.style.opacity = 0;
    carCta.style.transform = 'translateX(-50%) scale(0.8)';
    function animateCarCta() {
      const rect = carCta.getBoundingClientRect();
      if (!carCtaAnimated && rect.top >= 0 && (rect.bottom + 80) < window.innerHeight) {
        carCta.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
        carCta.style.opacity = 1;
        carCta.style.transform = 'translateX(-50%) scale(1)';
        carCtaAnimated = true;
      }
    }
    window.addEventListener('scroll', animateCarCta);


    // Image 1 Animation
    const image1 = document.getElementById('image-1');
    let image1Animated = false;
    image1.style.opacity = 0;
    image1.style.transform = 'scale(0.8)';
    function animateImage1() {
      const rect = image1.getBoundingClientRect();
      if (!image1Animated && rect.top >= 0 && (rect.bottom - 20) < window.innerHeight) {
        image1.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
        image1.style.opacity = 1;
        image1.style.transform = 'scale(1)';
        image1Animated = true;
      }
    }
    window.addEventListener('scroll', animateImage1);



    // Image 2 Animation
    const image2 = document.getElementById('image-2');
    let image2Animated = false;
    image2.style.opacity = 0;
    image2.style.transform = 'scale(0.8)';
    function animateImage2() {
        const rect = image2.getBoundingClientRect();
        if (!image2Animated && rect.top >= 0 && (rect.bottom - 20)< window.innerHeight) {
        image2.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
        image2.style.opacity = 1;
        image2.style.transform = 'scale(1)';
        image2Animated = true;
        }
    }
    window.addEventListener('scroll', animateImage2);



    // Animate image 3
    const image3 = document.getElementById('image-3');
    let image3Animated = false;
    image3.style.opacity = 0;
    image3.style.transform = 'scale(0.8)';
    function animateImage3() {
        const rect = image3.getBoundingClientRect();
        if (!image3Animated && rect.top >= 0 && (rect.bottom - 20) < window.innerHeight) {
        image3.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
        image3.style.opacity = 1;
        image3.style.transform = 'scale(1)';
        image3Animated = true;
        }
    }
    window.addEventListener('scroll', animateImage3);



    // Texts Swim Animation
    const textsSwim = document.getElementById('texts-swim');
    let textsSwimAnimated = false;
    textsSwim.style.opacity = 0;
    textsSwim.style.transform = 'scale(0.8)';
    function animateTextsSwim() {
        const rect = textsSwim.getBoundingClientRect();
        if (!textsSwimAnimated && rect.top >= 0 && (rect.bottom + 140) < window.innerHeight) {
          textsSwim.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
          textsSwim.style.opacity = 1;
          textsSwim.style.transform = 'scale(1)';
          textsSwimAnimated = true;
        }
    }
    window.addEventListener('scroll', animateTextsSwim);


    // Benefits Heading 1 Animation
    const benefitsHeading1 = document.getElementById('benefits-heading-1');
    let benefitsHeading1Animated = false;
    benefitsHeading1.style.opacity = 0;
    benefitsHeading1.style.transform = 'translateY(30px)';
    function animateBenefitsHeading1() {
      const rect = benefitsHeading1.getBoundingClientRect();
      if (!benefitsHeading1Animated && rect.top >= 0 && (rect.bottom + 110) < window.innerHeight) {
        benefitsHeading1.style.transition = 'transform 1.4s ease, opacity 1.4s ease';
        benefitsHeading1.style.opacity = 1;
        benefitsHeading1.style.transform = 'translateY(0)';
        benefitsHeading1Animated = true;
      }
    }
    window.addEventListener('scroll', animateBenefitsHeading1);



    // Benefits Heading 2 Animation
    const benefitsHeading2 = document.getElementById('benefits-heading-2');
    let benefitsHeading2Animated = false;
    benefitsHeading2.style.opacity = 0;
    benefitsHeading2.style.transform = 'translateY(30px)';
    function animateBenefitsHeading2() {
      const rect = benefitsHeading2.getBoundingClientRect();
      if (!benefitsHeading2Animated && rect.top >= 0 && (rect.bottom + 110) < window.innerHeight) {
        benefitsHeading2.style.transition = 'transform 1.4s ease, opacity 1.4s ease';
        benefitsHeading2.style.opacity = 1;
        benefitsHeading2.style.transform = 'translateY(0)';
        benefitsHeading2Animated = true;
      }
    }
    window.addEventListener('scroll', animateBenefitsHeading2);



    // Benefits Heading 3 Animation
    const benefitsHeading3 = document.getElementById('benefits-heading-3');
    let benefitsHeading3Animated = false;
    benefitsHeading3.style.opacity = 0;
    benefitsHeading3.style.transform = 'translateY(30px)';
    function animateBenefitsHeading3() {
      const rect = benefitsHeading3.getBoundingClientRect();
      if (!benefitsHeading3Animated && rect.top >= 0 && (rect.bottom + 110) < window.innerHeight) {
        benefitsHeading3.style.transition = 'transform 1.4s ease, opacity 1.4s ease';
        benefitsHeading3.style.opacity = 1;
        benefitsHeading3.style.transform = 'translateY(0)';
        benefitsHeading3Animated = true;
      }
    }
    window.addEventListener('scroll', animateBenefitsHeading3);



    // Animate benefit item 1-1 (right section)
    const benefitItem11 = document.getElementById('benefit-item-1-1');
    let benefitItem11Animated = false;
    benefitItem11.style.opacity = 0;
    benefitItem11.style.transform = 'translateX(-50px)';
    function animateBenefitItem11() {
      const rect = benefitItem11.getBoundingClientRect();
      if (!benefitItem11Animated && rect.top >= 0 && (rect.bottom + 110) < window.innerHeight) {
        benefitItem11.style.transition = 'transform 2s ease 0.4s, opacity 1s ease 0.5s';
        benefitItem11.style.opacity = 1;
        benefitItem11.style.transform = 'translateX(0)';
        benefitItem11Animated = true;
      }
    }
    window.addEventListener('scroll', animateBenefitItem11);



    // Animate benefit item 1-2 (right section)
    const benefitItem12 = document.getElementById('benefit-item-1-2');
    let benefitItem12Animated = false;
    benefitItem12.style.opacity = 0;
    benefitItem12.style.transform = 'translateX(-50px)';
    function animateBenefitItem12() {
      const rect = benefitItem12.getBoundingClientRect();
      if (!benefitItem12Animated && rect.top >= 0 && (rect.bottom + 140) < window.innerHeight) {
        benefitItem12.style.transition = 'transform 2s ease 0.4s, opacity 1s ease 0.5s';
        benefitItem12.style.opacity = 1;
        benefitItem12.style.transform = 'translateX(0)';
        benefitItem12Animated = true;
      }
    }
    window.addEventListener('scroll', animateBenefitItem12);




    // Animate benefit item 1-3 (right section)
    const benefitItem13 = document.getElementById('benefit-item-1-3');
    let benefitItem13Animated = false;
    benefitItem13.style.opacity = 0;
    benefitItem13.style.transform = 'translateX(-50px)';
    function animateBenefitItem13() {
        const rect = benefitItem13.getBoundingClientRect();
        if (!benefitItem13Animated && rect.top >= 0 && (rect.bottom + 110) < window.innerHeight) {
        benefitItem13.style.transition = 'transform 2s ease 0.4s, opacity 1s ease 0.5s';
        benefitItem13.style.opacity = 1;
        benefitItem13.style.transform = 'translateX(0)';
        benefitItem13Animated = true;
        }
    }
    window.addEventListener('scroll', animateBenefitItem13);



    // Animate benefit item 2-1 (left section)
    const benefitItem21 = document.getElementById('benefit-item-2-1');
    let benefitItem21Animated = false;
    benefitItem21.style.opacity = 0;
    benefitItem21.style.transform = 'translateX(-50px)';
    function animateBenefitItem21() {
        const rect = benefitItem21.getBoundingClientRect();
        if (!benefitItem21Animated && rect.top >= 0 && (rect.bottom + 110) < window.innerHeight) {
        benefitItem21.style.transition = 'transform 2s ease 0.4s, opacity 1s ease 0.5s';
        benefitItem21.style.opacity = 1;
        benefitItem21.style.transform = 'translateX(0)';
        benefitItem21Animated = true;
        }
    }
    window.addEventListener('scroll', animateBenefitItem21);



    // Animate benefit item 2-2 (left section)
    const benefitItem22 = document.getElementById('benefit-item-2-2');
    let benefitItem22Animated = false;
    benefitItem22.style.opacity = 0;
    benefitItem22.style.transform = 'translateX(-50px)';
    function animateBenefitItem22() {
        const rect = benefitItem22.getBoundingClientRect();
        if (!benefitItem22Animated && rect.top >= 0 && (rect.bottom + 140) < window.innerHeight) {
        benefitItem22.style.transition = 'transform 2s ease 0.4s, opacity 1s ease 0.5s';
        benefitItem22.style.opacity = 1;
        benefitItem22.style.transform = 'translateX(0)';
        benefitItem22Animated = true;
        }
    }
    window.addEventListener('scroll', animateBenefitItem22);



    // Animate benefit item 2-3 (left section)
    const benefitItem23 = document.getElementById('benefit-item-2-3');
    let benefitItem23Animated = false;
    benefitItem23.style.opacity = 0;
    benefitItem23.style.transform = 'translateX(-50px)';
    function animateBenefitItem23() {
        const rect = benefitItem23.getBoundingClientRect();
        if (!benefitItem23Animated && rect.top >= 0 && (rect.bottom + 110) < window.innerHeight) {
        benefitItem23.style.transition = 'transform 2s ease 0.4s, opacity 1s ease 0.5s';
        benefitItem23.style.opacity = 1;
        benefitItem23.style.transform = 'translateX(0)';
        benefitItem23Animated = true;
        }
    }
    window.addEventListener('scroll', animateBenefitItem23);



    // Animate benefit item 3-1 (right section)
    const benefitItem31 = document.getElementById('benefit-item-3-1');
    let benefitItem31Animated = false;
    benefitItem31.style.opacity = 0;
    benefitItem31.style.transform = 'translateX(-50px)';
    function animateBenefitItem31() {
        const rect = benefitItem31.getBoundingClientRect();
        if (!benefitItem31Animated && rect.top >= 0 && (rect.bottom + 130) < window.innerHeight) {
        benefitItem31.style.transition = 'transform 2s ease 0.4s, opacity 1s ease 0.5s';
        benefitItem31.style.opacity = 1;
        benefitItem31.style.transform = 'translateX(0)';
        benefitItem31Animated = true;
        }
    }
    window.addEventListener('scroll', animateBenefitItem31);




    // Animate benefit item 3-2 (right section)
    const benefitItem32 = document.getElementById('benefit-item-3-2');
    let benefitItem32Animated = false;
    benefitItem32.style.opacity = 0;
    benefitItem32.style.transform = 'translateX(-50px)';
    function animateBenefitItem32() {
        const rect = benefitItem32.getBoundingClientRect();
        if (!benefitItem32Animated && rect.top >= 0 && (rect.bottom + 130) < window.innerHeight) {
        benefitItem32.style.transition = 'transform 2s ease 0.4s, opacity 1s ease 0.5s';
        benefitItem32.style.opacity = 1;
        benefitItem32.style.transform = 'translateX(0)';
        benefitItem32Animated = true;
        }
    }
    window.addEventListener('scroll', animateBenefitItem32);



    // Animate benefit item 3-3 (right section)
    const benefitItem33 = document.getElementById('benefit-item-3-3');
    let benefitItem33Animated = false;
    benefitItem33.style.opacity = 0;
    benefitItem33.style.transform = 'translateX(-50px)';
    function animateBenefitItem33() {
        const rect = benefitItem33.getBoundingClientRect();
        if (!benefitItem33Animated && rect.top >= 0 && (rect.bottom + 130) < window.innerHeight) {
        benefitItem33.style.transition = 'transform 2s ease 0.4s, opacity 1s ease 0.5s';
        benefitItem33.style.opacity = 1;
        benefitItem33.style.transform = 'translateX(0)';
        benefitItem33Animated = true;
        }
    }
    window.addEventListener('scroll', animateBenefitItem33);


    

    // Animate cta button
    const swimCta = document.getElementById('swim-cta');
    let swimCtaAnimated = false;
    swimCta.style.opacity = 0;
    swimCta.style.transform = 'scale(0.8)';
    function animateSwimCta() {
        const rect = swimCta.getBoundingClientRect();
        if (!swimCtaAnimated && rect.top >= 0 && (rect.bottom + 100) < window.innerHeight) {
            swimCta.style.transition = 'transform 2.0s ease, opacity 2.0s ease';
          swimCta.style.opacity = 1;
          swimCta.style.transform = 'translateY(0)';
          swimCtaAnimated = true;
        }
      }
    window.addEventListener('scroll', animateSwimCta);
    



    // Texts Testimonial Animation
    const textsTestimonial = document.getElementById('texts-testimonial');
    let textsTestimonialAnimated = false;
    textsTestimonial.style.opacity = 0;
    textsTestimonial.style.transform = 'scale(0.8)';
    function animateTextsTestimonial() {
        const rect = textsTestimonial.getBoundingClientRect();
        if (!textsTestimonialAnimated && rect.top >= 0 && (rect.bottom + 140) < window.innerHeight) {
            textsTestimonial.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            textsTestimonial.style.opacity = 1;
            textsTestimonial.style.transform = 'scale(1)';
            textsTestimonialAnimated = true;
        }
    }
    window.addEventListener('scroll', animateTextsTestimonial);


    // Animate testimonial card
    const testimonialCard = document.getElementById('testimonial-big');
    let testimonialCardAnimated = false;
    testimonialCard.style.opacity = 0;
    testimonialCard.style.transform = 'scale(0.8)';
    function animateTestimonialCard() {
        const rect = testimonialCard.getBoundingClientRect();
        if (!testimonialCardAnimated && rect.top >= 0 && (rect.bottom - 300) < window.innerHeight) {
            testimonialCard.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            testimonialCard.style.opacity = 1;
            testimonialCard.style.transform = 'scale(1)';
            testimonialCardAnimated = true;
        }
    }
    window.addEventListener('scroll', animateTestimonialCard);



    // Animate testimonial review cta button
    const testimonialReviewCta = document.getElementById('visit-reviews-cta');
    let testimonialCtaAnimated = false;
    testimonialReviewCta.style.opacity = 0;
    testimonialReviewCta.style.transform = 'scale(0.8)';
    function animateTestimonialReviewCta() {
        const rect = testimonialReviewCta.getBoundingClientRect();
        if (!testimonialCtaAnimated && rect.top >= 0 && (rect.bottom + 180) < window.innerHeight) {
            testimonialReviewCta.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            testimonialReviewCta.style.opacity = 1;
            testimonialReviewCta.style.transform = 'scale(1)';
            testimonialCtaAnimated = true;
        }
    }
    window.addEventListener('scroll', animateTestimonialReviewCta);



    // Animate testimonial slider 1
    const testimonialSlider1 = document.getElementById('common-testimonial');
    let testimonialSlider1Animated = false;
    testimonialSlider1.style.opacity = 0;
    testimonialSlider1.style.transform = 'scale(0.8)';
    function animateTestimonialSlider1() {
        const rect = testimonialSlider1.getBoundingClientRect();
        if (!testimonialSlider1Animated && rect.top >= 0 && (rect.bottom - 240) < window.innerHeight) {
            testimonialSlider1.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            testimonialSlider1.style.opacity = 1;
            testimonialSlider1.style.transform = 'scale(1)';
            testimonialSlider1Animated = true;
        }
    }   
    window.addEventListener('scroll', animateTestimonialSlider1);



    // Animate testimonial slider 2
    // const testimonialSlider2 = document.getElementById('testimonial-slider-2');
    // let testimonialSlider2Animated = false;
    // testimonialSlider2.style.opacity = 0;
    // testimonialSlider2.style.transform = 'scale(0.8)';
    // function animateTestimonialSlider2() {
    //     const rect = testimonialSlider2.getBoundingClientRect();
    //     if (!testimonialSlider2Animated && rect.top >= 0 && (rect.bottom + 100) < window.innerHeight) {
    //         testimonialSlider2.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
    //         testimonialSlider2.style.opacity = 1;
    //         testimonialSlider2.style.transform = 'scale(1)';
    //         testimonialSlider2Animated = true;
    //     }
    // }
    // window.addEventListener('scroll', animateTestimonialSlider2);



    // Animate component cta button
    const componentCta = document.getElementById('component-cta');
    let componentAnimated = false;
    componentCta.style.opacity = 0;
    componentCta.style.transform = 'scale(0.8)';
    function animateComponentCta() {
        const rect = componentCta.getBoundingClientRect();
        if (!componentAnimated && rect.top >= 0 && (rect.bottom - 30) < window.innerHeight) {
            componentCta.style.transition = 'transform 3.0s ease, opacity 3.0s ease';
            componentCta.style.opacity = 1;
            componentCta.style.transform = 'translateY(0)';
            componentAnimated = true;
        }
      }
    window.addEventListener('scroll', animateComponentCta);


    const testimonialCta = document.getElementById('testimonial-cta');
    let testimonialAnimated = false;
    testimonialCta.style.opacity = 0;
    testimonialCta.style.transform = 'scale(0.8)';
    function animateTestimonialCta() {
        const rect = testimonialCta.getBoundingClientRect();
        if (!testimonialAnimated && rect.top >= 0 && (rect.bottom - 30) < window.innerHeight) {
            testimonialCta.style.transition = 'transform 3.0s ease, opacity 3.0s ease';
            testimonialCta.style.opacity = 1;
            testimonialCta.style.transform = 'translateY(0)';
            testimonialAnimated = true;
        }
      }
    window.addEventListener('scroll', animateTestimonialCta);



    // Animate left-right-texts
    const leftRightTexts = document.getElementById('left-right-texts');
    let leftRightTextsAnimated = false;
    leftRightTexts.style.opacity = 0;
    leftRightTexts.style.transform = 'scale(0.8)';
    function animateLeftRightTexts() {
        const rect = leftRightTexts.getBoundingClientRect();
        if (!leftRightTextsAnimated && rect.top >= 0 && (rect.bottom - 20) < window.innerHeight) {
            leftRightTexts.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            leftRightTexts.style.opacity = 1;
            leftRightTexts.style.transform = 'scale(1)';
            leftRightTextsAnimated = true;
        }
    }
    window.addEventListener('scroll', animateLeftRightTexts);


    // Animate left-right-image
    const leftRightImage = document.getElementById('left-right-image');
    let leftRightImageAnimated = false;
    leftRightImage.style.opacity = 0;
    leftRightImage.style.transform = 'scale(0.8)';
    function animateLeftRightImage() {
        const rect = leftRightImage.getBoundingClientRect();
        if (!leftRightImageAnimated && rect.top >= 0 && (rect.bottom - 350) < window.innerHeight) {
            leftRightImage.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            leftRightImage.style.opacity = 1;
            leftRightImage.style.transform = 'scale(1)';
            leftRightImageAnimated = true;
        }
    }
    window.addEventListener('scroll', animateLeftRightImage);



    // Animate left-right-card-text
    // const leftRightCardText = document.getElementById('left-right-card-text');
    // let leftRightCardTextAnimated = false;
    // leftRightCardText.style.opacity = 0;
    // leftRightCardText.style.transform = 'scale(0.8)';
    // function animateLeftRightCardText() {
    //     const rect = leftRightCardText.getBoundingClientRect();
    //     if (!leftRightCardTextAnimated && rect.top >= 0 && (rect.bottom - 300) < window.innerHeight) {
    //         leftRightCardText.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
    //         leftRightCardText.style.opacity = 1;
    //         leftRightCardText.style.transform = 'scale(1)';
    //         leftRightCardTextAnimated = true;
    //     }
    // }
    // window.addEventListener('scroll', animateLeftRightCardText);


    // Animate left-right-card-text-h3
    const leftRightCardTextH3 = document.getElementById('left-right-card-text-h3');
    let leftRightCardTextH3Animated = false;
    leftRightCardTextH3.style.opacity = 0;
    leftRightCardTextH3.style.transform = 'scale(0.8)';
    function animateLeftRightCardTextH3() {
        const rect = leftRightCardTextH3.getBoundingClientRect();
        if (!leftRightCardTextH3Animated && rect.top >= 0 && (rect.bottom + 20) < window.innerHeight) {
            leftRightCardTextH3.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            leftRightCardTextH3.style.opacity = 1;
            leftRightCardTextH3.style.transform = 'scale(1)';
            leftRightCardTextH3Animated = true;
        }
    }
    window.addEventListener('scroll', animateLeftRightCardTextH3);



    // Animate left-right-card-text-p1
    const leftRightCardTextP1 = document.getElementById('left-right-card-text-p1');
    let leftRightCardTextP1Animated = false;
    leftRightCardTextP1.style.opacity = 0;
    leftRightCardTextP1.style.transform = 'scale(0.8)';
    function animateLeftRightCardTextP1() {
        const rect = leftRightCardTextP1.getBoundingClientRect();
        if (!leftRightCardTextP1Animated && rect.top >= 0 && (rect.bottom + 20) < window.innerHeight) {
            leftRightCardTextP1.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            leftRightCardTextP1.style.opacity = 1;
            leftRightCardTextP1.style.transform = 'scale(1)';
            leftRightCardTextP1Animated = true;
        }
    }
    window.addEventListener('scroll', animateLeftRightCardTextP1);

    // Animate left-right-card-text-p2
    const leftRightCardTextP2 = document.getElementById('left-right-card-text-p2');
    let leftRightCardTextP2Animated = false;
    leftRightCardTextP2.style.opacity = 0;
    leftRightCardTextP2.style.transform = 'scale(0.8)';
    function animateLeftRightCardTextP2() {
        const rect = leftRightCardTextP2.getBoundingClientRect();
        if (!leftRightCardTextP2Animated && rect.top >= 0 && (rect.bottom + 20) < window.innerHeight) {
            leftRightCardTextP2.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            leftRightCardTextP2.style.opacity = 1;
            leftRightCardTextP2.style.transform = 'scale(1)';
            leftRightCardTextP2Animated = true;
        }
    }
    window.addEventListener('scroll', animateLeftRightCardTextP2);


    // Animate left-right-card-text-p3
    const leftRightCardTextP3 = document.getElementById('left-right-card-text-p3');
    let leftRightCardTextP3Animated = false;
    leftRightCardTextP3.style.opacity = 0;
    leftRightCardTextP3.style.transform = 'scale(0.8)';
    function animateLeftRightCardTextP3() {
        const rect = leftRightCardTextP3.getBoundingClientRect();
        if (!leftRightCardTextP3Animated && rect.top >= 0 && (rect.bottom + 20) < window.innerHeight) {
            leftRightCardTextP3.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            leftRightCardTextP3.style.opacity = 1;
            leftRightCardTextP3.style.transform = 'scale(1)';
            leftRightCardTextP3Animated = true;
        }
    }
    window.addEventListener('scroll', animateLeftRightCardTextP3);


    // Animate testimonial-cta
    const testimonialCta2 = document.getElementById('testimonial-cta-2');
    let testimonialAnimated2 = false;
    testimonialCta2.style.opacity = 0;
    testimonialCta2.style.transform = 'scale(0.8)';
    function animateTestimonialCta2() {
        const rect = testimonialCta2.getBoundingClientRect();
        if (!testimonialAnimated2 && rect.top >= 0 && (rect.bottom - 30) < window.innerHeight) {
            testimonialCta2.style.transition = 'transform 3.0s ease, opacity 3.0s ease';
            testimonialCta2.style.opacity = 1;
            testimonialCta2.style.transform = 'translateY(0)';
            testimonialAnimated2 = true;
        }
      }
    window.addEventListener('scroll', animateTestimonialCta2);




    // Animate texts-strokes
    const textsStrokes = document.getElementById('texts-strokes');
    let textsStrokesAnimated = false;
    textsStrokes.style.opacity = 0;
    textsStrokes.style.transform = 'scale(0.8)';
    function animateTextsStrokes() {
        const rect = textsStrokes.getBoundingClientRect();
        if (!textsStrokesAnimated && rect.top >= 0 && (rect.bottom - 20) < window.innerHeight) {
            textsStrokes.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            textsStrokes.style.opacity = 1;
            textsStrokes.style.transform = 'scale(1)';
            textsStrokesAnimated = true;
        }
    }
    window.addEventListener('scroll', animateTextsStrokes);

    // Animate button-stokes
    const buttonStrokes = document.getElementById('btn-strokes');
    let buttonStrokesAnimated = false;
    buttonStrokes.style.opacity = 0;
    buttonStrokes.style.transform = 'scale(0.8)';
    function animateButtonStrokes() {
        const rect = buttonStrokes.getBoundingClientRect();
        if (!buttonStrokesAnimated && rect.top >= 0 && (rect.bottom - 20) < window.innerHeight) {
            buttonStrokes.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            buttonStrokes.style.opacity = 1;
            buttonStrokes.style.transform = 'scale(1)';
            buttonStrokesAnimated = true;
        }
    }
    window.addEventListener('scroll', animateButtonStrokes);



    // animate fade-container
    const fadeContainer = document.getElementById('fade-container');
    let fadeContainerAnimated = false;
    fadeContainer.style.opacity = 0;
    fadeContainer.style.transform = 'scale(0.8)';
    function animateFadeContainer() {
        const rect = fadeContainer.getBoundingClientRect();
        if (!fadeContainerAnimated && rect.top >= 0 && (rect.bottom + 40) < window.innerHeight) {
            fadeContainer.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            fadeContainer.style.opacity = 1;
            fadeContainer.style.transform = 'scale(1)';
            fadeContainerAnimated = true;
        }
    }
    window.addEventListener('scroll', animateFadeContainer);


    // Animate black-texts
    const blackTexts = document.getElementById('black-texts');
    let blackTextsAnimated = false;
    blackTexts.style.opacity = 0;
    blackTexts.style.transform = 'scale(0.8)';
    function animateBlackTexts() {
        const rect = blackTexts.getBoundingClientRect();
        if (!blackTextsAnimated && rect.top >= 0 && (rect.bottom + 120) < window.innerHeight) {
            blackTexts.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            blackTexts.style.opacity = 1;
            blackTexts.style.transform = 'scale(1)';
            blackTextsAnimated = true;
        }
    }
    window.addEventListener('scroll', animateBlackTexts);


    // Animate black-container
    const blackContainer = document.getElementById('black-container');
    let blackContainerAnimated = false;
    blackContainer.style.opacity = 0;
    blackContainer.style.transform = 'scale(0.8)';
    function animateBlackContainer() {
        const rect = blackContainer.getBoundingClientRect();
        if (!blackContainerAnimated && rect.top >= 0 && (rect.bottom - 20) < window.innerHeight) {
            blackContainer.style.transition = 'transform 2.5s ease, opacity 2.7s ease';
            blackContainer.style.opacity = 1;
            blackContainer.style.transform = 'scale(1)';
            blackContainerAnimated = true;
        }
    }
    window.addEventListener('scroll', animateBlackContainer);


    // Animate black-cta
    const blackCta = document.getElementById('black-cta');
    let blackAnimated = false;
    blackCta.style.opacity = 0;
    blackCta.style.transform = 'scale(0.8)';
    function animateBlackCta() {
        const rect = blackCta.getBoundingClientRect();
        if (!blackAnimated && rect.top >= 0 && (rect.bottom - 30) < window.innerHeight) {
            blackCta.style.transition = 'transform 3.0s ease, opacity 3.0s ease';
            blackCta.style.opacity = 1;
            blackCta.style.transform = 'translateY(0)';
            blackAnimated = true;
        }
      }
    window.addEventListener('scroll', animateBlackCta);


    // Animate texts-learn
    const textsLearn = document.getElementById('texts-learn');
    let textsLearnAnimated = false;
    textsLearn.style.opacity = 0;
    textsLearn.style.transform = 'scale(0.8)';
    function animateTextsLearn() {
        const rect = textsLearn.getBoundingClientRect();
        if (!textsLearnAnimated && rect.top >= 0 && (rect.bottom + 120) < window.innerHeight) {
            textsLearn.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            textsLearn.style.opacity = 1;
            textsLearn.style.transform = 'scale(1)';
            textsLearnAnimated = true;
        }
    }
    window.addEventListener('scroll', animateTextsLearn);


    // Animate text-learn
    const textLearn = document.getElementById('text-learn');
    let textLearnAnimated = false;
    textLearn.style.opacity = 0;
    textLearn.style.transform = 'scale(0.8)';
    function animateTextLearn() {
        const rect = textLearn.getBoundingClientRect();
        if (!textLearnAnimated && rect.top >= 0 && (rect.bottom + 120) < window.innerHeight) {
            textLearn.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            textLearn.style.opacity = 1;
            textLearn.style.transform = 'scale(1)';
            textLearnAnimated = true;
        }
    }
    window.addEventListener('scroll', animateTextLearn);

      

    // Animate learn-cta
    const learnCta = document.getElementById('learn-cta');
    let learnAnimated = false;
    learnCta.style.opacity = 0;
    learnCta.style.transform = 'scale(0.8)';
    function animateLearnCta() {
        const rect = learnCta.getBoundingClientRect();
        if (!learnAnimated && rect.top >= 0 && (rect.bottom + 120) < window.innerHeight) {
            learnCta.style.transition = 'transform 3.0s ease, opacity 3.0s ease';
            learnCta.style.opacity = 1;
            learnCta.style.transform = 'translateY(0)';
            learnAnimated = true;
        }
      }
    window.addEventListener('scroll', animateLearnCta);

    

    // Animate faq-texts
    const faqTexts = document.getElementById('faq-texts');
    let faqTextsAnimated = false;
    faqTexts.style.opacity = 0;
    faqTexts.style.transform = 'scale(0.8)';
    function animateFaqTexts() {
        const rect = faqTexts.getBoundingClientRect();
        if (!faqTextsAnimated && rect.top >= 0 && (rect.bottom + 120) < window.innerHeight) {
            faqTexts.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            faqTexts.style.opacity = 1;
            faqTexts.style.transform = 'scale(1)';
            faqTextsAnimated = true;
        }
    }
    window.addEventListener('scroll', animateFaqTexts);


    // Animate faq-image
    const faqImage = document.getElementById('faq-image');
    let faqImageAnimated = false;
    faqImage.style.opacity = 0;
    faqImage.style.transform = 'scale(0.8)';
    function animateFaqImage() {
        const rect = faqImage.getBoundingClientRect();
        if (!faqImageAnimated && rect.top >= 0 && (rect.bottom - 70) < window.innerHeight) {
            faqImage.style.transition = 'transform 1.5s ease, opacity 1.7s ease';
            faqImage.style.opacity = 1;
            faqImage.style.transform = 'scale(1)';
            faqImageAnimated = true;
        }
    }
    window.addEventListener('scroll', animateFaqImage);


    // Animate faq-cta
    const faqCta = document.getElementById('faq-cta');
    let faqAnimated = false;
    faqCta.style.opacity = 0;
    faqCta.style.transform = 'scale(0.8)';
    function animateFaqCta() {
        const rect = faqCta.getBoundingClientRect();
        if (!faqAnimated && rect.top >= 0 && (rect.bottom + 120) < window.innerHeight) {
            faqCta.style.transition = 'transform 3.0s ease, opacity 3.0s ease';
            faqCta.style.opacity = 1;
            faqCta.style.transform = 'translateY(0)';
            faqAnimated = true;
        }
      }
    window.addEventListener('scroll', animateFaqCta);


    // Animate faq elements
    const faqElements = document.querySelectorAll(".faq_element");

    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px 0px -120px 0px", // offset 120px from the bottom
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set the animation duration to 2 seconds
          entry.target.style.setProperty('--animate-duration', '2s');
          entry.target.classList.add("animate__animated", "animate__lightSpeedInLeft");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target); // animate once per element
        }
      });
    }, observerOptions);
    
    faqElements.forEach(element => {
      observer.observe(element);
    });
});