import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import EfficiencyBackground from "../../assets/TutorialBackgroundImages/EfficiencyTutorialBackground.jpg"
import { routes } from "../../routes"

export function HomePageTutorialP2() {
  const navigate = useNavigate()

  return (
    <StyledBackgroundDiv className="background">
      <StyledHeaderDiv>
        <StyledWindowLink
          onClick={() => {
            navigate(routes.windows)
          }}
        >
          윈도우
        </StyledWindowLink>
        <StyledHomeLink
          onClick={() => {
            navigate(routes.home)
          }}
        >
          단축키 도우미
        </StyledHomeLink>
      </StyledHeaderDiv>

      <StyledTitleDiv>
        <div>사용자 친화적인</div>
        <span>편의성 기능</span>
      </StyledTitleDiv>

      <StyledDescriptionDiv>
        단축키 학습 도우미는 원하는 단축키들을 빠르게 찾기 위해
        <br />
        페이지마다 키워드가 나뉘어져 있습니다.
        <br />
        전용 키워드 페이지나 페이지의 키워드를 클릭해 단축키들을 효율적으로
        배워보세요!
      </StyledDescriptionDiv>

      <StyledButtonsDiv>
        <button
          onClick={() => {
            navigate(routes.home)
          }}
        >
          이전
        </button>

        <button
          onClick={() => {
            navigate(routes.home3)
          }}
        >
          다음
        </button>
      </StyledButtonsDiv>
    </StyledBackgroundDiv>
  )
}

const StyledBackgroundDiv = styled.div`
  &::before {
    display: block;
    content: "";
    background-image: url(${EfficiencyBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  padding: 200px 50px;
`

const StyledHeaderDiv = styled.div`
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

const StyledWindowLink = styled.a`
  border: none;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 100;
  font-style: normal;
  font-size: 30px;
  color: white;
`

const StyledHomeLink = styled.a`
  border: none;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 35px;
  color: white;
`

const StyledTitleDiv = styled.div`
  margin-bottom: 50px;
  font-weight: 600;
  font-size: 45px;

  span {
    font-weight: 900;
    font-size: 66;
    color: blue;
  }
`

const StyledDescriptionDiv = styled.div`
  margin-bottom: 50px;
  font-weight: 600;
  font-size: 30px;
`

const StyledButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 100px;
  }

  button {
    padding: 20px 24px;
    font-size: 50px;
    color: white;
    background-color: skyblue;
    border: none;
    border-radius: 45px;
  }
`
