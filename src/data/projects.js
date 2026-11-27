import applePreview from '../assets/project-videos/apple-ecommerce.mp4'
import movieBookingPreview from '../assets/project-videos/movie-booking.mp4'

export const projects = [
  {
    number: '01',
    title: 'Apple E-commerce',
    category: 'Frontend E-commerce',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'A responsive Apple storefront built with semantic HTML5, modern CSS3, and vanilla JavaScript.',
    visual: 'apple',
    previewVideo: applePreview,
    repository: 'https://github.com/Svignesh-dev06/iphone-Apple_-IN-E-Commerce-Website',
    liveDemo: 'https://iphone-apple-in-e-commerce-website.vercel.app/',
  },
  {
    number: '02',
    title: 'Movie Ticket Booking',
    category: 'Frontend Web App',
    techStack: ['React.js', 'CSS3', 'JavaScript'],
    description: 'A React.js movie-ticket booking app featuring interactive seat selection and a smooth booking flow.',
    visual: 'cinema',
    previewVideo: movieBookingPreview,
    repository: 'https://github.com/Svignesh-dev06/Movie-Booking-',
    liveDemo: 'https://svignesh-dev06.github.io/Movie-Booking-/',
  },
  {
    number: '03',
    title: 'Movemate',
    category: 'Full Stack MERN Application',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    description: 'A full-stack MERN logistics platform with a responsive React frontend and RESTful backend.',
    visual: 'movemate',
    previewNote: 'Project screenshot or preview video to be added.',
    liveDemo: '',
  },
]
