// import { PATH } from 'consts';
import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { store } from 'store';
import { DashboardPage } from 'pages';

export const App: React.FC = () => {
  return (
    <DashboardPage />
    // <Provider store={store}>
      // <BrowserRouter>
      //   <Routes>
      //     <Route path={"/"} element={<DashboardPage />} />
      //     {/* <Route path={PATH.TODOS_LIST} element={<TodosListPage />} />
      //     <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} /> */}
      //   </Routes>
      // </BrowserRouter>
    // </Provider>
  );
};