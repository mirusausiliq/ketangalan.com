// Data layer: posts
// Designed for easy migration to Strapi CMS

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
  category?: string;
  featured?: boolean;
}

export const posts: BlogPost[] = [
  {
    slug: "introducing-ketangalan-research",
    title: "Introducing Ketangalan Language Research Initiative",
    description: "A comprehensive overview of our new research initiative dedicated to preserving and advancing Ketangalan linguistic studies.",
    date: "2026-03-01",
    author: "Dr. Maria Sanchez",
    category: "Research",
    featured: true,
    content: `
# Introducing Ketangalan Language Research Initiative

Ketangalan is a Formosan language rich with cultural and historical significance. Our research initiative aims to preserve, document, and advance the understanding of this important indigenous language.

## Our Mission

The Ketangalan Language Research Initiative is dedicated to:

- **Language Preservation**: Documenting and archiving the Ketangalan language through contemporary recording techniques
- **Academic Study**: Conducting rigorous linguistic research to understand the language's structure and development
- **Community Engagement**: Working directly with Ketangalan speakers to ensure research benefits the community
- **Educational Development**: Creating resources for language learning and cultural transmission

## Research Areas

Our team focuses on several key research areas:

### Phonology and Phonetics
Understanding the sound system of Ketangalan and how it compares to other Formosan languages.

### Grammar and Syntax
Analyzing the grammatical structures that make Ketangalan unique and expressive.

### Vocabulary and Semantics
Documenting the rich vocabulary and exploring how meaning is constructed in the language.

### Sociolinguistics
Studying how language use varies across different communities and generations.

## Join Our Community

We welcome collaborators, researchers, and community members interested in Ketangalan language and culture. Contact us to learn more about our current projects and opportunities.
    `,
  },
  {
    slug: "ketangalan-phonology-study",
    title: "The Phonology of Ketangalan: New Discoveries",
    description: "Recent findings from our phonological analysis reveal unique characteristics of the Ketangalan sound system.",
    date: "2026-02-15",
    author: "Prof. Chen Wei",
    category: "Linguistics",
    featured: true,
    content: `
# The Phonology of Ketangalan: New Discoveries

Recent acoustic analysis and field research have revealed fascinating aspects of Ketangalan phonology that were previously undocumented.

## Key Findings

Our team has identified several distinctive phonological features:

- Presence of glottalized consonants in word-initial position
- Complex tone system with four contrastive tones
- Vowel harmony patterns influenced by morphological structure
- Unique consonant clusters in compound formations

## Research Methodology

We employed both traditional linguistic analysis and modern instrumental phonetics:

- Acoustic analysis using Praat software
- Perceptual experiments with native speakers
- Historical comparative analysis with related languages
- Computational modeling of phonological patterns

## Implications

These findings have significant implications for understanding Formosan language families and their historical development. They also provide important data for revitalization efforts in the community.

## References

This research was conducted in collaboration with the Ketangalan Cultural Center and is part of our ongoing documentation efforts.
    `,
  },
  {
    slug: "preservation-through-technology",
    title: "Digital Preservation: Technology in Language Revitalization",
    description: "How modern technology is being used to preserve and revitalize the Ketangalan language for future generations.",
    date: "2026-02-01",
    author: "Lisa Wang",
    category: "Technology",
    content: `
# Digital Preservation: Technology in Language Revitalization

Technology offers unprecedented opportunities for language preservation and community engagement in revitalization efforts.

## Our Digital Archive

We have created a comprehensive digital archive containing:

- Recorded interviews with elder speakers
- Annotated text corpus with grammatical analysis
- Multimedia learning materials
- Interactive pronunciation guides

## Digital Tools for Learners

Our interactive platform includes:

- Vocabulary builder with audio pronunciation
- Grammar tutorials with interactive exercises
- Sentence builder for practical language use
- Community forum for learners to practice

## Community Engagement

Digital tools allow us to:

- Connect dispersed community members
- Maintain continuity in language learning
- Document contemporary language use
- Create resources accessible to everyone

## Future Directions

As technology evolves, so do our preservation methods. We are exploring AR/VR applications for immersive language learning and AI-assisted transcription for faster documentation.
    `,
  },
];
