/*
author: Andrea Habib
distributed under MIT license
Feel free to use, however please give credit to the original author
email: andrea.atef@yahoo.com
*/

import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FLOW_CHART_2018_2020 from "./flowcharts/FLOW_CHART_2018_2020";
import FLOW_CHART_2021_2022 from "./flowcharts/FLOW_CHART_2021_2022";
import FLOW_CHART_2013_2018 from "./flowcharts/FLOW_CHART_2013_2018";
import FLOW_CHART_2020_2021 from "./flowcharts/FLOW_CHART_2020_2021";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import { ThemeProvider } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();

  const isSmallMobile = useMediaQuery(theme.breakpoints.only("xs"), {
    noSsr: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.only("sm"), { noSsr: true });
  const isTablet = useMediaQuery(theme.breakpoints.only("md"), { noSsr: true });
  const isDesktop = useMediaQuery(theme.breakpoints.only("lg"), {
    noSsr: true,
  });
  const isWideScreen = useMediaQuery(theme.breakpoints.only("xl"), {
    noSsr: true,
  });

  // eslint-disable-next-line no-unused-vars
  const [x, setX] = useState(() => {
    if (isSmallMobile) {
      return window.innerWidth / 2 - 50;
    } else if (isMobile) {
      return window.innerWidth / 2 - 50;
    } else if (isTablet) {
      return window.innerWidth / 2 - 200;
    } else if (isDesktop) {
      return window.innerWidth / 2 - 400;
    } else if (isWideScreen) {
      return window.innerWidth / 2 - 600;
    }
  });

  // eslint-disable-next-line no-unused-vars
  const [y, setY] = useState(100);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="flowchart-cat2018-2020"
              element={<FLOW_CHART_2018_2020 x={x} y={y} />}
            />
            <Route
              path="flowchart-cat2021-2022"
              element={<FLOW_CHART_2021_2022 x={x} y={y} />}
            />
            <Route
              path="flowchart-cat2013-2018"
              element={<FLOW_CHART_2013_2018 x={x} y={y} />}
            />
            <Route
              path="flowchart-cat2020-2021"
              element={<FLOW_CHART_2020_2021 x={x} y={y} />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
