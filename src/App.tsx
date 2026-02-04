import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { ProjectsPage } from '@/pages/projects';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
