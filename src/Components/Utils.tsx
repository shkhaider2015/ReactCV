import iconPlayStore from "../Assets/icons/playstore.svg"
import iconWWW from "../Assets/icons/www.svg";
// import iconGithub from "../Assets/icons/github.svg";

interface dataTypes {
    title : string,
    alt : string,
    iconURI : string
}

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

export const getData = () =>
{
  const androidData:dataTypes[] = [
    {
      title : "Indus University Smart Mess",
      alt : "IUSM",
      iconURI : iconPlayStore,
    }
  ];
  const pythonData = [{
    title : "IUSM Admin Panel",
    alt : "IUSM Admin panel",
    iconURI : iconWWW
  }];
  const reactData = [
      {
          title : "Shoes Store",
          alt : "Ss",
          iconURI : iconWWW
      }
  ];

  return { androidData, pythonData, reactData  }
}
