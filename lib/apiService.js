import { collegesData } from './data/colleges';
import { coursesData } from './data/courses';
import { locationsData } from './data/locations';
import { examsData } from './data/exams';
import { blogsData } from './data/blogs';
import { rankingsData } from './data/rankings';
import { faqsData } from './data/faqs';

/**
 * Pure Client-Side Frontend Data Service
 * No backend server or external API calls needed.
 * All queries, filters, and searches run instantly in memory.
 */

function wrapArray(arr) {
  const result = Array.isArray(arr) ? [...arr] : [];
  result.success = true;
  result.data = result;
  result.total = result.length;
  return result;
}

function wrapItem(item) {
  if (!item) {
    return null;
  }
  return {
    ...item,
    success: true,
    data: item,
  };
}

export const apiService = {
  async getColleges(filters = {}) {
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
      const target = filters.city.toLowerCase().trim();
      results = results.filter((c) => c.city.toLowerCase() === target);
    }

    if (filters.state) {
      const target = filters.state.toLowerCase().trim();
      results = results.filter((c) => c.state.toLowerCase() === target);
    }

    if (filters.type) {
      const target = filters.type.toLowerCase().trim();
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
        results.sort((a, b) => (a.nirfRanking || 999) - (b.nirfRanking || 999));
      } else if (filters.sort === 'fee_low_high') {
        results.sort((a, b) => (a.annualFeeNumeric || 0) - (b.annualFeeNumeric || 0));
      } else if (filters.sort === 'fee_high_low') {
        results.sort((a, b) => (b.annualFeeNumeric || 0) - (a.annualFeeNumeric || 0));
      } else if (filters.sort === 'package') {
        results.sort((a, b) => (b.averagePackage || 0) - (a.averagePackage || 0));
      } else if (filters.sort === 'rating') {
        results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      }
    }

    return wrapArray(results);
  },

  async getCollegeBySlug(slug) {
    if (!slug) return wrapItem(null);
    const target = slug.toLowerCase().trim();
    const item =
      collegesData.find(
        (c) =>
          c.slug.toLowerCase() === target ||
          (c.aliases && c.aliases.some((a) => a.toLowerCase() === target))
      ) || null;
    return wrapItem(item);
  },

  async getCourses(stream = null) {
    let results = [...coursesData];
    if (stream) {
      const target = stream.toLowerCase().trim();
      results = results.filter((c) => c.stream.toLowerCase().includes(target));
    }
    return wrapArray(results);
  },

  async getCourseBySlug(slug) {
    if (!slug) return wrapItem(null);
    const course = coursesData.find((c) => c.slug.toLowerCase() === slug.toLowerCase()) || null;
    return wrapItem(course);
  },

  async getLocations() {
    return wrapArray(locationsData);
  },

  async getLocationBySlug(slug) {
    if (!slug) return wrapItem(null);
    const loc = locationsData.find((l) => l.slug.toLowerCase() === slug.toLowerCase()) || null;
    return wrapItem(loc);
  },

  async getExams(stream = null) {
    let results = [...examsData];
    if (stream) {
      const target = stream.toLowerCase().trim();
      results = results.filter((e) => e.stream.toLowerCase().includes(target));
    }
    return wrapArray(results);
  },

  async getExamBySlug(slug) {
    if (!slug) return wrapItem(null);
    const exam = examsData.find((e) => e.slug.toLowerCase() === slug.toLowerCase()) || null;
    return wrapItem(exam);
  },

  async getRankings() {
    return wrapArray(rankingsData);
  },

  async getBlogs(category = null) {
    let results = [...blogsData];
    if (category && category !== 'All') {
      const target = category.toLowerCase().trim();
      results = results.filter((b) => b.category.toLowerCase() === target);
    }
    return wrapArray(results);
  },

  async getBlogBySlug(slug) {
    if (!slug) return wrapItem(null);
    const blog = blogsData.find((b) => b.slug.toLowerCase() === slug.toLowerCase()) || null;
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
    return this.searchAll(query);
  },

  async searchAll(query) {
    if (!query || !query.trim()) {
      return {
        colleges: [],
        courses: [],
        locations: [],
        exams: [],
        totalCount: 0,
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
        matchedExams.length,
    };
  },

  async submitEnquiry(formData) {
    const enquiry = {
      id: 'ENQ-' + Date.now().toString(36).toUpperCase(),
      createdAt: new Date().toISOString(),
      ...formData,
    };
    if (typeof window !== 'undefined') {
      try {
        const stored = JSON.parse(localStorage.getItem('cl_enquiries') || '[]');
        stored.unshift(enquiry);
        localStorage.setItem('cl_enquiries', JSON.stringify(stored));
      } catch (e) {
        // Ignore localStorage quota errors
      }
    }
    return { success: true, enquiryId: enquiry.id, message: 'Enquiry submitted successfully!' };
  },

  async submitCounselling(formData) {
    const booking = {
      id: 'CNS-' + Date.now().toString(36).toUpperCase(),
      createdAt: new Date().toISOString(),
      ...formData,
    };
    if (typeof window !== 'undefined') {
      try {
        const stored = JSON.parse(localStorage.getItem('cl_counselling_bookings') || '[]');
        stored.unshift(booking);
        localStorage.setItem('cl_counselling_bookings', JSON.stringify(stored));
      } catch (e) {
        // Ignore localStorage quota errors
      }
    }
    return { success: true, bookingId: booking.id, message: 'Counselling session booked successfully!' };
  },

  async submitContact(formData) {
    const contact = {
      id: 'MSG-' + Date.now().toString(36).toUpperCase(),
      createdAt: new Date().toISOString(),
      ...formData,
    };
    if (typeof window !== 'undefined') {
      try {
        const stored = JSON.parse(localStorage.getItem('cl_contact_messages') || '[]');
        stored.unshift(contact);
        localStorage.setItem('cl_contact_messages', JSON.stringify(stored));
      } catch (e)
      {
        // Ignore localStorage quota errors
      }
    }
    return { success: true, messageId: contact.id, message: 'Message received successfully!' };
  },
};

export default apiService;
