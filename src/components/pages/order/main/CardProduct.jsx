/* eslint-disable react/prop-types */
import { styled, css, StyleSheetManager } from "styled-components";
import { formatPrice } from "../../../../utils/math";
import { theme } from "../../../../theme";
import { TiDelete } from "react-icons/ti";
import Button from "../../../reusableUi/Button";
import { fadeFromTop, scaleUpElement } from "../../../../theme/animations";

export default function CardProduct({
  title,
  img,
  price,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  onAdd,
  isOverlayVisible,
  overlayImg,
  disabled,
}) {
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        prop !== "isHoverable" && prop !== "isSelected"
      }
    >
      <CardStyled
        onClick={onClick}
        isHoverable={isHoverable}
        isSelected={isSelected}
      >
        <div className="card">
          {hasDeleteButton && (
            <button className="delete-button" onClick={onDelete}>
              <TiDelete />
            </button>
          )}

          <div className="image">
            {isOverlayVisible && (
              <div className="overlays">
                <div className="transparent-layer"></div>
                <img
                  className="image-overlay"
                  src={overlayImg}
                  alt={overlayImg}
                ></img>
              </div>
            )}
            <img src={img} alt="product-picture" />
          </div>
          <div className="info-text">
            <div className="title">{title}</div>
            <div className="description">
              <p className="price">{formatPrice(price)}</p>
              <div className="button-box">
                <Button
                  disabled={disabled}
                  className="primary-button"
                  content={"ajouter"}
                  version={"primaryOutlined"}
                  onClick={onAdd}
                >
                  ajouter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardStyled>
    </StyleSheetManager>
  );
}

const CardStyled = styled.div`
  ${({ isHoverable }) => isHoverable && hoverableStyle}
  height: 330px;

  .card {
    overflow: hidden;
    position: relative;
    background: ${theme.colors.white};
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};

    .overlays {
      position: absolute;
      overflow: hidden;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;

      .transparent-layer {
        opacity: 0.6;
        width: 100%;
        height: 100%;
        background-color: snow;
      }
      .image-overlay {
        position: absolute;
        object-fit: contain;
        z-index: 3;
        width: 80%;
        animation: ${fadeFromTop} 0.3s ease-in-out;
      }
    }

    .delete-button {
      z-index: 3;
      position: absolute;
      display: flex;
      right: 15px;
      top: 15px;
      color: ${theme.colors.primary};
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 30px;
      animation: ${scaleUpElement} 0.3s ease-in-out;
      &:hover {
        color: ${theme.colors.red};
      }
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .info-text {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;
      font-family: "Amatic SC", cursive;

      .title {
        margin: auto;
        font-size: ${theme.fonts.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.weights.medium};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .price {
        display: flex;
        align-items: center;
        text-align: left;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-size: ${theme.fonts.P3};
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.semiBold};
      }

      .button-box {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    ${({ isHoverable, isSelected }) =>
      isHoverable && isSelected && selectedStyle}
  }
`;
const hoverableStyle = css`
  .card:hover:not(:disabled) {
    cursor: pointer;

    box-shadow: ${theme.shadows.orangeHighLight};
  }
`;
const selectedStyle = css`
  background: ${theme.colors.primary};
  position: relative;

  .delete-button {
    color: ${theme.colors.white};
    &:active {
      color: ${theme.colors.white};
    }
  }

  .info-text {
    .description {
      .price {
        color: white;
      }

      Button {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.white};
        transition: all 200ms ease-out;
        &:hover {
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.white};
          transition: all 200ms ease-out;
        }
        &:active {
          background-color: ${theme.colors.white};
          color: ${theme.colors.primary};
        }

        &.is-disabled {
          opacity: 50%;
          cursor: not-allowed;
          z-index: 2;
        }

        &.with-focus {
          border: 1px solid white;
          background-color: ${theme.colors.white};
          color: ${theme.colors.primary};
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.white};
          }
          &:active {
            background-color: ${theme.colors.white};
            color: ${theme.colors.primary};
          }
        }
      }
    }
  }
`;
