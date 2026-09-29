const projeto1 = {
  link: "https://github.com/Joaoromie/solar-landing-page-final-main",
  title: "Projeto 01",
  file: "projeto-01.md",
  description: "Descrição completa do projeto: qual problema resolve, o que você aprendeu e como foi feito.",
  tags: ["HTML", "CSS"]
};

const projeto2 = {
  link: "https://github.com/Joaoromie/Louie",
  title: "Projeto 02",
  file: "projeto-02.md",
  description: "Descrição completa do projeto: qual problema resolve, o que você aprendeu e como foi feito.",
  tags: ["JavaScript", "DOM"]
};

const projeto3 = {
  link: "https://github.com/Joaoromie/Rooftop-restaurante",
  title: "Projeto 03",
  file: "projeto-03.md",
  description: "Descrição completa do projeto: qual problema resolve, o que você aprendeu e como foi feito.",
  tags: ["Python", "Lógica"]
};

const projectModal = document.querySelector("#projectModal");
const modalTitle = document.querySelector("#modalTitle");
const modalFile = document.querySelector("#modalFile");
const modalDescription = document.querySelector("#modalDesc");
const modalTags = document.querySelector("#modalTags");
const projectLink = document.querySelector("#projectLink");
const sourceLink = document.querySelector("#sourceLink");
const closeButton = projectModal.querySelector(".modal__close");
const page = document.querySelector("main");
const navigation = document.querySelector(".navigation");
let botaoAnterior;

function abrirModal(numero) {
  let project;

  // Os botões no HTML usam os números 0, 1 e 2.
  if (numero === 0) {
    project = projeto1;
  } else if (numero === 1) {
    project = projeto2;
  } else if (numero === 2) {
    project = projeto3;
  } else {
    return;
  }

  // Preenche o modal com os dados do projeto escolhido.
  modalTitle.textContent = project.title;
  modalFile.textContent = project.file;
  modalDescription.textContent = project.description;

  // Os dois botões levam ao repositório do projeto escolhido.
  projectLink.href = project.link;
  sourceLink.href = project.link;

  // Limpa as tags anteriores antes de adicionar as novas.
  modalTags.textContent = "";
  for (let i = 0; i < project.tags.length; i++) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = project.tags[i];
    modalTags.appendChild(tag);
  }

  botaoAnterior = document.activeElement;
  projectModal.classList.add("aberto");
  // Mantém o teclado dentro do modal enquanto ele está aberto.
  page.inert = true;
  navigation.inert = true;
  closeButton.focus();
}

function fecharModal() {
  projectModal.classList.remove("aberto");
  page.inert = false;
  navigation.inert = false;
  if (botaoAnterior) {
    botaoAnterior.focus();
  }
}

const cards = document.querySelectorAll(".project");
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", function () {
    abrirModal(Number(card.dataset.project));
  });
}

closeButton.addEventListener("click", fecharModal);

// Fecha ao clicar no fundo escuro.
projectModal.addEventListener("click", function (event) {
  if (event.target === projectModal) {
    fecharModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && projectModal.classList.contains("aberto")) {
    fecharModal();
  }
});
