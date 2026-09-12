import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import { CompareProvider } from './components/comparison/CompareContext';

// Pages
import HomePage from './pages/Home/HomePage';
import CollegesDirectoryPage from './pages/Colleges/CollegesDirectoryPage';
import StreamCollegesPage from './pages/Colleges/StreamCollegesPage';
import CollegeDetailPage from './pages/CollegeDetail/CollegeDetailPage';
import CoursesHubPage from './pages/Courses/CoursesHubPage';
import CourseDetailPage from './pages/Courses/CourseDetailPage';
import LocationsHubPage from './pages/Locations/LocationsHubPage';
import LocationDetailPage from './pages/Locations/LocationDetailPage';
import ComparePage from './pages/Compare/ComparePage';
import AdmissionsPage from './pages/Admissions/AdmissionsPage';
import CounsellingPage from './pages/Counselling/CounsellingPage';
import ExamsPage from './pages/Exams/ExamsPage';
import RankingsPage from './pages/Rankings/RankingsPage';
import ResourcesPage from './pages/Resources/ResourcesPage';
import BlogListingPage from './pages/Blog/BlogListingPage';
import BlogDetailPage from './pages/Blog/BlogDetailPage';
import SearchResultsPage from './pages/Search/SearchResultsPage';
import AboutPage from './pages/Static/AboutPage';
import ContactPage from './pages/Static/ContactPage';
import FAQPage from './pages/Static/FAQPage';
import PrivacyPage from './pages/Static/PrivacyPage';
import TermsPage from './pages/Static/TermsPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import CollegeListingPage from './pages/CollegeListing/CollegeListingPage';

export default function App() {
  return (
    <CompareProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 1. Home */}
            <Route index element={<HomePage />} />

            {/* 2 - 9. Colleges & Stream Routes */}
            <Route path="colleges" element={<CollegesDirectoryPage />} />
            <Route path="colleges/btech" element={<StreamCollegesPage />} />
            <Route path="colleges/engineering" element={<StreamCollegesPage />} />
            <Route path="colleges/mba" element={<StreamCollegesPage />} />
            <Route path="colleges/medical" element={<StreamCollegesPage />} />
            <Route path="colleges/law" element={<StreamCollegesPage />} />
            <Route path="colleges/management" element={<StreamCollegesPage />} />
            <Route path="universities" element={<StreamCollegesPage />} />

            {/* Dynamic College Detail */}
            <Route path="college/:slug" element={<CollegeDetailPage />} />

            {/* 10 - 16. Courses & Course Guides */}
            <Route path="courses" element={<CoursesHubPage />} />
            <Route path="courses/btech" element={<CourseDetailPage />} />
            <Route path="courses/mba" element={<CourseDetailPage />} />
            <Route path="courses/bca" element={<CourseDetailPage />} />
            <Route path="courses/bba" element={<CourseDetailPage />} />
            <Route path="courses/mca" element={<CourseDetailPage />} />
            <Route path="courses/computer-science" element={<CourseDetailPage />} />
            <Route path="courses/:slug" element={<CourseDetailPage />} />

            {/* 17 - 21. Study Locations */}
            <Route path="locations" element={<LocationsHubPage />} />
            <Route path="locations/jaipur" element={<LocationDetailPage />} />
            <Route path="locations/delhi" element={<LocationDetailPage />} />
            <Route path="locations/bangalore" element={<LocationDetailPage />} />
            <Route path="locations/mumbai" element={<LocationDetailPage />} />
            <Route path="locations/:city" element={<LocationDetailPage />} />

            {/* 22. College Comparison */}
            <Route path="compare" element={<ComparePage />} />

            {/* 23. Admissions */}
            <Route path="admissions" element={<AdmissionsPage />} />

            {/* 24. Free Counselling */}
            <Route path="counselling" element={<CounsellingPage />} />

            {/* 25. Entrance Exams */}
            <Route path="exams" element={<ExamsPage />} />
            <Route path="exams/:slug" element={<ExamsPage />} />

            {/* 26. College Rankings */}
            <Route path="rankings" element={<RankingsPage />} />

            {/* 27. Educational Resources */}
            <Route path="resources" element={<ResourcesPage />} />

            {/* 28 - 29. Education Blog & Detail */}
            <Route path="blog" element={<BlogListingPage />} />
            <Route path="blog/:slug" element={<BlogDetailPage />} />

            {/* 30. Search */}
            <Route path="search" element={<SearchResultsPage />} />

            {/* 31 - 35. Company & Legal Pages */}
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="privacy-policy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="college-listing" element={<CollegeListingPage />} />

            {/* 37. 404 Catch-All */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CompareProvider>
  );
}
