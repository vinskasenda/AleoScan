import TestPage from "@src/pages/TestPage";
import Detail from "@src/pages/DetailPage";
import HomePage from "@src/pages/HomePage";
import ActivityTable from "@src/components/ActivityTable/ActivityTable";
import Container from "@src/components/Container/Container";
// import TablePage from "@src/pages/TablePage";

type routeInfo = {
  path: string;
  component: React.FC;
  children?: any;

};

const publicRoutes: routeInfo[] = [
  { path: "/", component: HomePage },
  { 
    path: "/detail" , 
    component: Detail,
    children: [
      { 
        path: "/detail/items", 
        component: Container
      },
      { 
        path: "/detail/activities", 
        component: ActivityTable
      },
    ]
  },
  { path: "/test", component: TestPage },

  // { path: "/table", component: TablePage }
];

export { publicRoutes };
