import iconPlayStore from "../Assets/icons/playstore.svg"
import iconWWW from "../Assets/icons/www.svg";
// import iconGithub from "../Assets/icons/github.svg";

interface projectsType {
    projectTitle : string,
    imageURI : string,
    alt : string,
    projectLink : string,
    projectType : string,
    frameWorkIconURI : string 

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

  const projectsData:projectsType[] = []

  return {certificationsData, projectsData };
}
