export function assessments() {
  const buttonPrevious = document.querySelector(
    "[data-assessment-button-previous]"
  );
  const buttonNext = document.querySelector("[data-assessment-button-next]");
  const text = document.querySelector("[data-assessment-text]");
  const name = document.querySelector("[data-assessment-name]");

  let x = 0;

  const assessments = [
    {
      name: "Gustavo Coelho",
      text: `Irure Lorem dolore excepteur et sint fugiat ad anim eiusmod aliquip mollit ea. Laboris non ut nostrud nisi culpa. Commodo esse aliquip aliqua sint quis quis nisi exercitation nostrud nostrud. Qui minim non consequat qui irure consequat qui et sunt ullamco minim proident nulla laboris. Aliquip voluptate deserunt commodo voluptate eiusmod reprehenderit dolor aute velit elit.`,
    },
    {
      name: "Andreia Campos ",
      text: `Ut est commodo laborum duis elit. Consequat enim velit deserunt adipisicing enim. Voluptate id ipsum duis commodo culpa minim excepteur amet dolor amet aute laborum. Cupidatat mollit minim occaecat ipsum Lorem. Dolor culpa amet voluptate occaecat occaecat in enim nisi pariatur nostrud culpa consectetur. Sit labore amet incididunt voluptate esse ut eu esse voluptate aute Lorem`,
    },
    {
      name: "Tiago Oir",
      text: `Proident tempor aliquip qui sint. Adipisicing tempor nisi Lorem sint ut id. Id culpa laborum ullamco nostrud est tempor duis non. Dolore irure nisi esse officia nulla incididunt irure duis adipisicing. Consectetur reprehenderit cillum aute in aliqua eiusmod reprehenderit consectetur labore proident Lorem. Proident id incididunt enim ex laborum aute dolore fugiat fugiat culpa pariatur mollit exercitation. In et aliquip enim Lorem aute laboris ex. Non aliqua anim eiusmod cupidatat esse laboris aliqua.`,
    },
    {
      name: "Rafael Silva",
      text: `Sint officia deserunt pariatur non adipisicing est veniam ex elit magna. Laborum aliquip consectetur ex dolore aute duis fugiat eu tempor. Consequat dolor ipsum magna enim nulla sint.`,
    },
  ];

  buttonPrevious.addEventListener("click", previousAssessment);
  buttonNext.addEventListener("click", nextAssessment);

  function previousAssessment() {
    x - 1 >= 0 ? x-- : (x = assessments.length - 1);
    text.innerHTML = assessments[x].text;
    name.innerHTML = assessments[x].name;
  }
  function nextAssessment() {
    x + 1 != assessments.length ? x++ : (x = 0);
    text.innerHTML = assessments[x].text;
    name.innerHTML = assessments[x].name;
  }
}
