export function clickTeachers() {
  const teachers = document.querySelectorAll("[data-teacher-content]");
  const teacherName = document.querySelector("[data-teacher-name");
  const teacherText = document.querySelector("[data-teacher-text");

  const teachersInfo = [
    {
      name: "Gabriel Silva",
      text: `Surfista experiente que começou a surfar quando criança. Ele cresceu em uma família de surfistas e aprendeu as técnicas básicas do esporte desde cedo. Com o tempo, Gabriel se tornou um surfista competitivo, participando de campeonatos locais e regionais. Ele também tem vasta experiência em ensinar surf para alunos de diferentes níveis de habilidade, adaptando seu método de ensino para as necessidades individuais de cada aluno.`,
    },
    {
      name: "Andressa Coelho",
      text: `Descobriu o surf na adolescência e desde então se apaixonou pelo esporte. Ela passou anos aprimorando suas habilidades e conhecimentos em diferentes praias ao redor do mundo. Andressa é uma professora experiente, que possui habilidades em ensinar técnicas avançadas de surf para alunos de todos os níveis de habilidade. Ela está comprometida em garantir que seus alunos tenham uma experiência segura e divertida na água.`,
    },
    {
      name: "Matheus Santos",
      text: `Surfista experiente que viajou para vários países em busca das melhores ondas. Ele tem uma ampla experiência em surf e sabe como ensinar técnicas avançadas para alunos de todos os níveis de habilidade. Matheus é um professor apaixonado e dedicado, que está comprometido em ajudar seus alunos a alcançarem seus objetivos e se tornarem surfistas experientes.`,
    },
    {
      name: "Jorge Almeida",
      text: `Surfista e professor experiente que ama compartilhar seu conhecimento com seus alunos. Ele cresceu surfando em praias locais e desenvolveu habilidades excepcionais em surfar ondas grandes. Jorge tem vasta experiência em ensinar técnicas de surf para alunos de diferentes níveis de habilidade, adaptando seu método de ensino às necessidades individuais de cada aluno. Ele é apaixonado pelo esporte e está comprometido em ajudar seus alunos a se tornarem surfistas confiantes e seguros.`,
    },
  ];

  for (let teacher of teachers) {
    teacher.addEventListener("click", activeTeacherInfo);
  }

  const teacher = (e) =>
    e.target.parentNode.getAttribute("data-teacher-content");

  activeTeacherInfo("Jorge Almeida");

  function activeTeacherInfo(e) {
    if (typeof e === "string") {
      teacherName.innerText = findTeacher(e).name;
      teacherText.innerText = findTeacher(e).text;
    } else {
      teacherName.innerText = findTeacher(teacher(e)).name;
      teacherText.innerText = findTeacher(teacher(e)).text;
    }
  }

  function findTeacher(name) {
    return teachersInfo.find((teacher) => teacher.name === name);
  }
}
