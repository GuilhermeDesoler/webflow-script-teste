const loadingPage = document.getElementById("LoadingPage");
const basicPage = document.getElementById("BasicInfoPage");
const extraPage = document.getElementById("ExtraInfoPage");
const thanksPage = document.getElementById("ThanksPage");

const UUID_URL = "https://www.uuidgenerator.net/api/version4";

const simulateFetch = async () => {
  try {
    console.log("teste");
    const response = await fetch(UUID_URL);
    const result = await response.text();
    return { currentStep: "Start", sessionId: result };
  } catch (err) {
    console.log(err);
    return { currentStep: "Start", sessionId: null };
  }

  // const result = await new Promise((resolve, _) => {
  //   setTimeout(resolve("Start"), Math.random() * 1000);
  // });
};

const stopLoading = () => {
  loadingPage.style.display = "none";
};

const showCurrentPage = (pageToShow) => {
  console.log(pageToShow.id);
  pageToShow.style.display = "block";
};

const execute = async () => {
  const currentStep = await simulateFetch();

  switch (currentStep.currentStep) {
    case "BasicInfoForm":
      stopLoading();
      showCurrentPage(basicPage);
      break;
    case "ExtraInfoForm":
      stopLoading();
      showCurrentPage(extraPage);
      break;
    case "Thanks":
      stopLoading();
      showCurrentPage(thanksPage);
      break;
    default:
      break;
  }
};

window.onload = execute();

console.log("EXECUTOU O SCRIPT");
