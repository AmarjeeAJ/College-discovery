/**
 * API Service Abstraction Layer
 * All frontend components communicate exclusively through this module.
 * In current stage, returns mock data with async Promises.
 * Later, swap implementations to fetch('/api/...') without touching UI components.
 */

import { collegesData } from '../data/colleges.js';
import { coursesData } from '../data/courses.js';
import { locationsData } from '../data/locations.js';
import { examsData } from '../data/exams.js';
import { blogsData } from '../data/blogs.js';
import { rankingsData } from '../data/rankings.js';
import { faqsData } from '../data/faqs.js';

// Simulated network delay (can be set to 0 for instant local transitions)
const SIMULATED_LATENCY_MS = 60;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiService = {
  /**
   * Fetch all colleges with optional multi-facet filtering
   */
  async getColleges(filters = {}) {
    await delay(SIMULATED_LATENCY_MS);
    let results = [...collegesData];

    // Filter by stream (e.g., 'btech', 'engineering', 'mba', 'medical', 'law', 'management')
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

    // Filter by city
    if (filters.city) {
      const cityTarget = filters.city.toLowerCase();
      results = results.filter((c) => c.city.toLowerCase() === cityTarget);
    }

    // Filter by state
    if (filters.state) {
      const stateTarget = filters.state.toLowerCase();
      results = results.filter((c) => c.state.toLowerCase() === stateTarget);
    }

    // Filter by college type (Private, Public)
    if (filters.type) {
      const typeTarget = filters.type.toLowerCase();
      results = results.filter((c) => c.type.toLowerCase().includes(typeTarget));
    }

    // Filter by max annual fee
    if (filters.maxFee) {
      results = results.filter((c) => c.annualFeeNumeric <= Number(filters.maxFee));
    }

    // Search query
    if (filters.query) {
      const q = filters.query.toLowerCase().trim();
      results = results.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.shortName.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q) ||
          c.stream.some((s) => s.toLowerCase().includes(q))
      );
    }

    // Sorting
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

    return {
      success: true,
      total: results.length,
      data: results
    };
  },

  /**
   * Fetch single college by slug
   */
  async getCollegeBySlug(slug) {
    await delay(SIMULATED_LATENCY_MS);
    const college = collegesData.find((c) => c.slug === slug);
    if (!college) {
      return { success: false, error: 'College not found', data: null };
    }
    return { success: true, data: college };
  },

  /**
   * Fetch all courses
   */
  async getCourses() {
    await delay(SIMULATED_LATENCY_MS);
    return { success: true, total: coursesData.length, data: coursesData };
  },

  /**
   * Fetch single course by slug
   */
  async getCourseBySlug(slug) {
    await delay(SIMULATED_LATENCY_MS);
    const course = coursesData.find((c) => c.slug === slug);
    if (!course) {
      return { success: false, error: 'Course not found', data: null };
    }
    return { success: true, data: course };
  },

  /**
   * Fetch all locations
   */
  async getLocations() {
    await delay(SIMULATED_LATENCY_MS);
    return { success: true, total: locationsData.length, data: locationsData };
  },

  /**
   * Fetch location by slug (city)
   */
  async getLocationBySlug(slug) {
    await delay(SIMULATED_LATENCY_MS);
    const location = locationsData.find((l) => l.slug === slug);
    if (!location) {
      return { success: false, error: 'Location not found', data: null };
    }
    return { success: true, data: location };
  },

  /**
   * Fetch entrance exams
   */
  async getExams() {
    await delay(SIMULATED_LATENCY_MS);
    return { success: true, total: examsData.length, data: examsData };
  },

  /**
   * Fetch entrance exam by slug
   */
  async getExamBySlug(slug) {
    await delay(SIMULATED_LATENCY_MS);
    const exam = examsData.find((e) => e.slug === slug);
    if (!exam) {
      return { success: false, error: 'Exam not found', data: null };
    }
    return { success: true, data: exam };
  },

  /**
   * Fetch blog articles
   */
  async getBlogs() {
    await delay(SIMULATED_LATENCY_MS);
    return { success: true, total: blogsData.length, data: blogsData };
  },

  /**
   * Fetch single blog by slug
   */
  async getBlogBySlug(slug) {
    await delay(SIMULATED_LATENCY_MS);
    const blog = blogsData.find((b) => b.slug === slug);
    if (!blog) {
      return { success: false, error: 'Blog not found', data: null };
    }
    return { success: true, data: blog };
  },

  /**
   * Fetch rankings
   */
  async getRankings() {
    await delay(SIMULATED_LATENCY_MS);
    return { success: true, total: rankingsData.length, data: rankingsData };
  },

  /**
   * Fetch FAQs
   */
  async getFaqs() {
    await delay(SIMULATED_LATENCY_MS);
    return { success: true, data: faqsData };
  },

  /**
   * Global autocomplete & cross-entity search
   */
  async searchAll(query) {
    await delay(SIMULATED_LATENCY_MS);
    if (!query || !query.trim()) {
      return {
        colleges: [],
        courses: [],
        locations: [],
        exams: []
      };
    }
    const q = query.toLowerCase().trim();

    const matchedColleges = collegesData.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
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

  /**
   * Submit admission enquiry (Prepares for future POST /api/enquiries)
   */
  async submitEnquiry(payload) {
    await delay(300);
    console.log('[API Service] Admission Enquiry Submitted:', payload);
    // Future: const res = await fetch('/api/enquiries', { method: 'POST', body: JSON.stringify(payload) });
    return {
      success: true,
      message: 'Your admission enquiry has been submitted. An expert counselor will contact you within 2 business hours.',
      enquiryId: `ENQ_${Date.now()}`
    };
  },

  /**
   * Submit counselling request (Prepares for future POST /api/counselling)
   */
  async submitCounselling(payload) {
    await delay(300);
    console.log('[API Service] Counselling Booking Submitted:', payload);
    return {
      success: true,
      message: 'Counselling session successfully booked. Our senior education strategist will reach out to confirm your slot.',
      bookingId: `CNS_${Date.now()}`
    };
  },

  /**
   * Submit contact us message (Prepares for future POST /api/contact)
   */
  async submitContact(payload) {
    await delay(300);
    console.log('[API Service] Contact Message Submitted:', payload);
    return {
      success: true,
      message: 'Thank you for reaching out! Our admissions advisory desk has received your message.'
    };
  }
};
