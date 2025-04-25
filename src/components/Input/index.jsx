import { InputContainer } from "./styles"

export const Input = ({ value }) => {
  return (
    <InputContainer>
      <input type="text" value={ value }  disabled/>
    </InputContainer>
  )
}