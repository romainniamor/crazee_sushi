/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusableUi/TextInput";
import { getInputTextConfig } from "./inputTextConfig";
import React from "react";

const AdminForm = React.forwardRef(
  ({ onSubmit, onChange, product, version, children }, ref) => {
    //state

    //comportements

    const inputTexts = getInputTextConfig(product);

    //render
    return (
      <AdminFormStyled onSubmit={onSubmit}>
        <ImagePreview title={product.title} imageSource={product.imageSource} />
        <div className="input-fields">
          {inputTexts.map((inputText) => (
            <TextInput
              {...inputText}
              key={inputText.id}
              onChange={onChange}
              version={version}
              ref={ref && inputText.name === "title" ? ref : null}
            />
          ))}
        </div>
        <div className="submit">{children}</div>
      </AdminFormStyled>
    );
  }
);

export default AdminForm;

const AdminFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 20px;
  width: 70%;
  height: 100%;

  .input-fields {
    background-color: ${theme.colors.white};
    grid-area: 1 / 2 / 4 / 3;
    display: grid;
    grid-row-gap: 9px;
  }

  .submit {
    grid-area: 4 / 2 / 5 / 3;
    display: flex;
    align-items: center;

    .button-box {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;
