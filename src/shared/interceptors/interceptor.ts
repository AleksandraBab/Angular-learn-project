import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../tockens/base-url.tocken';

@Injectable()
export class Interceptor implements HttpInterceptor {
	constructor(@Inject(BASE_URL) private baseUrl: string) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const newReq = req.clone({
			url: this.baseUrl + req.url,
		});

		return next.handle(newReq);
	}
}
