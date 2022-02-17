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

# TechMaster User Side Frontend

Giao diện dành cho User (student).

## Cài đặt

```
git clone --recurse-submodules https://github.com/techmaster-vietnam/frontend-user-side.git
cd frontend-user-side
yarn install
```

Nếu chưa có `yarn` thì cài bằng lệnh `npm install -g yarn`

### Chạy môi trường development

```
yarn start
```

### Build và test thử production

Build:

```
yarn build
```

Test thử bằng cách serve thư mục **build** bằng package `serve`:

```
serve -s build
```

Nếu chưa có package `serve` thì cài global bằng lệnh `yarn global add serve`.

### Cấu trúc thư mục

Code nằm trong thư mục `src`.

-   **assets**: Chứa các file tĩnh dùng chung như image, font, ... file riêng thì có thể để cạnh Component.
-   **components**: Chứa các Component dùng chung cho toàn bộ project.
-   **libraries**: Chứa code dùng chung cho nhiều project. Là một submodule từ repo [https://github.com/techmaster-vietnam/frontend-library](https://github.com/techmaster-vietnam/frontend-library/).
-   **models**: Định nghĩa kiểu dữ liệu.
-   **layouts**: Chứa các layout chính của trang và các thành phần trên layout đó.
-   **pages**: Chứa các Component đại diện cho các trang của website. Mỗi trang là 1 folder, trong đó chứa tất cả Component tạo nên trang đó.
-   **routers**: Cấu hình đường dẫn cho website.
-   **services**: Các hàm lấy dữ liệu, thường là lấy từ server backend qua REST API. Sử dụng RTK Query trong Redux Toolkit.
-   **store**: Quản lý global state, sử dụng Redux Toolkit.
-   **utils**: Chứa các hàm Javascript dùng chung cho toàn bộ project, có thể là các function trả về JSX element hoặc custom hook.

### Code convention

Code sử dụng `TypeScript`. Luôn định nghĩa rõ ràng kiểu dữ liệu.

Format code sử dụng extension `Prettier` và `ESLint`.
Tham khảo: https://www.sitepoint.com/react-with-typescript-best-practices/

Mỗi người code trên 1 branch (tương đương 1 feature issue), nếu là fix bug thì code trên feature issue tương ứng.
Sau khi hoàn thành feature thì tạo PR (pull request) để leader merge code vào branch dev. Chú ý commit có ghi mã issue (ví dụ #1).

#### Components

Một Component không dài quá 150 dòng.

Khai báo Component theo kiểu:

```
const MyComponent = (props: MyComponentProps): ReactElement => {
    return <></>
}

MyComponent.defaultProps = {
    props1: value1,
    ...
}
```

#### Style

Sử dụng thư viện UI Antd: https://ant.design/

Sử dụng Styled Component để style cho từng Component: https://styled-components.com/.

Ví dụ ghi đè style của Antd:

```
const Button = styled(AntButton)`
  font-size: 16px;
  height: 30px;
  line-height: 1;
  border-radius: 5px;
`;
```

Global style viết ở `src/index.css`.

### Cấu hình router

Router hiện tại được cấu hình trong thư mục `routers` theo mô hình sau:

-   Mỗi route sẽ có tên được khai báo trong `routeNames.ts`
-   Route chính (cấp cao nhất) là `app` có nhiệm vụ điều hướng layout
-   Trong layout đó sẽ chứa các subroute điều hướng các page con trên layout đó

#### Thêm route

1. Khai báo name, path trong `routeNames.ts`,
2. Khai báo route và layout hoặc component

**Chú ý**

Tất cả đường dẫn (`Link`, `NavLink`) đều sử dụng tên path đã khai báo, với path có tham số, sử dụng hàm `generatePath` của `react-router` để tạo đường dẫn

Ví dụ:

-   Path: `{ profile: "/profile" }`
-   Use: `<Link to={profile}>`

-   Path: `{ classroom: "/classroom/:classroom" }`
-   Gen: `generatePath(classroom, {classroom: "web"})` => Kết quả: `/classroom/web`
-   Use: `<Link to={generatePath(...)}>`

#### Thêm layout

Khai báo route và layout tương ứng ở `routers/app.route.ts`.

Thêm layout trong thư mục `src/layouts`, mỗi layout là một thư mục, tham khảo code của layout cho home `src/layouts/home`.

Phần nội dung động của layout sử dụng component `layouts/layout-component/ContentRoute` để render ra các routes sử dụng layout này (khai báo trong thư mục `routes`)
