export interface ApiPostResponse {
  message: string;
  data: ApiProduct;
}

export interface ApiGetResponse {
  data: ApiProduct[];
}

export interface ApiProduct {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}
