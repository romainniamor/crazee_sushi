import { styled, css, StyleSheetManager } from "styled-components";
import { theme } from "../../../../../../theme";
import { MdDeleteForever } from "react-icons/md";

import CasinoEffect from "../../../../../reusableUi/CasinoEffect";

export default function BasketCard({
  className,
  imageSource,
  title,
  price,
  quantity,
  onDelete,
  isClickable,
  isSelected,
  onClick,
  isAvailable,
}) {
  return (
    <StyleSheetManager
      shouldForwardProp={(prop) =>
        prop !== "isClickable" && prop !== "isSelected"
      }
    >
      <BasketCardStyled
        className={className}
        isClickable={isClickable}
        isSelected={isSelected}
        onClick={onClick}
      >
        <div className="card">
          <div className="delete-button" onClick={onDelete}>
            <MdDeleteForever className="icon" />
          </div>
          <div className="image">
            <img
              src={imageSource ? imageSource : "/coming-soon.png"}
              alt={title}
            />
          </div>
          <div className="text-info">
            <div className="left-info">
              <div className="title">
                <span>{title}</span>
              </div>

              <div className="price">
                <CasinoEffect className="card-price" count={price} />
              </div>
            </div>
            <div className="quantity">
              <CasinoEffect count={isAvailable ? `x ${quantity}` : ""} />
            </div>
          </div>
        </div>
      </BasketCardStyled>
    </StyleSheetManager>
  );
}

const BasketCardStyled = styled.div`
  .card {
    cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
    height: 86px;
    padding: 8px 16px;
    display: grid;
    grid-template-columns: 30% 1fr;
    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.background_white};
    box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);

    position: relative;
    margin: 20px 16px;
  }

  .image {
    height: 70px;

    img {
      padding: 5px;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.primary};

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;

      .title {
        display: flex;
        align-items: center;

        font-family: "Amatic SC";
        font-size: ${theme.fonts.P3};
        line-height: 32px;
        font-weight: ${theme.weights.semiBold};
        color: ${theme.colors.dark};
        min-width: 0;
        span {
          overflow: hidden;
          /* width: 100%; */
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .price {
        font-size: ${theme.fonts.sm};
        font-weight: ${theme.weights.medium};

        .card-price {
          left: 0;
        }
      }
    }

    .quantity {
      box-sizing: border-box;
      font-weight: ${theme.weights.medium};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: ${theme.fonts.sm};
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  &:hover {
    .delete-button {
      border: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.P3};
        height: ${theme.fonts.P3};
      }

      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }
        &:active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
  ${({ isSelected }) => isSelected && selectedStyle}
`;

const selectedStyle = css`
  .card {
    background-color: ${theme.colors.primary};
  }
  .price,
  .quantity {
    color: ${theme.colors.white};
  }
`;
