import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

export const skills = [
  { name: 'HTML5', Icon: SiHtml5, className: 'skill-html', category: 'Frontend' },
  { name: 'CSS3', Icon: SiCss, className: 'skill-css', category: 'Frontend' },
  { name: 'JavaScript', Icon: SiJavascript, className: 'skill-javascript', category: 'Frontend' },
  { name: 'React', Icon: SiReact, className: 'skill-react', category: 'Frontend' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, className: 'skill-tailwind', category: 'Frontend' },
  { name: 'Bootstrap', Icon: SiBootstrap, className: 'skill-bootstrap', category: 'Frontend' },
  { name: 'Node.js', Icon: SiNodedotjs, className: 'skill-node', category: 'Backend' },
  { name: 'Express.js', Icon: SiExpress, className: 'skill-express', category: 'Backend' },
  { name: 'MongoDB', Icon: SiMongodb, className: 'skill-mongodb', category: 'Database' },
]
