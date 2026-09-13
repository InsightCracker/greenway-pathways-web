import { Routes, Route } from 'react-router-dom'
import ScrollToHash from '../components/ScrollToHash.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Programs from '../pages/Programs.jsx'
import ProgramDetail from '../pages/ProgramDetail.jsx'
import Contact from '../pages/Contact.jsx'
import News from '../pages/News.jsx'
import NewsArticle from '../pages/NewsArticle.jsx'
import Donate from '../pages/Donate.jsx'
import FeaturedProjects from '../pages/FeaturedProjects.jsx'
import FeaturedProjectDetail from '../pages/FeaturedProjectDetail.jsx'

export default function AppRoutes() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/featured-projects" element={<FeaturedProjects />} />
          <Route path="/featured-projects/:slug" element={<FeaturedProjectDetail />} />
        </Route>
      </Routes>
    </>
  )
}