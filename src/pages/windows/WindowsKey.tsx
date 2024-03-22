import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
// 이 아래로는 전부 이미지 import
import WindowsA from "../../assets/WindowsImgs/Windows + A.jpg"
import WindowsI from "../../assets/WindowsImgs/Windows + I.jpg"
import WindowsE from "../../assets/WindowsImgs/Windows + E.jpg"
import WindowsL from "../../assets/WindowsImgs/Windows + L.jpg"
import WindowsR from "../../assets/WindowsImgs/Windows + R.jpg"
import WindowsCtrlD from "../../assets/WindowsImgs/Windows + Ctrl + D.jpg"
import WindowsRest from "../../assets/WindowsImgs/Windows + ,.jpg"
import WindowsTab from "../../assets/WindowsImgs/Windows + Tab.jpg"
import WindowsPlus from "../../assets/WindowsImgs/Windows + +.jpg"
import WindowsFullStop from "../../assets/WindowsImgs/Windows + ..jpg"
import WindowsR2 from "../../assets/WindowsImgs/Windows + R2.jpg"
import WindowsShiftS from "../../assets/WindowsImgs/Windows + Shift +  S.jpg"
import WindowsShiftS2 from "../../assets/WindowsImgs/Windows + Shift +  S2.jpg"

export function WindowsPage() {
  const navigate = useNavigate()
  return (
    <>
      <StyledWindowPageTitle>
        윈도우 단축키
        <br />
        <br />
        윈도우의 기본적인 단축키들을 설명합니다.
        <br />* 주로 창을 관리하거나 윈도우가 지원하는 다양한 보조기능들이
        해당됩니다.
      </StyledWindowPageTitle>

      <StyledTeleporterBox>
        <StyledTeleporterBoxIndexFont>목차</StyledTeleporterBoxIndexFont>
        <br />
        <StyledTeleporterFont href="#WindowsTeleport1">
          1. 보조기능
        </StyledTeleporterFont>
        <br />
        <StyledTeleporterFont href="#WindowsTeleport2">
          2. 창 관리
        </StyledTeleporterFont>
        <br />
        <StyledTeleporterFont href="#WindowsTeleport3">
          3. 가상 데스크톱
        </StyledTeleporterFont>
      </StyledTeleporterBox>
      <br />

      <StyledWindowsPageFont>
        <br />
        <br />
        <StyledTeleportFont id="WindowsTeleport1">
          1. 보조기능
        </StyledTeleportFont>
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows 키 + A
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsA}></StyledWindowsImg>
        <br />
        알림센터를 열어 여러 알림내역을 확인할 수 있으며
        <br />
        보조기능들 또한 결집되어 클릭해 사용할수 있기 때문에 매우 유용합니다.
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows 키 + I
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsI}></StyledWindowsImg>
        <br />
        설정창을 엽니다.
        <br />
        앱에서 설치한 앱들을 제거하거나,장치에서 블루투스 기기를 연결하고, 설정
        검색에서 이 외의 기능들을 검색할수 있습니다.
        <br />
        <StyledWindowsPageFontEmphasis>
          <br />
          Windows 키 + E
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsE}></StyledWindowsImg>
        <br />
        파일 탐색기를 엽니다.
        <br />
        파일 탐색기의 첫 창에는 자주 사용한 폴더와 최근에 사용한 파일이 나오기
        때문에 경로가 어디였는지 잊어버린 폴더와 파일을 찾는데 도움이 됩니다.
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + L
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsL}></StyledWindowsImg>
        <br />
        PC를 오래 방치하지 않아도 잠금상태로 만들수 있습니다.
        <br />
        Microsoft계정을 전환할 일이 있을때 또한 편리하게 전환할 수 있습니다.
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + R
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsR2}></StyledWindowsImg>
        <br />
        <br />
        <StyledWindowsImg src={WindowsR}></StyledWindowsImg>
        <br />
        실행 창을 엽니다.
        <br />
        평소에 자주 쓸 파일이 있다면 파일의 속성(R) 에서 파일 위치 열기(F)를
        통해 열어둔 실행 창에 드래그를 하면 경로가 설정되며, 엔터를 누르면
        지정한 파일이 실행됩니다.
        <br />
        실행은 이전에 실행한 파일의 경로를 기억하기 때문에 나중에 다시 Windows +
        R 키로 실행 창을 키고 엔터를 누른다면 편리하게 이전에 지정한 파일을
        실행시킬수 있습니다.
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + Shift + S
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsShiftS}></StyledWindowsImg>
        <br />
        캡처도구와 비슷하게 화면을 드래그해 스크린샷을 찍을수 있습니다.
        <br />
        <br />
        <StyledWindowsImg src={WindowsShiftS2}></StyledWindowsImg>
        <br />
        캡처 완료 시 우측 하단에 작은 알림이 옵니다. 알림을 클릭하면 스크린샷을
        확인해볼수 있으며, 캡처도구와의 차이점은 <br />
        캡처 후 자동으로 복사가 되고 자동으로 닫히기 때문에 메시지를 주고 받는
        등 주로 붙여넣기를 사용하는 일회용 사진들은 이 단축키를, 오래 간직할
        사진이라면 캡처도구를 쓰는게 좋습니다.
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + .
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsFullStop}></StyledWindowsImg>
        <br />
        이모지 창을 띄워줍니다.
        <br />
        이모지들을 클릭하면 작성중인 글에 클릭한 이모지를 사용할수 있습니다. 😉
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + +
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsPlus}></StyledWindowsImg>
        <br />
        화면을 확대하는 돋보기를 실행합니다.
        <br />
        Windows키를 누른채로 +키를 계속 누르면 화면이 더 확대되며, -키를
        누른다면 축소됩니다.
        <br />
        <br />
        <StyledTeleportFont id="WindowsTeleport2">
          2. 창 관리
        </StyledTeleportFont>
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + D
        </StyledWindowsPageFontEmphasis>
        <br />
        실행중이던 창을 뒤로하고 바탕화면을 보여줍니다.
        <br />
        다시 한번 누른다면 단축키를 사용하기 전의 창으로 돌아갑니다.
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + Tab
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsTab}></StyledWindowsImg>
        작업 보기를 엽니다.
        <br />
        작업 보기 창에선 수많은 창을 한눈에 관리하는데 도움이 됩니다.
        <StyledWindowsPageFontEmphasis>
          Windows키 + ,
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsRest}></StyledWindowsImg>
        <br />
        현재 실행중인 창을 반투명화 하여 바탕화면을 미리 볼수 있습니다.
        <br />
        <br />
        <StyledTeleportFont id="WindowsTeleport3">
          3. 가상 데스크톱
        </StyledTeleportFont>
        <br />
        <br />
        가상 데스크톱은 필요에 따라 다양한 작업에 컴퓨터를 2개 쓰는 지금,
        <br />
        컴퓨터를 더 살 필요 없이 컴퓨터 하나로 바탕화면을 원하는만큼 만들어
        사용해 같은 효율을 내게끔 할수 있습니다.
        <br />
        하단에 겹쳐있는 단축키의 배치 덕분에 사용하기 편하고 사용자가 적응만
        된다면 활용도가 무긍무진한 기능입니다.
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + Ctrl + D
        </StyledWindowsPageFontEmphasis>
        <br />
        <StyledWindowsImg src={WindowsCtrlD}></StyledWindowsImg>
        <br />
        새 가상 데스크톱을 하나 만듭니다.
        <br />
        Windows키 + Tab으로 작업 보기를 통해 자세히 확인해볼수 있습니다.
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + Ctrl + 좌 우 방향키
        </StyledWindowsPageFontEmphasis>
        <br />
        앞서 만든 데스크톱들을 넘나들게 도와줍니다.
        <br />
        <br />
        <StyledWindowsPageFontEmphasis>
          Windows키 + Ctrl + F4
        </StyledWindowsPageFontEmphasis>
        <br />
        실행중인 데스크톱을 닫아줍니다.
      </StyledWindowsPageFont>
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
const StyledWindowsPageFont = styled.div`
  font-weight: 400;
  position: Absolute;
  font-size: 20px;
  left: 100;
  top: 100%;
  margin: 5px;
`
const StyledWindowsPageFontEmphasis = styled.div`
  font-weight: 600;
  font-size: 25px;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: gray;
`

const StyledWindowPageTitle = styled.div`
  font-weight: 900;
  left: 100;
  top: 10%;
  position: Absolute;
  font-size: 40px;
`
const StyledWindowsImg = styled.img``

const StyledTeleportFont = styled.a`
  font-size: 25px;
  font-weight: 1000;
  color: blue;
`

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
