import logo from "../../../src/assets/header/header_logo.png";
import place from "../../../src/assets/header/header_place.png";
import guide from "../../../src/assets/header/header_guide.png";
import WeatherDisplay from "../../components/mainpage/WeatherDisplay";
import { Link, useLocation } from "react-router-dom";
import SearchDisplay from "../mainpage/SearchDisplay";

const Header = () => {
  const location = useLocation();

  const onWeatherDisplay = location.pathname.startsWith("/detail");

  return (
    <header className="font-preten400 text-sm bg-campblue p-4 flex items-center justify-between sticky top-0 z-50 h-[90px]">
      <div className="flex-shrink-0 w-24">
        <Link to="/main">
          <img src={logo} alt="로고 이미지 메인으로 이동" />
        </Link>
      </div>
      {onWeatherDisplay && (
        <div>
          <WeatherDisplay />
        </div>
      )}
      <div className="flex items-center flex-shrink-0 space-x-6">
        <Link
          to="/main"
          className="w-10 transition-transform duration-300 transform hover:scale-110"
        >
          <img src={place} alt="지도로 이동" />
        </Link>
        <Link
          to="/guide"
          className="w-10 transition-transform duration-300 transform hover:scale-110"
        >
          <img src={guide} alt="가이드 영상으로 아동" />
        </Link>
        <div className="w-[265px] h-[45px]">
          <SearchDisplay />
        </div>
      </div>
    </header>
  );
};

export default Header;
