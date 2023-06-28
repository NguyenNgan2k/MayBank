import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { useDispatch, connect } from "react-redux";
import PerfectScrollBar from "react-perfect-scrollbar";
import Tooltiped from "./tooltiped";

import { NavItems, navItems } from "../_nav";
import { ReactComponent as ComponentAccount } from "assets/img/nav/nav-khach-hang.svg";
import { ReactComponent as ComponentCash } from "assets/img/nav/nav-nv-tien.svg";
import { ReactComponent as ComponentCustomer } from "assets/img/nav/nav-khach-hang.svg";
import { ReactComponent as ComponentDashboard } from "assets/img/nav/nav-home.svg";
import { ReactComponent as ComponentReport } from "assets/img/nav/nav-bao-cao.svg";
import { ReactComponent as ComponentStock } from "assets/img/nav/nav-nv-ck.svg";
import { ReactComponent as ComponentEod } from "assets/img/nav/nav-clock.svg";
import { ReactComponent as ComponentSystem } from "assets/img/nav/nav-ng-dung.svg";
import { ReactComponent as ComponentRight } from "assets/img/nav/nav-right.svg";
import { ReactComponent as ComponentLogout } from "assets/img/nav/logout.svg";
import { ReactComponent as ComponentWallet } from "assets/img/nav/nav-wallet.svg";
import _ from "lodash";
import { AppState } from "reducers";

function usePrevious(value: any) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

interface Props {
  typeNav: string | undefined;
  showNav: boolean;
  token: any;
}

function NavLeft(props: Props): JSX.Element {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = location;

  const [linkActive, setLinkActive] = React.useState<string>("");

  const { typeNav, showNav, token } = props;
  // console.log("token nav", token);
  const prePathname: string | undefined | null = usePrevious(pathname);

  React.useEffect(() => {
    if (pathname && pathname !== prePathname) {
      setTimeout(() => {
        setLinkActive(pathname);
      }, 200);
    }
  }, [pathname]);

  // function _handleToggle() {
  //   if (typeNav === "full") {
  //     dispatch({ type: "TYPE_NAV_SET", data: "minimize" });
  //   } else {
  //     dispatch({ type: "TYPE_NAV_SET", data: "full" });
  //   }
  // }

  function handleClickLink(params: string) {
    console.log(params);
    // setTimeout(() => {
    setLinkActive(params);
    // }, 150);
  }

  function getImageByKey(key: string) {
    switch (key) {
      case "account":
        return <ComponentAccount />;
      case "cash":
        return <ComponentCash />;
      case "customer":
        return <ComponentCustomer />;
      case "report":
        return <ComponentReport />;
      case "stock":
        return <ComponentStock />;
      case "eod":
        return <ComponentEod />;
      case "system":
        return <ComponentSystem />;
      case "right":
        return <ComponentRight />;
      case "wallet":
        return <ComponentWallet />;
      default:
        return <ComponentDashboard />;
    }
  }

  const _handleLogout = () => {
    sessionStorage.removeItem("token");

    history.push("/login");
  };

  function renderMiniHasAct(record: NavItems) {
    return (
      <Link
        to={record.url}
        className={
          "w-full justify-center " +
          (linkActive.startsWith(record.url + "/") || linkActive === record.url
            ? "active"
            : "")
        }
      >
        <Tooltiped placement="right" title={record.name}>
          {getImageByKey(record.icon)}
        </Tooltiped>
      </Link>
    );
  }

  // console.log(typeNav, showNav);

  return (
    <>
      {showNav && (
        <div className={"nav-account hidden xl:block w-64 nav_" + typeNav}>
          {typeNav === "full" && (
            <PerfectScrollBar
              style={{
                minHeight: "calc(100vh - 112px)",
                height: "calc(100vh - 112px)",
                marginTop: "12px",
                paddingRight: "12px",
                borderBottom: "1px solid #6F6F6F",
              }}
            >
              <ul>
                {navItems &&
                  navItems.map(
                    (item, index) =>
                    (<li
                      key={index}
                      className={
                        "flex flex-col " +
                        (linkActive.includes(item.url) ? "active" : "")
                      }
                    >
                      {item.children && (
                        <>
                          <a
                            className={"w-full has-content "}
                            onClick={(e) => {
                              handleClickLink(item.url);
                              // handleToggleClass(e);
                            }}
                          >
                            {getImageByKey(item.icon)}
                            {item.name}
                          </a>

                          <ul className="sub-menu">
                            {item.children.map(
                              (sub, idxSub) =>
                              (<li
                                key={idxSub}
                                className={
                                  linkActive === sub.url ? "active" : ""
                                }
                              >
                                <Link
                                  to={sub.url}
                                  className={"w-full "}
                                // onClick={(e) => {
                                //   // handleClickLink(sub.url);
                                //   handleToggleClassFromChild(e);
                                // }}
                                >
                                  {sub.name}
                                </Link>
                              </li>)
                            )}
                          </ul>
                        </>
                      )}

                      {!item.children && (
                        <Link
                          to={item.url}
                          className={"w-full has-content "}
                        >
                          {getImageByKey(item.icon)}
                          {item.name}
                        </Link>
                      )}
                    </li>)
                  )}
              </ul>
            </PerfectScrollBar>
          )}
          <div
            className="nav-logout flex items-center"
            onClick={() => _handleLogout()}
          >
            <ComponentLogout />
            {typeNav === "full" && <span>Đăng xuất</span>}
          </div>
        </div>
      )}
      {showNav && (
        <div className="nav-account block xl:hidden absolute z-10 w-64">
          {typeNav === "full" && (
            <ul>
              {navItems &&
                navItems.map(
                  (item, index) =>
                  (<li
                    key={index}
                    className={
                      "flex flex-col " +
                      (linkActive.includes(item.url) ? "active" : "")
                    }
                  >
                    {item.children && (
                      <>
                        <a
                          className={"w-full has-content "}
                          onClick={(e) => {
                            handleClickLink(item.url);
                            // handleToggleClass(e);
                          }}
                        >
                          {getImageByKey(item.icon)}
                          {item.name}
                        </a>

                        <ul className="sub-menu">
                          {item.children.map(
                            (sub, idxSub) =>
                            (
                              <li
                                key={idxSub}
                                className={
                                  linkActive === sub.url ? "active" : ""
                                }
                              >
                                <Link
                                  to={sub.url}
                                  className={"w-full "}
                                // onClick={(e) => {
                                //   // handleClickLink(sub.url);
                                //   handleToggleClassFromChild(e);
                                // }}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}

                    {!item.children && (
                      <Link
                        to={item.url}
                        className={"w-full has-content "}

                      >
                        {getImageByKey(item.icon)}
                        {item.name}
                      </Link>
                    )}
                  </li>)
                )}
            </ul>
          )}

          {typeNav !== "full" && (
            <ul>
              {navItems &&
                navItems.map(
                  (item, index) =>
                  (
                    <li key={index} className=" ">
                      {renderMiniHasAct(item)}
                    </li>
                  )
                )}
            </ul>
          )}
          <div
            className="nav-logout flex items-center"
            onClick={() => _handleLogout()}
          >
            <ComponentLogout />
            {typeNav === "full" && <span>Đăng xuất</span>}
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
  };
};

export default connect(mapStateToProps)(React.memo(NavLeft));
