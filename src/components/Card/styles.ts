import styled, { DefaultTheme } from "styled-components/native"


interface CardStatusTypeProps {
    status: 'INICIO' | 'MEIO' | 'FIM';
  }

  const handleColorType = async (status: any, theme: DefaultTheme) => {
    switch (status) {
      case "INICIO":
        return theme.COLORS.PRIMARY;
      case "MEIO":
        return theme.COLORS.DARK;
      case "FIM":
        return theme.COLORS.SUCCESS;
      default:
        return theme.COLORS.ALERT;
    }
  };

export const Container = styled.View`
    width: 100%;
    height: 200px;
    margin: 30px;
    background-color: ${({ theme, status }) => {
    console.log('NAO ESTA VINDO O STATUS AQUI: ',status)
    if (status === 'INICIO') {
      return '#ff5330';
    }
    if (status === 'MEIO') {
      return theme.COLORS.PRIMARY;
    }
    if (status === 'FIM') {
      return '#F2D600';
    }

    return '#000';
  }};
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    color: #fff;
`