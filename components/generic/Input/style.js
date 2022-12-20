import styled from 'styled-components';



const Container = styled.input`
  @media only screen and (min-width: 800px) {
    min-width: 124.72px;
    width: ${({ width }) => (width ? `${width}` : '100%')};
    height: ${({ height }) => (height ? `${height}` : '80px')};
    font-size: ${({ size }) => (size ? `${size}` : '32px')};
    padding: ${({ padding }) => (padding ? `${padding}` : '23px 34px ')};
    margin: ${({ margin }) => (margin ? `${margin}` : '0px')};
    background: ${({bc})=> bc ? bc : 'linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%)'};
    border-bottom: ${({borderBoT})=> borderBoT ? borderBoT : '0px'};
    border-radius: ${({ radius }) => (radius ? `${radius}` : '15px')};
    outline: none;
    box-shadow: ${({shadowOff})=> shadowOff ? '' : '0px 4px 17px rgba(0, 0, 0, 0.25)'};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: ${({weight})=> weight ? weight : '400'};
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: white;
    transition: .2s ;
    text-align: ${({align})=> align && align};
    :active{transform: scale(${({ scale }) => (scale ? `${scale}` : '1.02')})}
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }

  @media only screen and (max-width: 800px) {
    /* min-width: 124.72px; */
    min-width: ${({ minwidth }) => (minwidth ? `${minwidth}` : '100%')};
    width: ${({ mwidth }) => (mwidth ? `${mwidth}` : '100%')};
    height: ${({ mheight }) => mheight ? mheight : '80px'};
    font-size: ${({ msize }) => (msize ? `${msize}` : '32px')};
    padding: ${({ mpadding }) => (mpadding ? `${mpadding}` : '23px 34px ')};
    margin: ${({ mmargin }) => (mmargin ? `${mmargin}` : '0px')};
    background: ${({bc})=> bc ? bc : 'linear-gradient(90deg, #1E3C72 0%, #1E3C72 1%, #2A5298 100%)'};
    border-bottom: ${({mborderBoT})=> mborderBoT ? mborderBoT : '0px'};
    border-radius: ${({ mradius }) => (mradius ? `${mradius}` : '15px')};
    outline: none;
    box-shadow: ${({mshadowOff})=> mshadowOff ? '' : '0px 4px 17px rgba(0, 0, 0, 0.25)'};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: ${({mweight})=> mweight ? mweight : '400'};
    line-height: 105.9%;
    letter-spacing: -0.025em;
    color: white;
    transition: .2s ;
    text-align: ${({malign})=> malign && malign};
    :active{transform: scale(${({ mscale }) => (mscale ? `${mscale}` : '1.02')})}
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
`;

  


export { Container}