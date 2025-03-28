import { OpenAIEmbeddings } from '@langchain/openai';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { Document } from '@langchain/core/documents';
import { ChatOpenAI } from '@langchain/openai';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';
import { formatDocumentsAsString } from 'langchain/util/document';

// Initialize embeddings and vector store
const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.VITE_OPENAI_API_KEY,
});

// Create documents from portfolio information
const createPortfolioDocuments = (portfolioInfo: any) => {
  const documents: Document[] = [];

  // Education documents
  portfolioInfo.education.forEach((edu: any) => {
    documents.push(
      new Document({
        pageContent: `Education: ${edu.degree} from ${edu.school} (${edu.date}). GPA: ${edu.gpa}. Location: ${edu.location}. Relevant coursework: ${edu.relevantCoursework}`,
        metadata: { section: 'education' }
      })
    );
  });

  // Experience documents
  portfolioInfo.experience.forEach((exp: any) => {
    documents.push(
      new Document({
        pageContent: `Experience: ${exp.title} at ${exp.company} (${exp.date}) in ${exp.location}. Achievements: ${exp.achievements.join('. ')}`,
        metadata: { section: 'experience' }
      })
    );
  });

  // Skills documents
  Object.entries(portfolioInfo.skills).forEach(([category, skills]: [string, any]) => {
    documents.push(
      new Document({
        pageContent: `Skills - ${category}: ${skills.join(', ')}`,
        metadata: { section: 'skills' }
      })
    );
  });

  // Publications
  portfolioInfo.publications.forEach((pub: any) => {
    documents.push(
      new Document({
        pageContent: `Publication: "${pub.title}" presented at ${pub.conference} (${pub.date}) in ${pub.location}. ISBN: ${pub.isbn}`,
        metadata: { section: 'publications' }
      })
    );
  });

  // Certifications
  portfolioInfo.certifications.forEach((cert: any) => {
    documents.push(
      new Document({
        pageContent: `Certification: ${cert.title} issued by ${cert.issuer} (${cert.date}). Link: ${cert.link}`,
        metadata: { section: 'certifications' }
      })
    );
  });

  // Open Source Contributions
  portfolioInfo.openSourceContributions.forEach((contrib: any) => {
    documents.push(
      new Document({
        pageContent: `Open Source Contribution: ${contrib.project} (${contrib.date}). ${contrib.description}. Link: ${contrib.link}`,
        metadata: { section: 'contributions' }
      })
    );
  });

  return documents;
};

// Initialize vector store with documents
let vectorStore: MemoryVectorStore | null = null;

export const initializeVectorStore = async (portfolioInfo: any) => {
  const documents = createPortfolioDocuments(portfolioInfo);
  vectorStore = await MemoryVectorStore.fromDocuments(documents, embeddings);
};

// Query function
export const queryPortfolio = async (query: string): Promise<string> => {
  if (!vectorStore) {
    throw new Error('Vector store not initialized');
  }

  const model = new ChatOpenAI({
    modelName: 'gpt-3.5-turbo',
    openAIApiKey: process.env.VITE_OPENAI_API_KEY,
    temperature: 0.3,
  });

  const retriever = vectorStore.asRetriever(3);

  const chain = RunnableSequence.from([
    {
      context: retriever,
      question: (input: string) => input,
    },
    {
      context: (previousOutput) =>
        formatDocumentsAsString(previousOutput.context),
      question: (previousOutput) => previousOutput.question,
    },
    async (formattedInput) => {
      const response = await model.invoke(
        `You are Jarvis, a helpful AI assistant for Vamsi Krishna Kollipara's portfolio website. 
        Based on the following context, please provide a detailed and natural response to the question. 
        If the context doesn't contain relevant information, respond with "I don't have enough information to answer that question."
        
        Context: ${formattedInput.context}
        
        Question: ${formattedInput.question}
        
        Response:`
      );
      return response.content;
    },
    new StringOutputParser(),
  ]);

  return chain.invoke(query);
}; 