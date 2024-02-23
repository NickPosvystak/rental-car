import { StyledHeartIcon } from './StyledCatalogItem.styled';

export const SvgHeart = ({ isFavorite, onClick }) => {
  return (
    <StyledHeartIcon onClick={onClick}>
      <path
        d="M29.271 2.244c-1.056-0.437-2.187-0.663-3.33-0.663s-2.274 0.225-3.33 0.663c-1.056 0.437-2.015 1.079-2.823 1.887l-1.676 1.677-1.677-1.677c-1.632-1.632-3.845-2.549-6.153-2.549s-4.521 0.917-6.153 2.549c-1.632 1.632-2.549 3.845-2.549 6.153s0.917 4.521 2.549 6.153l13.982 13.982 13.982-13.982c0.808-0.808 1.449-1.767 1.887-2.823s0.663-2.187 0.663-3.33-0.225-2.274-0.663-3.33c-0.437-1.056-1.079-2.015-1.887-2.823s-1.767-1.449-2.823-1.887z"
        fill={isFavorite ? 'var(--modelsColor)' : 'transparent'}
        stroke={isFavorite ? 'var(--modelsColor)' : 'var(--second-color)'}
        stroke-linejoin="round"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        stroke-width="3.1633"
      />
    </StyledHeartIcon>
  );
};
