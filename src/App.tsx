import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '@/components/reusable/loader';
import { HomePage, ProjectsPage, BlogsPage, NotFoundPage } from '@/pages';

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
