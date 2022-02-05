import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import "styled-components/macro";
import { CompanyCard, Flex, Comment } from "../../components";
import {
  AttachIcon,
  RightArrowIcon,
  SmileyIcon,
  StarIcon2,
  StarIconStroked,
} from "../../components/icons";
import { ENDPOINTS } from "../../constants/endpoints";
import { usePost } from "../../hooks";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { screens } from "../../styles/variables";

function InteractiveCommentContainer(props) {
  const { t } = useTranslation();
  const [displayedStarRating, setDisplayedStarRating] = useState(0);
  const { setDisplayedComments } = props;
  const [textAreaRows, setTextAreaRows] = useState(0);
  const { postData } = usePost();
  const { company } = useParams();

  const handleStarMouseEnter = (rating) => {
    setDisplayedStarRating(rating);
  };

  const handleStarFieldsetMouseLeave = () => setDisplayedStarRating(0);

  const handleTextAreaFocus = () => {
    setTextAreaRows(10);
  };

  const handleTextAreaBlur = (e) => {
    if (!e.target.value) {
      setTextAreaRows(0);
    }
  };

  const handleSubmit = (values) => {
    console.log("values", values);
    const reviewData = {
      title: "No title2",
      service: company,
      user: 13,
      ...values,
    };
    postData(`${ENDPOINTS.GET.SERVICES}${company}/reviews/`, reviewData).then(
      (newComment) =>
        setDisplayedComments((oldComments) => [...oldComments, newComment])
    );
  };

  const handleStarClick = (setFieldValue, score) => {
    console.log(setFieldValue, score);
    setFieldValue("score", score);
    setDisplayedStarRating(score);
  };

  return (
    <div
      css={`
        margin-top: 30px;
        padding-bottom: 43px;
        width: 100%;
      `}
    >
      <CompanyCard.Title
        css={`
          font-size: 1.6rem;
          line-height: 24px;

          @media ${screens.lg} {
            font-size: 2.4rem;
          }
        `}
      >
        {t(lnMap.add_comment)}
      </CompanyCard.Title>
      <Formik
        initialValues={{
          body: "",
          score: null,
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <Flex
              direction="column"
              css={`
                margin-top: 8px;

                @media ${screens.lg} {
                  flex-direction: row;
                }
              `}
            >
              <Comment.CommentText>
                {t(lnMap.comment_question)}
              </Comment.CommentText>
              <fieldset
                onMouseLeave={handleStarFieldsetMouseLeave}
                css={`
                  border: 0;
                  padding: 0;

                  @media ${screens.lg} {
                    margin-left: auto;
                  }
                `}
              >
                <Comment.StarBox
                  large
                  css={`
                    margin-right: 7px;
                    margin-top: 6px;
                  `}
                >
                  {new Array(5).fill("").map((_, i) => (
                    <Comment.StarLabel
                      key={i}
                      htmlFor={`star-rating-${i + 1}`}
                      tabIndex="0"
                      onMouseEnter={() => handleStarMouseEnter(i + 1)}
                      onClick={() => handleStarClick(setFieldValue, i + 1)}
                    >
                      <Comment.StarContainer
                        key={i}
                        css={`
                          font-size: 2rem;
                        `}
                        filled={i + 1 <= (values.score || displayedStarRating)}
                      >
                        {i + 1 <= (values.score || displayedStarRating) ? (
                          <StarIcon2 />
                        ) : (
                          <StarIconStroked />
                        )}
                        <Comment.RadioStar
                          id={`star-rating-${i + 1}`}
                          type="radio"
                          value={i + 1}
                        />
                      </Comment.StarContainer>
                    </Comment.StarLabel>
                  ))}
                </Comment.StarBox>
              </fieldset>
            </Flex>
            <Comment.InputContainer>
              <Comment.TextArea
                name="body"
                placeholder={t(lnMap.share_your_opinion)}
                onFocus={handleTextAreaFocus}
                onBlur={handleTextAreaBlur}
                rows={textAreaRows}
                onChange={handleChange}
              />
              <Comment.Box>
                <Comment.ButtonSmall
                  css={`
                    font-size: 2.5rem;
                  `}
                >
                  <AttachIcon />
                </Comment.ButtonSmall>
                <Comment.ButtonSmall>
                  <SmileyIcon />
                </Comment.ButtonSmall>
                <Comment.Button>
                  <Comment.IconContainer>
                    <RightArrowIcon />
                  </Comment.IconContainer>
                  <p
                    css={`
                      display: none;

                      @media ${screens.lg} {
                        display: block;
                      }
                    `}
                  >
                    {t(lnMap.share)}
                  </p>
                </Comment.Button>
              </Comment.Box>
            </Comment.InputContainer>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default InteractiveCommentContainer;
