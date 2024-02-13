import styled from "styled-components";
import { theme } from "../../theme";

export default function SelectInput({
  options,
  className,
  name,
  id,
  value,
  icon,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <SelectInputStyled className={className}>
      <div className="icon">{icon}</div>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.div`
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 24px;
  color: ${theme.colors.greyLight};
  font-size: ${theme.fonts.md};
  background: ${theme.colors.background_white};
  gap: ${theme.spacing.sm};

  select {
    border: none;
    color: ${theme.colors.dark};
    &:focus {
      outline: none;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greyBlue};
  }
`;
