import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import EfficiencyBackground from "../../assets/TutorialBackgroundImages/EfficiencyTutorialBackground.jpg"

export function HomePageTutorialP2() {
  const navigate = useNavigate()

  return (
    <StyledBackgroundDiv className="background">
      <StyledMainBanner>
        <StyledMainBannerPagePont
          onClick={() => {
            navigate("/windows")
          }}
        >
          윈도우
        </StyledMainBannerPagePont>
        <StyledMainBannerPont
          onClick={() => {
            navigate("/")
          }}
        >
          단축키 도우미
        </StyledMainBannerPont>
      </StyledMainBanner>

      <StyledPageDescriptionFont>
        사용자 친화적인
        <StyledPageDescriptionFontBlueEmphasis>
          편의성 기능
        </StyledPageDescriptionFontBlueEmphasis>
      </StyledPageDescriptionFont>

      <StyledAdditionalExplanation>
        단축키 학습 도우미는 원하는 단축키들을 빠르게 찾기 위해
        <br />
        페이지마다 키워드가 나뉘어져 있습니다.
        <br />
        전용 키워드 페이지나 페이지의 키워드를 클릭해 단축키들을 효율적으로
        배워보세요!
      </StyledAdditionalExplanation>
      <StyledNextButton
        onClick={() => {
          navigate("/3")
        }}
      >
        다음
      </StyledNextButton>

      <StyledBeforeButton
        onClick={() => {
          navigate("/")
        }}
      >
        이전
      </StyledBeforeButton>
    </StyledBackgroundDiv>
  )
}

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
const StyledMainBannerPont = styled.a`
  border: none;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-style: normal;

  font-size: 35px;
  color: white;
`

const StyledMainBannerPagePont = styled.a`
  position: fixed;

  border: none;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 100;
  font-style: normal;
  right: 5%;
  font-size: 30px;
  color: white;
`
const StyledBackgroundDiv = styled.div`
  &::before {
    display: block;
    content: "";
    background-image: url(${EfficiencyBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
  }
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
