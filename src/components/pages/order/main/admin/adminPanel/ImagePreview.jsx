import React from "react";
import { theme } from "../../../../../../theme/index";
import { fadeIn } from "../../../../../../theme/animations";
import styled from "styled-components";

export default function ImagePreview({ title, imageSource }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? <img src={imageSource} alt={title} /> : "Aucune image"}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.greyLight};
  color: ${theme.colors.greySemiDark};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    animation: ${fadeIn} 0.3s ease-in-out;
  }
`;
