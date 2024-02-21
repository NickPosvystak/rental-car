import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
--headerFontSize: 40px; 
--descriptionFont: 16px;

/* Colors */
--modelsColor:rgb(52, 112, 255);
--second-color: rgb(255, 255, 255);

/* Font */
--font-weight-500: 500;
--font-weight-400: 400;
--font-weight-600: 600;
}

`;

export default GlobalStyle;