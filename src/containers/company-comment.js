import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, Comment, Flex } from "../components";
import { AvatarIcon, StarIcon2, StarIconStroked } from "../components/icons";
import lnMap from "../languages/language-maps/shared-lang-map";
import FakeAvatar from "../assets/mock/avatar_placeholder.png";
import FakeAvatar2 from "../assets/mock/avatar_placeholder-2.png";
import FakeAvatar3 from "../assets/mock/avatar_placeholder-3.png";
import GalleryImg from "../assets/mock/gallery-img.png";
import GalleryImgLarge from "../assets/mock/gallery-mock.png";
import TimeAgo from "react-timeago";
import "styled-components/macro";
import { screens } from "../styles/variables";
import {
  GalleryModalContainer,
  InteractiveCommentContainer,
  OverlayDropdownContainer,
} from ".";
import { useCompanyCommentLogic } from "../hooks";
import { TIMEAGO_FORMATTER } from "../constants/timeago-formatter";

function CompanyCommentContainer() {
  const { t } = useTranslation();
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const { displayedComments, setDisplayedComments } = useCompanyCommentLogic();
  const handleImgClick = () => {
    setShowGalleryModal(true);
  };

  const closeGalleryModal = () => setShowGalleryModal(false);

  const images = [
    {
      id: 1,
      src: GalleryImg,
    },
    { id: 2, src: GalleryImg },
    { id: 3, src: GalleryImg },
    { id: 4, src: GalleryImgLarge },
  ];

  /*   const displayedComments = [
    {
      avatar: FakeAvatar,
      username: "Myrtie Runolfsson",
      comment:
        "We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.",
      star: 3,
      date: 1,
      images: [],
      responses: [
        {
          img: FakeAvatar2,
          comment: "Best place  stayed in all of NZ. 🙌 🎉 😎",
          date: 1,
        },
      ],
    },
    {
      avatar: FakeAvatar3,
      username: "Michael May",
      comment:
        "Stunning views of Queenstown. Very peaceful. Love it so much. Definitely gonna come back and visit.",
      star: 5,
      date: 1,
      images: [GalleryImg, GalleryImg, GalleryImg],
      responses: [],
    },
    {
      avatar: FakeAvatar3,
      username: "Tobin Hackett",
      comment: "Best place I stayed in all of NZ. 🙌 🎉 😎",
      star: 4,
      date: 1,
      images: [],
      responses: [],
    },
  ];
 */
  const items = [
    { name: lnMap.newest_comments },
    { name: lnMap.oldest_comments },
    { name: lnMap.all_comments },
  ];

  console.log("displayedComments", displayedComments);
  return (
    <>
      <Flex
        direction="column"
        css={`
          margin-top: 62px;
        `}
        width="100%"
      >
        <Flex align="center" justify="space-between" width="100%">
          <Comment.Title>
            {displayedComments?.length || "-"} {t(lnMap.comment)}
          </Comment.Title>
          <OverlayDropdownContainer items={items} width="220px" />
        </Flex>
        <Comment>
          <Comment.List>
            {displayedComments?.length
              ? displayedComments.map(
                  ({
                    name: username,
                    body: comment,
                    score: star,
                    date_created: date,
                    images,
                    responses,
                  }) => (
                    <Comment.Item key={comment}>
                      <Flex>
                        <Comment.AvatarContainer
                          style={{ backgroundColor: "#58C27D" }}
                        >
                          <AvatarIcon />
                          {/*    <Comment.Avatar src={avatar} alt={username} /> */}
                        </Comment.AvatarContainer>
                        <div
                          css={`
                            width: 100%;
                          `}
                        >
                          <Flex align="center">
                            <Comment.Username>
                              {username || "Anonymous"}
                            </Comment.Username>
                            <Comment.StarBox>
                              {new Array(5).fill("").map((_, i) => (
                                <Comment.StarContainer
                                  key={i}
                                  filled={star >= i + 1}
                                >
                                  {star >= i + 1 ? (
                                    <StarIcon2 />
                                  ) : (
                                    <StarIconStroked />
                                  )}
                                </Comment.StarContainer>
                              ))}
                            </Comment.StarBox>
                          </Flex>
                          <Comment.Text>{comment}</Comment.Text>
                          <Comment.TextSmall>
                            <TimeAgo
                              date={date}
                              formatter={TIMEAGO_FORMATTER}
                            />
                          </Comment.TextSmall>
                        </div>
                      </Flex>

                      {images?.length ? (
                        <Comment.Gallery>
                          {images.map((img, i) => (
                            <button onClick={handleImgClick} key={i}>
                              <Comment.GalleryImgContainer>
                                <Comment.GalleryImg src={img} alt="" />
                              </Comment.GalleryImgContainer>
                            </button>
                          ))}
                        </Comment.Gallery>
                      ) : null}
                      {responses?.length ? (
                        <div style={{ width: "100%" }}>
                          {responses?.map(({ img, comment, date }) => (
                            <Flex
                              key={date}
                              css={`
                                margin-top: 27px;
                                padding-left: 30px;
                              `}
                            >
                              <Comment.AvatarContainer
                                css={`
                                  margin-right: 14px;

                                  @media ${screens.lg} {
                                    margin-right: 20px;
                                  }
                                `}
                              >
                                <AvatarIcon />
                              </Comment.AvatarContainer>
                              <div>
                                <Comment.Username
                                  css={`
                                    color: #fe7224;
                                  `}
                                >
                                  {t(lnMap.company_response)}
                                </Comment.Username>
                                <Comment.Text>{comment}</Comment.Text>
                                <Comment.TextSmall>
                                  <TimeAgo
                                    date={new Date().now()}
                                    formatter={TIMEAGO_FORMATTER}
                                  />
                                </Comment.TextSmall>
                              </div>
                            </Flex>
                          ))}
                        </div>
                      ) : null}
                    </Comment.Item>
                  )
                )
              : null}
          </Comment.List>
        </Comment>
        <Card.Button
          css={`
            border-radius: 90px;
            margin-top: 47px;
          `}
        >
          {t(lnMap.comments_loading)}
        </Card.Button>
        <InteractiveCommentContainer
          setDisplayedComments={setDisplayedComments}
        />
      </Flex>
      {showGalleryModal && (
        <GalleryModalContainer
          images={images}
          closeGalleryModal={closeGalleryModal}
        />
      )}
    </>
  );
}

export default CompanyCommentContainer;
