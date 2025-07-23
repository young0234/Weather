# **Weather site Project:** 
### 날씨 앱 사이트 (작성중입니다.)

<br/>
  
**박서영, Park seo young**  

<br/>

##  관련 링크
- [🎨 디자인 시안](https://www.figma.com/design/lhsD7THnd7QKUGuzQvD08d/%EB%82%A0%EC%94%A8%EC%95%B1?node-id=0-1&t=Pn2rvVyDgRYCBTxf-1)
- [🌐 DEMO 페이지](https://weather500.netlify.app/)

</br>
</br>
</br>


---

#### **Schedule** 
> **2025.07.08. - 2025.07.14. (5h - 6h, weekdays only)**

</br>

> 1. Design: 2025.07.08.
> 2. Development: 2025.07.09. - 2025.07.13.


<br/>
<br/>
<br/>

## 목차
1. [프로젝트 개요](#1-프로젝트-개요)   
2. [파일 구성](#2-파일-구성)   
3. [주요 기능 소개](#3-주요-기능-소개)    
4. [작업 환경](#4-작업-환경)   

</br>
</br>
</br>

---

## 1. 프로젝트 개요

### 1.1. 작업 배경
다양한 위치별 날씨를 손쉽게 확인할 수 있는 인터페이스에 대한 수요가 증가하고 있습니다. 다양한 위치별 날씨를 손쉽게 확인할 수 있는 인터페이스에 대한 수요가 증가하고 있습니다. 다양한 위치별 날씨를 손쉽게 확인할 수 있는 인터페이스에 대한 수요가 증가하고 있습니다.

기술의 발전과 함께 사용자들은 더욱 빠르고 편리한 정보 접근을 기대하고 있습니다. 특히 모바일과 웹 환경에서는 단순한 정보 제공을 넘어, 시각적이고 직관적인 인터페이스가 필수적이며, 이는 사용자 만족도와 서비스의 경쟁력 향상에 크게 기여합니다. 따라서 위치와 날씨 변화에 따라 동적으로 반응하는 UI를 구현하는 것은 현대 사용자 경험 디자인에서 중요한 요소로 자리 잡고 있습니다.

</br>

이 프로젝트의 목적은 다음과 같다.   
1. 버튼 클릭을 통해 다양한 위치의 날씨 정보와 아이콘이 즉시 변경되어 사용자에게 명확한 정보를 제공합니다.
2. 위치와 날씨에 맞는 배경 이미지 전환으로 사용자가 현재 날씨 분위기를 시각적으로 느낄 수 있도록 합니다.
3. 실시간 정보 업데이트와 함께 UI 요소가 변화하는 인터랙티브한 환경을 구축하여 사용자 경험을 극대화합니다.



</br>
</br>
</br>

### 1.2. 키워드

1. **동적 UI (Dynamic UI)**   
  1.1. 사용자 입력에 따라 화면이 실시간으로 변화하는 인터페이스

</br>

2. **위치 기반 날씨 정보 (Location-based Weather)**   
  2.1. 사용자의 선택한 위치에 맞춘 맞춤형 날씨 데이터 제공
   
</br>

4. **시각적 피드백 (Visual Feedback)**   
  3.1. 아이콘과 배경 이미지로 직관적인 상태 전달

   </br>
   </br>
   </br>
   
---

## 2. 파일 구성
```
🌱 artcenter  
 ┣ 📂 public
 ┣ 📂 src
 ┣ 📄 .gitignore
 ┣ 📄 packgage-lock.json       
 ┗ 📄 packgage.json 
     
```

   </br>
   </br>
   </br>

---

## 3. 주요 기능 소개

### 3.1. 메인 페이지
#### 3.1.1. 메인비주얼

![메인페이지](https://github.com/user-attachments/assets/1b5ef677-5e4e-4aa5-a955-6689cdd86203)

1. 상단에는 저를 소개하는 한 줄 멘트와 이미지를 배치해, 사용자에게 첫인상을 효과적으로 전달할 수 있도록 했습니다.
2. 콘텐츠를 정렬하여 정보 구조를 명확히 하고, 사용자가 쉽게 내용을 파악할 수 있도록 구성했습니다.
3. 각 카드에는 제목, 한 줄 소개, 작업 뱃지를 포함해 핵심 정보를 직관적으로 전달하도록 설계했습니다.

</br>
</br>
</br>

#### 3.1.2. 모달 창

![메인페이지](https://github.com/user-attachments/assets/6f0ae8a0-8eb0-4ff0-aa87-01bb0d9b10dd)
1. 상세 페이지에 들어가기 전, 간략히 정리된 핵심 정보를 통해 프로젝트 내용을 빠르게 확인할 수 있도록 구성하였습니다.
2. 좌측에는 직접 제작한 웹페이지의 화면을, 우측에는 관련 정보를 배치하여 시각적 균형을 맞췄으며, 하단의 버튼을 통해 상세 페이지로 자연스럽게 이동할 수 있도록 설계했습니다.

</br>
</br>
</br>


---

### 3.2. 서브 페이지


#### 3.2.1. 상단버튼

![상단버튼](https://github.com/user-attachments/assets/1d7c7018-4488-447a-ac2c-993723123c87)
1. 상단에 이력서, 이메일, 홈 버튼을 배치하여 사용자가 필요한 정보에 빠르게 접근할 수 있도록 접근성을 고려한 UI로 구성하였습니다.
2. 이력서는 클릭 시 바로 다운로드되며, 이메일은 클릭만으로 자동 복사되도록 설정하여 사용자 편의성을 높였습니다.

</br>
</br>
</br>

#### 3.2.2. 우측버튼

![우측버튼](https://github.com/user-attachments/assets/208fcf29-66ae-4bee-9de1-77eb15b46b8a)
1. 각각의 버튼은 관련 페이지로 직접 연결되어 있어, 원하는 콘텐츠를 빠르게 확인할 수 있습니다.
2. 스크롤 시에도 주요 요소들은 고정된 위치에 유지되어, 필요한 정보를 언제든지 쉽게 확인할 수 있도록 구성했습니다.

</br>
</br>
</br>

#### 3.2.3. 상세페이지

![상세페이지](https://github.com/user-attachments/assets/2213cfa1-bdc1-4ca0-830c-2cc2abccf5e0)
1. 각 프로젝트의 기획 의도와 제작 과정을 상세히 서술하여, 작업에 대한 이해도를 높였습니다.
2. 페이지 하단에는 스크롤이 일정 수준 이상 내려갔을 때 자동으로 나타나는 탑 버튼(Top Button)을 적용해, 긴 콘텐츠 탐색 후에도 쉽게 상단으로 이동할 수 있도록 했습니다.

</br>
</br>
</br>

---

## 4. 작업 환경

1. **개발 환경**  
   <img src="https://img.shields.io/badge/windows10-0078D6?style=flat-square&logo=windows10&logoColor=white"/>

2.  **사용 프로그램**  
   <img src="https://img.shields.io/badge/Vs code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>

3.  **사용 기술**  
 <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> 
    
    
4.  **작업 해상도**   
    4.1.  PC 기준 1920X1080  
    4.2.  반응형 대응 500px

</br>
</br>
</br>

---


