import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
// :root{
//     --primary-color: #007bff;
//     --primary-color-light: #057FFF;
//     --secondary-color: #6c757d;
//     --background-dark-color: #10121A;
//     --background-dark-grey: #191D2B;
//     --border-color: #2e344e;
//     --background-light-color: #F1F1F1;
//     --background-light-color-2: rgba(3,127,255,.3);
//     --white-color: #FFF;
//     --font-light-color: #a4acc4;
//     --font-dark-color: #313131;
//     --font-dark-color-2: #151515;
//     --sidebar-dark-color: #191D2B;
//     --scrollbar-bg-color: #383838;
//     --scrollbar-thump-color: #6b6b6b;
//     --scrollbar-track-color: #383838;

// }
.light-theme{
    --primary-color: #ffa1c2;
    --primary-color-light: #b0e9ff;
    --secondary-color: #ff7675;
    --background-dark-color: #fffbdb;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: #b0e9ff;
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #f0d4fc;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
.dark-theme{
    --primary-color: #00ff1a;
    --primary-color-light: #057FFF;
    --secondary-color: #ffffff;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #ffffff;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

*{
    padding : 0;
    margin : 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    list-style: none;
    text-decoration: none;
    font-family: 'Varela Round', sans-serif;
}

body{
    background-color : var(--background-dark-color);
    color : var(--font-light-color);
}

a{
    font-family : inharit;
    color : inherit;
    font-size:inherit
}

h1{
    font-size : 3rem;
    color : var(--white-color);
    span{
        font-size:3rem
    }
}
span{
    color : var(--primary-color)
}

.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }

`;

export default GlobalStyled;