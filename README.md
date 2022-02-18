# NguyenCongMinh
1. Thực hành tạo toolbar
![Screenshot](https://github.com/minhnc62/NguyenCongMinh/blob/main/Toolbar/public/images/toolbar.PNG)

2. Cách cài đặt
  - npm i
  - Cài đặt vite - react : npm create vite@latest
  - Cài đặt antd và Ant Design icon: npm install antd - npm install --save @ant-design/icons
  - Cài đặt styled-components : npm install --save styled-components
3. Những gì em học được
  - Biết cách sử dụng Ant Desing icon trong code
  - Sử dụng styled trong styled-components để thay đổi css
  - Gắn sự kiện cho button


{\rtf1\ansi\ansicpg1252\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # TechMaster User Side Frontend\
\
Giao di\uc0\u7879 n d\'e0nh cho User (student).\
\
## C\'e0i \uc0\u273 \u7863 t\
\
```\
git clone --recurse-submodules https://github.com/techmaster-vietnam/frontend-user-side.git\
cd frontend-user-side\
yarn install\
```\
\
N\uc0\u7871 u ch\u432 a c\'f3 `yarn` th\'ec c\'e0i b\u7857 ng l\u7879 nh `npm install -g yarn`\
\
### Ch\uc0\u7841 y m\'f4i tr\u432 \u7901 ng development\
\
```\
yarn start\
```\
\
### Build v\'e0 test th\uc0\u7917  production\
\
Build:\
\
```\
yarn build\
```\
\
Test th\uc0\u7917  b\u7857 ng c\'e1ch serve th\u432  m\u7909 c **build** b\u7857 ng package `serve`:\
\
```\
serve -s build\
```\
\
N\uc0\u7871 u ch\u432 a c\'f3 package `serve` th\'ec c\'e0i global b\u7857 ng l\u7879 nh `yarn global add serve`.\
\
### C\uc0\u7845 u tr\'fac th\u432  m\u7909 c\
\
Code n\uc0\u7857 m trong th\u432  m\u7909 c `src`.\
\
- **assets**: Ch\uc0\u7913 a c\'e1c file t\u297 nh d\'f9ng chung nh\u432  image, font, ... file ri\'eang th\'ec c\'f3 th\u7875  \u273 \u7875  c\u7841 nh Component.\
- **components**: Ch\uc0\u7913 a c\'e1c Component d\'f9ng chung cho to\'e0n b\u7897  project.\
- **libraries**: Ch\uc0\u7913 a code d\'f9ng chung cho nhi\u7873 u project. L\'e0 m\u7897 t submodule t\u7915  repo [https://github.com/techmaster-vietnam/frontend-library](https://github.com/techmaster-vietnam/frontend-library/).\
- **models**: \uc0\u272 \u7883 nh ngh\u297 a ki\u7875 u d\u7919  li\u7879 u.\
- **layouts**: Ch\uc0\u7913 a c\'e1c layout ch\'ednh c\u7911 a trang v\'e0 c\'e1c th\'e0nh ph\u7847 n tr\'ean layout \u273 \'f3.\
- **pages**: Ch\uc0\u7913 a c\'e1c Component \u273 \u7841 i di\u7879 n cho c\'e1c trang c\u7911 a website. M\u7895 i trang l\'e0 1 folder, trong \u273 \'f3 ch\u7913 a t\u7845 t c\u7843  Component t\u7841 o n\'ean trang \u273 \'f3.\
- **routers**: C\uc0\u7845 u h\'ecnh \u273 \u432 \u7901 ng d\u7851 n cho website.\
- **services**: C\'e1c h\'e0m l\uc0\u7845 y d\u7919  li\u7879 u, th\u432 \u7901 ng l\'e0 l\u7845 y t\u7915  server backend qua REST API. S\u7917  d\u7909 ng RTK Query trong Redux Toolkit.\
- **store**: Qu\uc0\u7843 n l\'fd global state, s\u7917  d\u7909 ng Redux Toolkit.\
- **utils**: Ch\uc0\u7913 a c\'e1c h\'e0m Javascript d\'f9ng chung cho to\'e0n b\u7897  project, c\'f3 th\u7875  l\'e0 c\'e1c function tr\u7843  v\u7873  JSX element ho\u7863 c custom hook.\
\
### Code convention\
\
Code s\uc0\u7917  d\u7909 ng `TypeScript`. Lu\'f4n \u273 \u7883 nh ngh\u297 a r\'f5 r\'e0ng ki\u7875 u d\u7919  li\u7879 u.\
\
Format code s\uc0\u7917  d\u7909 ng extension `Prettier` v\'e0 `ESLint`.\
Tham kh\uc0\u7843 o: https://www.sitepoint.com/react-with-typescript-best-practices/\
\
M\uc0\u7895 i ng\u432 \u7901 i code tr\'ean 1 branch (t\u432 \u417 ng \u273 \u432 \u417 ng 1 feature issue), n\u7871 u l\'e0 fix bug th\'ec code tr\'ean feature issue t\u432 \u417 ng \u7913 ng.\
Sau khi ho\'e0n th\'e0nh feature th\'ec t\uc0\u7841 o PR (pull request) \u273 \u7875  leader merge code v\'e0o branch dev. Ch\'fa \'fd commit c\'f3 ghi m\'e3 issue (v\'ed d\u7909  #1).\
\
#### Components\
\
M\uc0\u7897 t Component kh\'f4ng d\'e0i qu\'e1 150 d\'f2ng.\
\
Khai b\'e1o Component theo ki\uc0\u7875 u:\
\
```\
const MyComponent = (props: MyComponentProps): ReactElement => \{\
    return <></>\
\}\
\
MyComponent.defaultProps = \{\
    props1: value1,\
    ...\
\}\
```\
\
#### Style\
\
S\uc0\u7917  d\u7909 ng th\u432  vi\u7879 n UI Antd: https://ant.design/\
\
S\uc0\u7917  d\u7909 ng Styled Component \u273 \u7875  style cho t\u7915 ng Component: https://styled-components.com/.\
\
V\'ed d\uc0\u7909  ghi \u273 \'e8 style c\u7911 a Antd:\
\
```\
const Button = styled(AntButton)`\
  font-size: 16px;\
  height: 30px;\
  line-height: 1;\
  border-radius: 5px;\
`;\
```\
\
Global style vi\uc0\u7871 t \u7903  `src/index.css`.\
\
### C\uc0\u7845 u h\'ecnh router\
\
Router hi\uc0\u7879 n t\u7841 i \u273 \u432 \u7907 c c\u7845 u h\'ecnh trong th\u432  m\u7909 c `routers` theo m\'f4 h\'ecnh sau:\
\
- M\uc0\u7895 i route s\u7869  c\'f3 t\'ean \u273 \u432 \u7907 c khai b\'e1o trong `routeNames.ts`\
- Route ch\'ednh (c\uc0\u7845 p cao nh\u7845 t) l\'e0 `app` c\'f3 nhi\u7879 m v\u7909  \u273 i\u7873 u h\u432 \u7899 ng layout\
- Trong layout \uc0\u273 \'f3 s\u7869  ch\u7913 a c\'e1c subroute \u273 i\u7873 u h\u432 \u7899 ng c\'e1c page con tr\'ean layout \u273 \'f3\
\
#### Th\'eam route\
\
1. Khai b\'e1o name, path trong `routeNames.ts`,\
2. Khai b\'e1o route v\'e0 layout ho\uc0\u7863 c component\
\
**Ch\'fa \'fd**\
\
T\uc0\u7845 t c\u7843  \u273 \u432 \u7901 ng d\u7851 n (`Link`, `NavLink`) \u273 \u7873 u s\u7917  d\u7909 ng t\'ean path \u273 \'e3 khai b\'e1o, v\u7899 i path c\'f3 tham s\u7889 , s\u7917  d\u7909 ng h\'e0m `generatePath` c\u7911 a `react-router` \u273 \u7875  t\u7841 o \u273 \u432 \u7901 ng d\u7851 n\
\
V\'ed d\uc0\u7909 :\
\
- Path: `\{ profile: "/profile" \}`\
- Use: `<Link to=\{profile\}>`\
\
- Path: `\{ classroom: "/classroom/:classroom" \}`\
- Gen: `generatePath(classroom, \{classroom: "web"\})` => K\uc0\u7871 t qu\u7843 : `/classroom/web`\
- Use: `<Link to=\{generatePath(...)\}>`\
\
#### Th\'eam layout\
\
Khai b\'e1o route v\'e0 layout t\uc0\u432 \u417 ng \u7913 ng \u7903  `routers/app.route.ts`.\
\
Th\'eam layout trong th\uc0\u432  m\u7909 c `src/layouts`, m\u7895 i layout l\'e0 m\u7897 t th\u432  m\u7909 c, tham kh\u7843 o code c\u7911 a layout cho home `src/layouts/home`.\
\
Ph\uc0\u7847 n n\u7897 i dung \u273 \u7897 ng c\u7911 a layout s\u7917  d\u7909 ng component `layouts/layout-component/ContentRoute` \u273 \u7875  render ra c\'e1c routes s\u7917  d\u7909 ng layout n\'e0y (khai b\'e1o trong th\u432  m\u7909 c `routes`)}