export function clickTeachers() {
  const teachers = document.querySelectorAll("[data-teacher-content]");
  const teacherName = document.querySelector("[data-teacher-name");
  const teacherText = document.querySelector("[data-teacher-text");

  const teachersInfo = [
    {
      name: "Gabriel Silva",
      text: `Irure Lorem dolore excepteur et sint fugiat ad anim eiusmod aliquip mollit ea. Laboris non ut nostrud nisi culpa. Commodo esse aliquip aliqua sint quis quis nisi exercitation nostrud nostrud. Qui minim non consequat qui irure consequat qui et sunt ullamco minim proident nulla laboris. Aliquip voluptate deserunt commodo voluptate eiusmod reprehenderit dolor aute velit elit.`,
    },
    {
      name: "Andressa Coelho",
      text: `Ut est commodo laborum duis elit. Consequat enim velit deserunt adipisicing enim. Voluptate id ipsum duis commodo culpa minim excepteur amet dolor amet aute laborum. Cupidatat mollit minim occaecat ipsum Lorem. Dolor culpa amet voluptate occaecat occaecat in enim nisi pariatur nostrud culpa consectetur. Sit labore amet incididunt voluptate esse ut eu esse voluptate aute Lorem`,
    },
    {
      name: "Matheus Santos",
      text: `Proident tempor aliquip qui sint. Adipisicing tempor nisi Lorem sint ut id. Id culpa laborum ullamco nostrud est tempor duis non. Dolore irure nisi esse officia nulla incididunt irure duis adipisicing. Consectetur reprehenderit cillum aute in aliqua eiusmod reprehenderit consectetur labore proident Lorem. Proident id incididunt enim ex laborum aute dolore fugiat fugiat culpa pariatur mollit exercitation. In et aliquip enim Lorem aute laboris ex. Non aliqua anim eiusmod cupidatat esse laboris aliqua.`,
    },
    {
      name: "Jorge Almeida",
      text: `Sint officia deserunt pariatur non adipisicing est veniam ex elit magna. Laborum aliquip consectetur ex dolore aute duis fugiat eu tempor. Consequat dolor ipsum magna enim nulla sint.`,
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
