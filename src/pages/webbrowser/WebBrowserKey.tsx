import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import CtrlH from "../../assets/WebBrowserImgs/Ctrl + H.jpg"
import CtrlJ from "../../assets/WebBrowserImgs/Ctrl + J.jpg"
import AltE from "../../assets/WebBrowserImgs/Alt + E.jpg"
import ShiftEsc from "../../assets/WebBrowserImgs/Shift + Esc.jpg"
import CtrlF from "../../assets/WebBrowserImgs/Ctrl + F.jpg"
import CtrlU from "../../assets/WebBrowserImgs/Ctrl + U.jpg"
import CtrlD from "../../assets/WebBrowserImgs/Ctrl + D.jpg"

export function WebBrowserKey() {
  const navigate = useNavigate()
  return (
    <>
      <StyledWebBrowserPageTitle>
        웹 브라우저 단축키
        <br />
        <br />웹 브라우저들에서 사용할수 있는 단축키를 설명합니다.
      </StyledWebBrowserPageTitle>

      <StyledTeleporterBox>
        <StyledTeleporterBoxIndexFont>목차</StyledTeleporterBoxIndexFont>
        <br />
        <StyledTeleporterFont href="#WebBrowserTeleport1">
          1. 창/탭 관리
        </StyledTeleporterFont>
        <br />
        <StyledTeleporterFont href="#WebBrowserTeleport2">
          2. Chrome 기능 실행
        </StyledTeleporterFont>
        <br />
        <StyledTeleporterFont href="#WebBrowserTeleport3">
          3. Chrome 보조 도구
        </StyledTeleporterFont>
      </StyledTeleporterBox>

      <StyledWebBrowserPageFont>
        <StyledTeleportFont id="WebBrowserTeleport1">
          1. 창/탭 관리
        </StyledTeleportFont>
        <br />
        <br />
        웹 브라우저속 단축키의 기본중 기본이지만, 유용함은 어느 단축키에게
        밀리지 않습니다.
        <br />
        사용에 익숙해진다면 마우스로 조작하는것보다 훨씬 편해진 웹 브라우저를
        경험할수 있습니다!
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Ctrl + N</StyledWebBrowserFontEmphasis>
        <br />
        새 창을 열어줍니다.
        <br />
        <br />
        새 창은 탭과는 다르게 브라우저를 하나 더 실행합니다.
        <br />
        단축키를 사용하신 뒤 Alt + F4를 이용해 실행한 창을 닫고 단축키 도우미로
        돌아와주세요!
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Ctrl + T</StyledWebBrowserFontEmphasis>
        <br />
        새 탭을 열어줍니다.
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Ctrl + W</StyledWebBrowserFontEmphasis>
        <br />
        현재 실행중인 탭을 닫습니다.
        <br />
        <br />
        Alt + F4를 사용 시에는 탭 하나가 아니라 실행중이였던 모든 탭을
        닫아버리는 문제점이 있습니다.
        <br />
        하지만 Ctrl + W 를 이용한다면 마우스로 손을 이동하지 않고 편하게 하나의
        탭만 닫을수 있습니다.
        <br />
        특히 많은 탭을 실행중일때 하나하나 탭의 X단추까지 마우스를 움직이고
        누르는게 아닌 Ctrl + W를 반복해 누르면 빠르게 닫을수 있습니다. (꽤나
        재밌기도 하고요. ;)
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>
          Ctrl + Shift + T
        </StyledWebBrowserFontEmphasis>
        <br />
        최근에 닫은 탭을 다시 엽니다.
        <br />
        <br />
        탭을 실수로 닫아서 열어놨던 탭을 다시 검색해가며 번거롭게 탭을 복구한
        경험이 있지 않으셨나요?
        <br />
        Ctrl + Shift + T 키를 이용하면 실수로 닫은 순서대로 탭을 열여줘 빠르게
        브라우저 사용을 재개할수 있습니다.
        <br />
        <br />
        <StyledTeleportFont id="WebBrowserTeleport2">
          2. Chrome 기능 실행
        </StyledTeleportFont>
        <br />
        <br />
        Chrome의 여러 지원 기능을 단축키를 이용해 바로 실행할수 있습니다.
        <br />
        필요한 기능들을 일일이 검색하며 찾는 대신 단축키로 빠르게 이용해보세요!
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Ctrl + H</StyledWebBrowserFontEmphasis>
        <br />
        <StyledWebBroserImgs src={CtrlH}></StyledWebBroserImgs>
        <br />
        방문기록 페이지를 엽니다.
        <br />
        <br />
        최근 방문한 페이지나 과거에 방문했던 페이지를 체크하는데 유용하며, 기록
        검색을 활용해 먼 과거의 기록까지도 체크할수 있습니다.
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Ctrl + J</StyledWebBrowserFontEmphasis>
        <br />
        <StyledWebBroserImgs src={CtrlJ}></StyledWebBroserImgs>
        <br />
        다운로드 기록 페이지를 엽니다.
        <br />
        <br />
        최근 Chrome에서 다운로드한 폴더들을 확인할수 있습니다.
        <br />
        특히 이미지 저장을 통해 PC에 다량의 다운로드 파일이 생겼을때 관리하기
        좋습니다.
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Alt + E</StyledWebBrowserFontEmphasis>
        <br />
        <StyledWebBroserImgs src={AltE}></StyledWebBroserImgs>
        <br />
        Chrome 메뉴를 엽니다.
        <br />
        <br />
        로그인,북마크 목록 관리,확장 프로그램 관리 등 많은 기능들을 이용할 수
        있습니다.
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Shift + Esc</StyledWebBrowserFontEmphasis>
        <br />
        <StyledWebBroserImgs src={ShiftEsc}></StyledWebBroserImgs>
        <br />
        Chrome 작업관리자를 엽니다.
        <br />
        <br />
        Chrome 작업관리자는 PC에 내장된 작업관리자와 달리
        <br />
        메모리 사용량, CPU, 네트워크 프로세스 ID와 같이 Chrome에서 일어나는 크고
        작은 일들을 볼수 있습니다.
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Ctrl + F</StyledWebBrowserFontEmphasis>
        <br />
        <StyledWebBroserImgs src={CtrlF}></StyledWebBroserImgs>
        <br />
        검색 도구를 실행합니다.
        <br />
        <br />
        위키와 같이 정보성 글을 읽을때 원하는 문장을 찾는데 시간을 허비하지
        않으셨나요?
        <br />
        검색 도구를 실행하고 검색하고픈 단어를 쓴 후에 엔터키나 Ctrl + G 키를
        눌러 해당되는 단어를 상단부터 하나하나 찾아볼수 있습니다.
        <br />
        Ctrl + Shift + G키를 누른다면 하단에서 상단의 단어로 다시 이동합니다.
        <br />
        <br />
        <StyledTeleportFont id="WebBrowserTeleport3">
          3. Chrome 보조 도구
        </StyledTeleportFont>
        <br />
        <br />
        Chrome에는 단축키로만 실행이 가능해서 모르고 넘긴 유용한 기능들이
        많습니다.
        <br />
        새로 알게되는 보조도구들을 사용해 Chrome을 더 빠르고 즐겁게
        이용해보세요!
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Ctrl + U</StyledWebBrowserFontEmphasis>
        <br />
        <StyledWebBroserImgs src={CtrlU}></StyledWebBroserImgs>
        <br />
        현재 페이지의 HTML 소스 코드를 표시합니다.
        <br />
        <br />
        Ctrl + U로 실행한 HTML 소스 코드는 개발자 도구와는 다르게 수정할순
        없지만
        <br />
        앞서 설명한 Ctrl + F 와 같이 사용하면 웹 페이지에 관한 궁금증을
        해결해볼수 있습니다.
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Ctrl + D</StyledWebBrowserFontEmphasis>
        <br />
        <StyledWebBroserImgs src={CtrlD}></StyledWebBroserImgs>
        <br />
        현재 이용중인 페이지를 북마크에 추가합니다.
        <br />
        <br />
        이미 이용중인 페이지가 북마크에 추가된 생태라면
        <br />
        북마크 수정 창이 열려 폴더 저장 여부, 북마크 이름 수정 등을 이용할수
        있습니다.
        <br />
        Ctrl + Shift + D를 누른다면 현재 열린 모든 탭을 폴더로 저장합니다.
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>Ctrl + L</StyledWebBrowserFontEmphasis>
        <br />
        검색 주소창을 전체선택합니다.
        <br />
        <br />
        검색 주소창을 활성화시킬뿐만 아니라 Ctrl + A를 누른것처럼 전체선택을
        추가로 진행해주기 때문에
        <br />
        복사해둔 링크를 붙여넣거나 다른 검색을 이용할 일이 있을때 사용하기
        좋습니다. * Ctrl + L키를 실행하고 Ctrl키는 꾹 누른채로 C를 누르면
        링크복사를 빠르게 할수 있습니다.*
        <br />
        검색 주소창을 마우스로 클릭하지 않고 키보드에 손을 계속 올려둔채로
        브라우저를 이용해 보세요!
        <br />
        <br />
        <StyledWebBrowserFontEmphasis>
          Ctrl + Shift + B
        </StyledWebBrowserFontEmphasis>
        <br />
        북마크 바를 숨깁니다.
        <br />
        <br />
        북마크 바 때문에 브라우저를 캡쳐할때 예쁘게 캡쳐가 안되서 북마크 바
        아래로 캡처를 하지 않으셨나요?
        <br />
        Ctrl + Shift + B키를 누르면 북마크 바를 숨겨 온전하게 화면캡쳐를 할수
        있게됩니다!
        <br />
        단축키를 한번 더 실행하면 북마크 바를 다시 표시합니다.
      </StyledWebBrowserPageFont>
      <StyledMainBanner>
        <StyledMainBannerPont
          onClick={() => {
            navigate("/")
          }}
        >
          단축키 도우미
        </StyledMainBannerPont>
      </StyledMainBanner>
    </>
  )
}

const StyledWebBrowserPageTitle = styled.div`
  font-weight: 900;
  left: 100;
  top: 10%;
  position: Absolute;
  font-size: 40px;
`
const StyledWebBrowserPageFont = styled.div`
  font-weight: 400;
  position: Absolute;
  font-size: 20px;
  left: 100;
  top: 100%;
  margin: 5px;
`
const StyledWebBrowserFontEmphasis = styled.div`
  font-weight: 600;
  font-size: 25px;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: gray;
`
const StyledWebBroserImgs = styled.img``

//베너
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

// 목차
const StyledTeleporterBox = styled.div`
  position: Absolute;
  left: 100;
  top: 50%;

  width: 350px;
  height: 180px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
`
const StyledTeleporterBoxIndexFont = styled.div`
  font-size: 27px;
  font-weight: 1000;
`
const StyledTeleporterFont = styled.a`
  font-size: 20px;
  font-weight: 1000;
  color: blue;
`
const StyledTeleportFont = styled.a`
  font-size: 25px;
  font-weight: 1000;
  color: blue;
`
