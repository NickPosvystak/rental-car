import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    /* font-size */
--headerFontSize: 40px; 
--descriptionFont: 16px;
--loadBtnFont: 16px;
--modalTitleFont: 18px;
--modalModelFont: 14px;
--modalDescriptionFont: 12px;
--homeFont: 20px;


/* Colors */
--primaryColor:rgb(18, 20, 23);
--modelsColor:rgb(52, 112, 255);
--second-color: rgb(255, 255, 255);
--hover-color:rgb(11, 68, 205);
--modalDescriptionColor:rgba(18, 20, 23, 0.5);
--modalItemsColor:rgb(54, 53, 53);

/* Font */
--font-weight-500: 500;
--font-weight-400: 400;
--font-weight-600: 600;
}

`;

export default GlobalStyle;
