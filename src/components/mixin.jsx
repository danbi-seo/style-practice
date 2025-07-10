import { css } from 'styled-components';


export const flexContainer = (
  display = 'flex', 
  justify = 'flex-start', 
  align = 'stretch', 
  direction = 'row', 
  gap = '0', 
  wrap = 'nowrap', 
  padding = '0'
) => css`
  display: ${display};
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
  gap: ${gap};
  flex-wrap: ${wrap};
  padding: ${padding};
`;

export const mixinFont = (size = '13px', weight = '400') => css`
  font-size: ${size};
  font-weight: ${weight};
`;
