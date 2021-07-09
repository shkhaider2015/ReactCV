import { 
  ShoesStoreImage, Covid19TrackerLargeImage, ExpanseTrackerPWALarge,
  ExpanseTrackerlarge, QuizApp, QuizPWA, RaceAnimation, TinyAnimation, 
  IUSMWeb
} from "../Assets/portfolioImages/PortfolioImages";
import { WebIcon } from "../Assets/icons/IconImages";

interface projectsType {
    projectTitle : string,
    projectDesc : string,
    imageURI : string,
    alt : string,
    projectLink : string,
    projectType : string,
    projectLinkIcon : string 

}

interface certificationdataType {
  courseTitle : string,
  CourseDuration : string,
  courseLink : string,
  courseProvider : string,
}

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


export const getdata = () =>
{
  const certificationsData:certificationdataType[] = [
    {
      courseTitle : "Introduction To Programming Using Python",
      CourseDuration : "2021(Jan) – 2021(Jan)",
      courseProvider : "Microsoft",
      courseLink : "https://drive.google.com/file/d/1aQrBdo6VGIg62xfI8Rq_1QOS8_6E1zOe/view?usp=sharing"
    },
    {
      courseTitle : "AWS – Fundamentals – Going Cloud Native",
      CourseDuration: "2020(Dec) – 2021(Jan)",
      courseProvider : "Coursera",
      courseLink : "https://coursera.org/share/a6bce97f081f28bf2d794e42230ba64e"
    },
    {
      courseTitle : "Python for applied Data Science",
      CourseDuration : " 2019(Aug) – 2019(Sep)",
      courseProvider : "Coursera",
      courseLink : "https://coursera.org/share/a6bce97f081f28bf2d794e42230ba64e"
    },
    {
      courseTitle : "Artificial Intelligence and Computing",
      CourseDuration : "2019 – Present (Progress)",
      courseProvider : "PIAIC",
      courseLink : ""
    },
    {
      courseTitle : "Introduction to TensorFlow for AI, ML and DL",
      CourseDuration : "2019– 2020",
      courseProvider : "Coursera",
      courseLink : "https://www.coursera.org/account/accomplishments/verify/VA6CFJSFEATD"
    },
    {
      courseTitle : "Artificial Intelligence for Everyone",
      CourseDuration : "2019(March) – 2019(April)",
      courseProvider : "Coursera",
      courseLink : "https://www.coursera.org/account/accomplishments/verify/K2NB36FUNZDN"
    },
    {
      courseTitle : "OpenVINO Fundamental (Intel Scholarship)",
      CourseDuration : "2019 – 2020",
      courseProvider : "Udacity",
      courseLink : "https://drive.google.com/file/d/1Y0ZhFN7yOB04vXhe1eyCLwKmF8JhWCsF/view?usp=sharing"
    }
  ];

  const projectsData:projectsType[] = [
    {
      projectTitle : "Shoes Store",
      projectDesc : "React/JavaScript",
      imageURI : ShoesStoreImage,
      alt : "Shoes Store App",
      projectLink : "http://shkhaider_shoes_store.surge.sh/",
      projectType : "ReactJS",
      projectLinkIcon : WebIcon
    },
    {
      projectTitle : "Race Animation",
      projectDesc : "React/JavaScript",
      imageURI : RaceAnimation,
      alt : "Race Animation App",
      projectLink : "http://shkhaider2015_project_race_animation.surge.sh/",
      projectType : "ReactJS",
      projectLinkIcon : WebIcon
    },
    {
      projectTitle : "Tiny Animation",
      projectDesc : "React/JavaScript",
      imageURI : TinyAnimation,
      alt : "Tiny Animation App",
      projectLink : "http://shkhaider_tiny_animation.surge.sh/",
      projectType : "ReactS",
      projectLinkIcon : WebIcon
    },
    {
      projectTitle : "COVID19 Tracker",
      projectDesc : "React/JavaScript",
      imageURI : Covid19TrackerLargeImage,
      alt : "COVID19 Tracker App",
      projectLink : "http://shkhaider_covid19_tracker_app.surge.sh/",
      projectType : "ReactJS",
      projectLinkIcon : WebIcon
    },
    {
      projectTitle : `Indus University Smart Mess`,
      projectDesc : "Flask/Python",
      imageURI : IUSMWeb,
      alt : "Indus University Smart Mess",
      projectLink : "https://shkhaider-iusm.herokuapp.com/",
      projectType : "Flask",
      projectLinkIcon : WebIcon
    },
    {
      projectTitle : "PWA Expense Tracker",
      projectDesc : "React/TypeScript",
      imageURI : ExpanseTrackerPWALarge,
      alt : "Progressive Web App Expense Tracker",
      projectLink : "https://shkhaider_pwa_expanse_tracker.surge.sh/",
      projectType : "ReactJS",
      projectLinkIcon : WebIcon
    },
    {
      projectTitle : "PWA Quiz App",
      projectDesc : "React/TypeScript",
      imageURI : QuizPWA,
      alt : "Progressive Web App Quiz App",
      projectLink : "https://shkhaider_pwa_quiz_app.surge.sh/",
      projectType : "ReactJS",
      projectLinkIcon : WebIcon
    },
    {
      projectTitle : "Expense Tracker",
      projectDesc : "React/TypeScript",
      imageURI : ExpanseTrackerlarge,
      alt : "Expense Tracker App",
      projectLink : "http://expencetracker_shakeelhaider.surge.sh/",
      projectType : "ReactJS",
      projectLinkIcon : WebIcon
    },
    {
      projectTitle : "Quiz App",
      projectDesc : "React/TypeScript",
      imageURI : QuizApp,
      alt : "Quiz App",
      projectLink : "http://shkhaider2015_quiz_app.surge.sh/",
      projectType : "ReactJS",
      projectLinkIcon : WebIcon
    },
  ]

  return {certificationsData, projectsData };
}
