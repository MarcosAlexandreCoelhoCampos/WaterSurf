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
      text: `Eu sempre tive medo de entrar no mar, mas a equipe da WaterSurf me ajudou a superar esse medo. O professor Matheus Santos foi incrível em me ensinar as técnicas básicas de surf e me fazer sentir seguro na água. A escola é muito profissional e todos os professores são altamente capacitados. Obrigado WaterSurf por me ajudar a realizar meu sonho de surfar!`,
    },
    {
      name: "Andreia Campos ",
      text: `Eu nunca pensei que pudesse aprender a surfar aos 40 anos de idade, mas a WaterSurf tornou isso possível. O professor Gabriel Silva é incrível em ensinar técnicas de surf para adultos iniciantes como eu. Ele foi muito paciente e dedicado em me ensinar os fundamentos básicos e me ajudou a evoluir rapidamente. Estou muito grata à equipe da WaterSurf por me proporcionar uma experiência de aprendizado incrível.`,
    },
    {
      name: "Tiago Oir",
      text: `A WaterSurf é a melhor escola de surf que já vi. A equipe é muito profissional e os professores são altamente capacitados. Eu nunca imaginei que pudesse surfar ondas grandes, mas o professor Jorge Almeida me ajudou a alcançar esse objetivo. Ele é um professor incrível que é apaixonado pelo esporte e está comprometido em ajudar seus alunos a alcançarem seus objetivos. Obrigado WaterSurf por me ajudar a me tornar um surfista mais confiante e experiente.`,
    },
    {
      name: "Rafael Silva",
      text: `Eu levei meu filho de 10 anos para a WaterSurf e fiquei muito impressionado com a qualidade do serviço. A escola é muito segura e profissional, e o professor Andressa Coelho foi incrível em ensinar meu filho as técnicas básicas de surf. Ela foi muito paciente e dedicada, e meu filho adorou a experiência. Eu recomendo a WaterSurf para qualquer pessoa que queira aprender a surfar com segurança e diversão.`,
    },
  ];

  buttonPrevious.addEventListener("click", previousAssessment);
  buttonNext.addEventListener("click", nextAssessment);

  nextAssessment();

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
