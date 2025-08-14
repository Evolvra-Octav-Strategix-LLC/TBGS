import { GraphQLClient } from 'graphql-request';

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost:8080/graphql';

export const wpClient = new GraphQLClient(WORDPRESS_API_URL, {
  headers: {
    'User-Agent': 'TBGS-Headless/1.0',
  },
});

// WordPress GraphQL Queries
export const GET_CITY_HUB = `
  query CityHub($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
          altText
        }
      }
      acf {
        intro
        body
        faq {
          question
          answer
        }
        images {
          sourceUrl
          altText
        }
        country
        city
        schema_type
      }
    }
  }
`;

export const GET_SPECIALIST_LOCATION = `
  query SpecialistLocation($city: String!, $country: String!, $specialist: String!) {
    locations(where: {
      metaQuery: [
        {key: "city", compare: EQUALS, value: $city},
        {key: "country", compare: EQUALS, value: $country},
        {key: "specialist", compare: EQUALS, value: $specialist}
      ]
    }) {
      nodes {
        title
        content
        uri
        seo {
          title
          metaDesc
          opengraphImage {
            sourceUrl
            altText
          }
        }
        acf {
          intro
          body
          faq {
            question
            answer
          }
          images {
            sourceUrl
            altText
          }
          schema_type
          country
          city
          specialist
        }
      }
    }
  }
`;

export const GET_KNOWLEDGE_BASE_POST = `
  query KnowledgeBasePost($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      excerpt
      date
      modified
      uri
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
          altText
        }
      }
      acf {
        intro
        faq {
          question
          answer
        }
        images {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
    }
  }
`;

export const GET_ALL_LOCATIONS = `
  query AllLocations {
    locations {
      nodes {
        title
        uri
        acf {
          city
          country
          specialist
        }
      }
    }
  }
`;

export const GET_ALL_KNOWLEDGE_BASE_POSTS = `
  query AllKnowledgeBasePosts {
    posts {
      nodes {
        title
        slug
        uri
        date
        modified
      }
    }
  }
`;

// WordPress data types
export interface WordPressPage {
  title: string;
  content: string;
  seo?: {
    title?: string;
    metaDesc?: string;
    opengraphImage?: {
      sourceUrl: string;
      altText: string;
    };
  };
  acf?: {
    intro?: string;
    body?: string;
    faq?: Array<{
      question: string;
      answer: string;
    }>;
    images?: Array<{
      sourceUrl: string;
      altText: string;
    }>;
    country?: string;
    city?: string;
    specialist?: string;
    schema_type?: string;
  };
}

export interface WordPressPost {
  title: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  uri: string;
  seo?: {
    title?: string;
    metaDesc?: string;
    opengraphImage?: {
      sourceUrl: string;
      altText: string;
    };
  };
  acf?: {
    intro?: string;
    faq?: Array<{
      question: string;
      answer: string;
    }>;
    images?: Array<{
      sourceUrl: string;
      altText: string;
    }>;
  };
  categories?: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  tags?: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
}

// Helper functions
export async function getPageByUri(uri: string): Promise<WordPressPage | null> {
  try {
    const data = await wpClient.request(GET_CITY_HUB, { uri }) as any;
    return data.pageBy;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getSpecialistLocation(city: string, country: string, specialist: string): Promise<WordPressPage | null> {
  try {
    const data = await wpClient.request(GET_SPECIALIST_LOCATION, { city, country, specialist }) as any;
    return data.locations?.nodes?.[0] || null;
  } catch (error) {
    console.error('Error fetching specialist location:', error);
    return null;
  }
}

export async function getKnowledgeBasePost(slug: string): Promise<WordPressPost | null> {
  try {
    const data = await wpClient.request(GET_KNOWLEDGE_BASE_POST, { slug }) as any;
    return data.postBy;
  } catch (error) {
    console.error('Error fetching knowledge base post:', error);
    return null;
  }
}

export async function getAllLocations() {
  try {
    const data = await wpClient.request(GET_ALL_LOCATIONS) as any;
    return data.locations?.nodes || [];
  } catch (error) {
    console.error('Error fetching all locations:', error);
    return [];
  }
}

export async function getAllKnowledgeBasePosts() {
  try {
    const data = await wpClient.request(GET_ALL_KNOWLEDGE_BASE_POSTS) as any;
    return data.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching all knowledge base posts:', error);
    return [];
  }
}