import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
--headerFontSize: 40px; 
--descriptionFont: 16px;
--loadBtnFont: 16px;


/* Colors */
--modelsColor:rgb(52, 112, 255);
--second-color: rgb(255, 255, 255);
--hover-color:rgb(11, 68, 205);

/* Font */
--font-weight-500: 500;
--font-weight-400: 400;
--font-weight-600: 600;
}

`;

export default GlobalStyle;