import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import tutorialGuy from "../../assets/TutorialBackgroundImages/TutorialGuy.jpg"

export function HomePageTutorial() {
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

      {/* <StyledTutorialGuyTranslucentBackgroundImg
        src={tutorialGuy}
        alt="This guy is a tutorial guy."
      ></StyledTutorialGuyTranslucentBackgroundImg> */}

      <StyledSimpleHomepageDescription>
        모른채로 있던 빠르고 간편한 단축키들,
        <StyledSimpleHomepageDescriptionBlueHighlight>
          단축키 학습 도우미와 함께
        </StyledSimpleHomepageDescriptionBlueHighlight>
      </StyledSimpleHomepageDescription>

      <StyledAdditionalExplanation>
        단축키 학습 도우미는 4가지 폭넓은 분야의 단축키를
        <br />
        사용자의 시점에서 실용적으로 사용할수 있게 도와줍니다.
        <br />
        다음 버튼을 눌러 홈페이지의 가이드를 읽어보세요!
      </StyledAdditionalExplanation>

      <StyledNextButton
        onClick={() => {
          navigate("/2")
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

const StyledBackgroundDiv = styled.div`
  &::before {
    display: block;
    content: "";
    background-image: url(${tutorialGuy});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    opacity: 0.6;
  }
`

const StyledTutorialGuyTranslucentBackgroundImg = styled.img`
  height: 100vh;
  width: 100%;
  background-color: #000;

  background-size: cover;
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

const StyledSimpleHomepageDescription = styled.p`
  user-select: none;
  animation-duration: 3s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      transform: translateX(100%);
      width: 300%;
    }

    to {
      transform: translateX(0);
      width: 100%;
    }
  }

  font-weight: 600;
  position: fixed;
  font-size: 45px;
  left: 10%;
  top: 30%;
`
const StyledSimpleHomepageDescriptionBlueHighlight = styled.div`
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
const StyledNextButton = styled.button`
  position: absolute;
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

  background-color: gray;
  color: white;
  border: none;

  border-radius: 45px;
`
