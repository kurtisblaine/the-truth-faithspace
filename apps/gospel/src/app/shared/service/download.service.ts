import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  downloadZip(url: string): Observable<HttpEvent<Blob>> {
    return this.http.get(url, {
      reportProgress: true,
      observe: "events",
      responseType: "blob",
    });
  }

  saveFile(blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
