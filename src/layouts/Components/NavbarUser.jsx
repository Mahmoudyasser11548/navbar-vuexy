// ** Dropdowns Imports
import IntlDropdown from "./IntlDropdown";
import UserDropdown from "./UserDropdown";

const NavbarUser = () => {
  return (
    <>
      <ul className="nav navbar-nav align-items-center ms-auto">
        <UserDropdown />
        <IntlDropdown />
      </ul>
    </>
  );
};
export default NavbarUser;
