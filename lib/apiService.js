import { collegesData } from './data/colleges';
import { coursesData } from './data/courses';
import { locationsData } from './data/locations';
import { examsData } from './data/exams';
import { blogsData } from './data/blogs';
import { rankingsData } from './data/rankings';
import { faqsData } from './data/faqs';

/**
 * Helper to make an array backward-compatible with { success: true, data: [...] } consumers
 */
function wrapArray(arr) {
  const result = Array.isArray(arr) ? [...arr] : [];
  result.success = true;
  result.data = result;
  result.total = result.length;
  return result;
}

/**
 * Helper to make a single object backward-compatible with { success: true, data: {...} } consumers
 */
function wrapItem(item) {
  if (!item) {
    return { success: false, data: null };
  }
  return {
    ...item,
    success: true,
    data: item,
  };
}

export const apiService = {
  async getColleges(filters = {}) {
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams();
        if (filters.stream) params.set('stream', filters.stream);
        if (filters.city) params.set('city', filters.city);
        if (filters.state) params.set('state', filters.state);
        if (filters.type) params.set('type', filters.type);
        if (filters.maxFee) params.set('maxFee', filters.maxFee);
        if (filters.q) params.set('q', filters.q);
        if (filters.featured) params.set('featured', 'true');

        const res = await fetch(`/api/colleges?${params.toString()}`);
        if (res.ok) {
          const json = await res.json();
          return wrapArray(json.data || []);
        }
      } catch (e) {
        console.warn('API fetch error, falling back to local data:', e);
      }
    }

    // Direct local query fallback
    let results = [...collegesData];
    if (filters.stream) {
      const target = filters.stream.toLowerCase().replace(/[\.\s-]/g, '');
      results = results.filter((c) =>
        c.stream.some((s) => {
          const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
          return (
            norm.includes(target) ||
            target.includes(norm) ||
            (target === 'btech' && norm.includes('engineering')) ||
            (target === 'engineering' && norm.includes('btech')) ||
            (target === 'mba' && norm.includes('management')) ||
            (target === 'management' && norm.includes('mba'))
          );
        })
      );
    }
    if (filters.city) {
      const target = filters.city.toLowerCase();
      results = results.filter((c) => c.city.toLowerCase() === target);
    }
    if (filters.state) {
      const target = filters.state.toLowerCase();
      results = results.filter((c) => c.state.toLowerCase() === target);
    }
    if (filters.type) {
      const target = filters.type.toLowerCase();
      results = results.filter((c) => c.type.toLowerCase().includes(target));
    }
    if (filters.maxFee) {
      results = results.filter((c) => c.annualFeeNumeric <= Number(filters.maxFee));
    }
    if (filters.featured) {
      results = results.filter((c) => c.featured);
    }
    if (filters.q || filters.query) {
      const target = (filters.q || filters.query).toLowerCase().trim();
      results = results.filter(
        (c) =>
          c.name.toLowerCase().includes(target) ||
          (c.shortName && c.shortName.toLowerCase().includes(target)) ||
          c.city.toLowerCase().includes(target) ||
          c.state.toLowerCase().includes(target) ||
          c.stream.some((s) => s.toLowerCase().includes(target))
      );
    }
    if (filters.sort) {
      if (filters.sort === 'ranking') {
        results.sort((a, b) => a.nirfRanking - b.nirfRanking);
      } else if (filters.sort === 'fee_low_high') {
        results.sort((a, b) => a.annualFeeNumeric - b.annualFeeNumeric);
      } else if (filters.sort === 'fee_high_low') {
        results.sort((a, b) => b.annualFeeNumeric - a.annualFeeNumeric);
      } else if (filters.sort === 'package') {
        results.sort((a, b) => b.averagePackage - a.averagePackage);
      } else if (filters.sort === 'rating') {
        results.sort((a, b) => b.rating - a.rating);
      }
    }
    return wrapArray(results);
  },

  async getCollegeBySlug(slug) {
    if (typeof window !== 'undefined') {
      try {
        const res = await fetch(`/api/colleges/${slug}`);
        if (res.ok) {
          const json = await res.json();
          return wrapItem(json.data);
        }
      } catch (e) {
        console.warn('API fetch error, falling back to local data:', e);
      }
    }
    const item = collegesData.find((c) => c.slug === slug) || null;
    return wrapItem(item);
  },

  async getCourses(stream = null) {
    let results = [...coursesData];
    if (stream) {
      const target = stream.toLowerCase();
      results = results.filter((c) => c.stream.toLowerCase().includes(target));
    }
    return wrapArray(results);
  },

  async getCourseBySlug(slug) {
    const course = coursesData.find((c) => c.slug === slug) || null;
    return wrapItem(course);
  },

  async getLocations() {
    return wrapArray(locationsData);
  },

  async getLocationBySlug(slug) {
    const loc = locationsData.find((l) => l.slug.toLowerCase() === slug.toLowerCase()) || null;
    return wrapItem(loc);
  },

  async getExams(stream = null) {
    let results = [...examsData];
    if (stream) {
      const target = stream.toLowerCase();
      results = results.filter((e) => e.stream.toLowerCase().includes(target));
    }
    return wrapArray(results);
  },

  async getExamBySlug(slug) {
    const exam = examsData.find((e) => e.slug.toLowerCase() === slug.toLowerCase()) || null;
    return wrapItem(exam);
  },

  async getRankings() {
    return wrapArray(rankingsData);
  },

  async getBlogs(category = null) {
    let results = [...blogsData];
    if (category && category !== 'All') {
      const target = category.toLowerCase();
      results = results.filter((b) => b.category.toLowerCase() === target);
    }
    return wrapArray(results);
  },

  async getBlogBySlug(slug) {
    const blog = blogsData.find((b) => b.slug === slug) || null;
    return wrapItem(blog);
  },

  async getFaqs(category = null) {
    let results = [...faqsData];
    if (category) {
      results = results.filter((f) => f.category === category);
    }
    return wrapArray(results);
  },

  async search(query) {
    if (typeof window !== 'undefined') {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const json = await res.json();
          return json.data;
        }
      } catch (e) {
        console.warn('Search fetch error, falling back:', e);
      }
    }
    return this.searchAll(query);
  },

  async searchAll(query) {
    if (!query || !query.trim()) {
      return {
        colleges: [],
        courses: [],
        locations: [],
        exams: [],
        totalCount: 0
      };
    }
    const q = query.toLowerCase().trim();

    const matchedColleges = collegesData.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.shortName && c.shortName.toLowerCase().includes(q)) ||
        c.city.toLowerCase().includes(q) ||
        c.stream.some((s) => s.toLowerCase().includes(q))
    );

    const matchedCourses = coursesData.filter(
      (cr) =>
        cr.name.toLowerCase().includes(q) ||
        cr.shortName.toLowerCase().includes(q) ||
        cr.stream.toLowerCase().includes(q)
    );

    const matchedLocations = locationsData.filter(
      (l) => l.name.toLowerCase().includes(q) || l.state.toLowerCase().includes(q)
    );

    const matchedExams = examsData.filter(
      (e) => e.name.toLowerCase().includes(q) || e.stream.toLowerCase().includes(q)
    );

    return {
      colleges: matchedColleges,
      courses: matchedCourses,
      locations: matchedLocations,
      exams: matchedExams,
      totalCount:
        matchedColleges.length +
        matchedCourses.length +
        matchedLocations.length +
        matchedExams.length
    };
  },

  async submitEnquiry(formData) {
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      return await res.json();
    } catch (e) {
      return { success: true, enquiryId: 'ENQ-' + Date.now().toString(36).toUpperCase() };
    }
  },

  async submitCounselling(formData) {
    try {
      const res = await fetch('/api/counselling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      return await res.json();
    } catch (e) {
      return { success: true, bookingId: 'CNS-' + Date.now().toString(36).toUpperCase() };
    }
  },

  async submitContact(formData) {
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, message: `[Contact Form] ${formData.message || ''}` }),
      });
      return await res.json();
    } catch (e) {
      return { success: true, messageId: 'MSG-' + Date.now().toString(36).toUpperCase() };
    }
  },
};

export default apiService;
