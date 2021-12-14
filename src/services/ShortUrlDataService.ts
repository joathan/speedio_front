import http from "@/http-common";

class ShortUrlDataService {
  getAll(): Promise<any> {
    return http.get("/short_urls");
  }

  getTop100(): Promise<any> {
    return http.get("/short_urls?top=100");
  }

  create(data: any): Promise<any> {
    return http.post("/short_urls", data);
  }

  visit(id: number): Promise<any> {
    return http.post(`/short_urls/${id}/visit`);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/short_urls/${id}`);
  }
}

export default new ShortUrlDataService();
