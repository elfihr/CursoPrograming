
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";


export const navItems = [
  { label: "Trilha", href: "#trilha" },
  { label: "Sobre", href: "#sobre" },
  { label: "Planos", href: "#preco" },
  { label: "Feedback", href: "#feedback" },
];

export const clientes = [
  {
    user: "Alan Macedo Pascal",
    image: user1,
    text: "Agradeço pela dedicação e a forma clara e objetiva do curso. A dedicação dos profissionais fizeram toda a diferença no meu processo de aprendizagem",
  },
  {
    user: "Aline Ribeiro",
    image: user2,
    text: "Estou ansiosa para aplicar o que aprendi e continuar expandindo meus conhecimentos área de programação. Mais uma vez, muito obrigada!",
  },
  {
    user: "Ricardo Bastos",
    image: user3,
    text: "A experiência foi extremamente enriquecedora e os conhecimentos adquiridos serão de grande importância para meu desenvolvimento pessoal e profissional.",
  },
];

export const features = [
  {
    icon: 'HTML',
    text: "HyperText Markup Language",
    description:
      "HTML é a base de todas as páginas web. Compreender HTML é essencial para criar e estruturar conteúdo na web.",
  },
  {
    icon: 'CSS',
    text: "Cascading Style Sheets ",
    description:
      "CSS ( é uma linguagem fundamental para o design e a apresentação de páginas web de forma a apresentar designs responsivos e agradaveis ao usuario.",
  },
  {
    icon: 'JS',
    text: "Javascript",
    description:
      "JavaScript é uma das linguagens de programação mais populares, amplamente usada no desenvolvimento web para criar mais interação com o usuario.",
  },
  {
    icon: 'JAVA',
    text: "Linguagem Orientada a Objetos",
    description:
      "Java oferece uma variedade de benefícios que o tornaram um dos linguagens de programação mais populares e amplamente utilizadas no mundo.",
  },
  {
    icon: 'SQL',
    text: "Structured Query Language",
    description:
      "SQL é uma linguagem padrão utilizada para gerenciar e manipular bancos de dados relacionais",
  },
  {
    icon: 'REACT',
    text: "Biblioteca de Interfaces",
    description:
      "React é uma biblioteca JavaScript amplamente utilizada para a construção de interfaces de usuário, especialmente em aplicações web. Desenvolvida pelo Facebook.",
  },
];

export const checklistItems = [
  {
    title: "Desenvolvimento: ",
    description:
      "Desenvolva capacidade criar layouts unicos.",
  },
  {
    title: "Programação: ",
    description:
      "Aprenda formas criativas para tornar a interação mais agradavel.",
  },
  {
    title: "Banco de Dados: ",
    description:
      "Crie Blogs, sites de noticias de forma eficiente.",
  },
  {
    title: "Trabalho em Equipe: ",
    description:
      "Saiba o dia-a-dia como uma equipe trabalha com projetos reais.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "R$100,00",
    parcel:"12 x R$9,17",
    features: [
      "HTML",
      "CSS",
      "Javascript",
    ],
  },
  {
    title: "Pro",
    price: "R$220,00",
    parcel:"12 x R$20,16",
    features: [
      "Java",
      "SQL",
      "Todos anteriores",
    ],
  },
  {
    title: "Enterprise",
    price: "R$512,00",
    parcel:"12 x R$46,93",
    features: [
      "React",
      "Taiwind",
      "Todos os Anteriores",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Iniciando" },
  { href: "#", text: "Documentação" },
  { href: "#", text: "Cursos" },
  { href: "#", text: "API Referencia" },
  { href: "#", text: "Forum da Comunidade" },
];

export const platformLinks = [
  { href: "#", text: "Novo" },
  { href: "#", text: "SDispositivos suportados" },
  { href: "#", text: "Requimento minimo do Sistema" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Notas de Atualização" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encontros" },
  { href: "#", text: "Conferencias" },
  { href: "#", text: "Maratona de Programação" },
  { href: "#", text: "Jobs" },
];
