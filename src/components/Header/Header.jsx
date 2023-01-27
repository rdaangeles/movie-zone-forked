import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.scss";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="header w-full h-20">
      <div className="nav-wrapper container mx-auto flex justify-between items-center h-full px-5 lg:px-0">
        {/* Nav Logo */}
        <div>
          <a href="/">
            <h3 className="text-lg">
              M<span className="text-c-tertiary">Zone</span>
            </h3>
          </a>
        </div>

        {/* ===================================== On Larger Devices ===================================== */}

        <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
          <AccountCircleIcon sx={{ fontSize: "2rem" }} />
        </motion.div>

        {/* ===================================== On Mobile Devices ===================================== */}
      </div>
    </div>
  );
};

export default Header;
