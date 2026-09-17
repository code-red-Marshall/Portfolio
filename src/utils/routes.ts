export type CaseStudyView = 
  | 'case-study-solutions-central'
  | 'case-study-dishflow'
  | 'case-study-lead-quality'
  | 'case-study-breakage'
  | 'case-study-ecg';

export type AppView = 'home' | CaseStudyView;

export interface CaseStudyRouteConfig {
  view: CaseStudyView;
  slug: string;
  path: string;
  title: string;
  aliases?: string[];
}

export const CASE_STUDY_ROUTES: Record<CaseStudyView, CaseStudyRouteConfig> = {
  'case-study-solutions-central': {
    view: 'case-study-solutions-central',
    slug: 'solutions-central',
    path: '/case-study/solutions-central',
    title: 'Solutions Central Case Study | Bhargav Nath',
    aliases: ['solutions-central', 'solutions']
  },
  'case-study-dishflow': {
    view: 'case-study-dishflow',
    slug: 'dishflow',
    path: '/case-study/dishflow',
    title: 'DishFlow Case Study | Bhargav Nath',
    aliases: ['dishflow']
  },
  'case-study-lead-quality': {
    view: 'case-study-lead-quality',
    slug: 'lead-quality',
    path: '/case-study/lead-quality',
    title: 'Lead Quality Analysis Case Study | Bhargav Nath',
    aliases: ['lead-quality', 'lead-quality-analysis']
  },
  'case-study-breakage': {
    view: 'case-study-breakage',
    slug: 'breakage-intelligence',
    path: '/case-study/breakage-intelligence',
    title: 'Breakage Intelligence Lab Case Study | Bhargav Nath',
    aliases: ['breakage', 'breakage-intelligence', 'redemptioniq']
  },
  'case-study-ecg': {
    view: 'case-study-ecg',
    slug: 'ecg-identification',
    path: '/case-study/ecg-identification',
    title: 'ECG Biometric Identification Case Study | Bhargav Nath',
    aliases: ['ecg', 'ecg-identification']
  }
};

export const DEFAULT_PAGE_TITLE = 'Bhargav Nath - AI-Native Product Professional';

/**
 * Resolves current path or search/hash to an AppView
 */
export function resolveViewFromUrl(
  pathname: string = window.location.pathname, 
  search: string = window.location.search, 
  hash: string = window.location.hash
): AppView {
  const normalizedPath = pathname.toLowerCase().replace(/\/+$/, '');
  
  // Check URL query parameters (e.g., ?case-study=dishflow)
  const params = new URLSearchParams(search);
  const queryParam = params.get('case-study') || params.get('study') || params.get('p');
  
  for (const config of Object.values(CASE_STUDY_ROUTES)) {
    // Check primary path: /case-study/<slug> or /case-studies/<slug>
    if (
      normalizedPath === config.path || 
      normalizedPath === `/case-studies/${config.slug}` ||
      (config.aliases && config.aliases.some(alias => 
        normalizedPath === `/case-study/${alias}` || 
        normalizedPath === `/case-studies/${alias}`
      ))
    ) {
      return config.view;
    }

    // Check query params if any
    if (queryParam && (queryParam.toLowerCase() === config.slug || (config.aliases && config.aliases.includes(queryParam.toLowerCase())))) {
      return config.view;
    }

    // Check hash fallback (#case-study-dishflow or #dishflow)
    const cleanHash = hash.replace(/^#/, '').toLowerCase();
    if (cleanHash === config.view || cleanHash === config.slug || (config.aliases && config.aliases.includes(cleanHash))) {
      return config.view;
    }
  }

  return 'home';
}

/**
 * Returns the full shareable URL for a given case study view
 */
export function getCaseStudyUrl(view: CaseStudyView): string {
  const config = CASE_STUDY_ROUTES[view];
  if (!config) return typeof window !== 'undefined' ? window.location.origin : '';
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  return `${origin}${config.path}`;
}

/**
 * Utility to copy text to clipboard with fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    console.warn('navigator.clipboard failed, falling back to execCommand', err);
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Failed to copy using execCommand', err);
    return false;
  }
}
