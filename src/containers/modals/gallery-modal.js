import React, { useState } from "react";
import {
  AbsoluteCenter,
  Backdrop,
  Flex,
  Gallery,
  Modal,
} from "../../components";
import {
  CrossIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "../../components/icons";

import "styled-components/macro";

function GalleryModalContainer(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images, closeGalleryModal } = props;

  const handleThumbnailClick = (_, index) => {
    setCurrentIndex(index);
  };

  const decreaseIndex = () => {
    if (currentIndex <= 0) {
      return setCurrentIndex(images.length - 1);
    }
    setCurrentIndex((prevIndex) => --prevIndex);
  };

  const increaseIndex = () => {
    if (currentIndex === images.length - 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex((prevIndex) => ++prevIndex);
  };

  return (
    <Backdrop centerItem>
      <Gallery>
        <Modal.SmallBtn onClick={closeGalleryModal}>
          <AbsoluteCenter>
            <CrossIcon />
          </AbsoluteCenter>
        </Modal.SmallBtn>
        <Flex
          align="center"
          direction="column"
          css={`
            margin: auto;
            width: 100%;
          `}
        >
          <div
            css={`
              position: relative;
              width: 100%;
            `}
          >
            <Gallery.ImgContainer>
              <Gallery.Img src={images[currentIndex].src} />
            </Gallery.ImgContainer>
            <Gallery.SmallButton
              onClick={decreaseIndex}
              css={`
                left: -23px;
              `}
            >
              <LeftArrowIcon />
            </Gallery.SmallButton>
            <Gallery.SmallButton
              onClick={increaseIndex}
              css={`
                right: -23px;
              `}
            >
              <RightArrowIcon />
            </Gallery.SmallButton>
          </div>
          <Gallery.List>
            {images.map(({ src }, i) => (
              <Gallery.Item key={i} active={i === currentIndex}>
                <Gallery.Button onClick={(e) => handleThumbnailClick(e, i)}>
                  <Gallery.ThumbnailContainer>
                    <Gallery.Thumbnail src={src} />
                  </Gallery.ThumbnailContainer>
                </Gallery.Button>
              </Gallery.Item>
            ))}
          </Gallery.List>
        </Flex>
      </Gallery>
    </Backdrop>
  );
}

export default GalleryModalContainer;
