export interface ApiBlogType {
  category: {
    createdAt: string;
    id: string;
    name: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  };
  content: string;
  createdAt: string
  eyecatch: {
    height: 554;
    url: string;
    width: 730;
  };
  id: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  updatedAt: string;
}

export interface ApiProjectType {
  contents: string;
  createdAt: string;
  id: string;
  kv: {
    height: number;
    url: string;
    width: number;
  }
  publishedAt: string;
  revisedAt: string;
  title: string;
  updatedAt: string;
  url: string;
}
