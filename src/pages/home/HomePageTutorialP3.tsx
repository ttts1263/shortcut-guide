import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import BackgroundToFollow from "../../assets/TutorialBackgroundImages/TutorialBackgroundFollow.jpg"

export function HomePageTutorialP3() {
  const navigate = useNavigate()

  return (
    <StyledBackgroundDiv className="background">
      <StyledMainBanner>
        <StyledMainBannerPageFont
          onClick={() => {
            navigate("/windows")
          }}
        >
          윈도우
        </StyledMainBannerPageFont>
        <StyledMainBannerFont
          onClick={() => {
            navigate("/")
          }}
        >
          단축키 도우미
        </StyledMainBannerFont>
      </StyledMainBanner>

      <StyledPageDescriptionFont>
        직접 따라하며
        <StyledPageDescriptionFontBlueEmphasis>
          단축키를 배워보세요
        </StyledPageDescriptionFontBlueEmphasis>
      </StyledPageDescriptionFont>

      <StyledAdditionalExplanation>
        각 페이지의 단축키들에는 사용자가 직접 보고 실행할 수 있게
        <br />
        이미지와 추천하는 단축키의 활용 가이드가 있습니다.
        <br />
        단축키를 보며 실행해 보고, 활용 가이드를 보며 실생활에 적용해보세요!
      </StyledAdditionalExplanation>

      <StyledNextButton
        onClick={() => {
          navigate("/End")
        }}
      >
        다음
      </StyledNextButton>

      <StyledBeforeButton
        onClick={() => {
          navigate("/2")
        }}
      >
        이전
      </StyledBeforeButton>
    </StyledBackgroundDiv>
  )
}

const StyledBackgroundDiv = styled.div`
  &::before {
    display: block;
    content: "";
    background-image: url(${BackgroundToFollow});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
  }
`
const StyledNextButton = styled.button`
  position: Absolute;
  font-size: 50px;
  left: 50%;
  top: 85%;

  font-size: 40px;

  width: 200px;
  height: 75px;

  background-color: skyblue;
  color: white;
  border: none;

  border-radius: 45px;
`

const StyledBeforeButton = styled.button`
  position: Absolute;
  font-size: 50px;
  left: 35%;
  top: 85%;

  width: 200px;
  height: 75px;

  background-color: skyblue;
  color: white;
  border: none;

  border-radius: 45px;
`
const StyledMainBanner = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0px;
  left: 0px;
  padding: 23px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;

  white-space: nowrap;
`
const StyledMainBannerFont = styled.a`
  border: none;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-style: normal;

  font-size: 35px;
  color: white;
`

const StyledMainBannerPageFont = styled.a`
  position: fixed;

  border: none;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 100;
  font-style: normal;
  right: 5%;
  font-size: 30px;
  color: white;
`
const StyledPageDescriptionFont = styled.div`
  font-weight: 600;
  position: fixed;
  font-size: 45px;
  left: 10%;
  top: 30%;
`
const StyledPageDescriptionFontBlueEmphasis = styled.div`
  font-weight: 900;
  font-size: 66;
  color: blue;
`

const StyledAdditionalExplanation = styled.div`
  font-weight: 600;
  position: absolute;
  font-size: 30px;
  left: 10%;
  top: 60%;
`
