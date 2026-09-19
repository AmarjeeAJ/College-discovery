import StreamCollegesPage from '@/app/colleges/[stream]/page';

export const metadata = {
  title: 'Top Universities in India 2026: NIRF Rankings, Direct Admissions, Fees & Placements',
  description: 'Explore premier UGC recognized and NAAC A++ accredited Central, State, Deemed, and Private universities in India. Verified fees, placement records, and direct admission counselling.',
};

export default function UniversitiesIndexPage() {
  return <StreamCollegesPage params={{ stream: 'universities' }} />;
}
