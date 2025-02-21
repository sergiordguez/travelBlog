import React, { useState } from "react";
import { MyRoutes } from "./routers/routes";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import MobileFooter from "./components/MobileFooter";
import { Light, Dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

export const ThemeContext = React.createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = useState(false); // Iniciar la barra lateral cerrada
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container>
              <SidebarWrapper>
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
              </SidebarWrapper>
              <Content className={sidebarOpen ? "sidebarState active" : ""}>
                <MyRoutes />
              </Content>
              <MobileFooter />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.3s;
  color: ${({ theme }) => theme.text};
`;

const SidebarWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  transition: all 0.3s;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "300px" : "60px")};
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export default App;