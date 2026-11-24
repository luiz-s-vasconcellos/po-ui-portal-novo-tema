import{m as P,p as M}from"./main-QQSPUZS3.js";import{Ar as G0,Ba as p,Br as Jn,F as Joe,Hi as YI,Ki as Zb,Lr as I,Pn as tre,Pt as are,Si as Rk,Ti as TZ,Ur as Kb,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,ar as Ab,bn as oi,co as wg,da as ge,eo as tk,et as Q5,jr as GV,oo as vt,or as An,pi as QL,qr as LO,ra as de,si as PI,sn as j4,tt as R4,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var B=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url=``;subscription;apiSubscription;constructor(r,i){this.http=r,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(r=>{this.pendingRequests=r})}getRequest(){let r={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:r}).subscribe(()=>{})}static ɵfac=function(i){return new(i||o)(I(PI),I(Q5))};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-labs`]],standalone:!1,decls:9,vars:5,consts:[[1,`po-row`],[`p-label`,`Pending Requests`,1,`po-lg-12`,3,`p-value`],[`name`,`url`,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`URL`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`countPendingRequestHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-No-Count-Pending-Requests`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`screenLockHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-Screen-Lock`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Get request`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,a){i&1&&(Jc(0,`div`,0),_u(1,`po-info`,1),Kg(),Jc(2,`div`,0)(3,`po-input`,2),G0(),Zb(`ngModelChange`,function(p){return Rk(a.url,p)||(a.url=p),p}),Kg()(),Jc(4,`div`,0)(5,`po-switch`,3),G0(),Zb(`ngModelChange`,function(p){return Rk(a.countPendingRequestHeaderParam,p)||(a.countPendingRequestHeaderParam=p),p}),Kg(),Jc(6,`po-switch`,4),G0(),Zb(`ngModelChange`,function(p){return Rk(a.screenLockHeaderParam,p)||(a.screenLockHeaderParam=p),p}),Kg()(),Jc(7,`div`,0)(8,`po-button`,5),vt(`p-click`,function(){return a.getRequest()}),Kg()()),i&2&&(wg(),Ab(`p-value`,a.pendingRequests),wg(2),Kb(`ngModel`,a.url),q0(),wg(2),Kb(`ngModel`,a.countPendingRequestHeaderParam),q0(),wg(),Kb(`ngModel`,a.screenLockHeaderParam),q0(),wg(2),Ab(`p-disabled`,!a.url))},dependencies:[YI,TZ,QL,oi,j4,R4,Joe],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-http-request-interceptor-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-http-request-interceptor-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-http-request-interceptor-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Http Request Interceptor Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-http-request-interceptor-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-http-request-interceptor-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<div class="po-row">
  <po-info class="po-lg-12" p-label="Pending Requests" [p-value]="pendingRequests"> </po-info>
</div>

<div class="po-row">
  <po-input
    class="po-lg-6"
    name="url"
    [(ngModel)]="url"
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="URL"
    p-required
  >
  </po-input>
</div>

<div class="po-row">
  <po-switch
    class="po-lg-6"
    name="countPendingRequestHeaderParam"
    [(ngModel)]="countPendingRequestHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-No-Count-Pending-Requests"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>

  <po-switch
    class="po-lg-6"
    name="screenLockHeaderParam"
    [(ngModel)]="screenLockHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-Screen-Lock"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>
</div>

<div class="po-row">
  <po-button class="po-md-4" p-label="Get request" [p-disabled]="!url" (p-click)="getRequest()"> </po-button>
</div>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-http-request-interceptor-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { PoHttpRequestInterceptorService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-http-request-interceptor-labs',
  templateUrl: './sample-po-http-request-interceptor-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHttpRequestInterceptorLabsComponent implements OnInit, OnDestroy {
  countPendingRequestHeaderParam = false;
  screenLockHeaderParam = false;

  pendingRequests: number = 0;
  url: string = '';

  private subscription: Subscription;
  private apiSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private httpRequestInterceptor: PoHttpRequestInterceptorService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
      this.pendingRequests = data;
    });
  }

  getRequest() {
    const headers = {
      'X-PO-No-Count-Pending-Requests': this.countPendingRequestHeaderParam.toString(),
      'X-PO-Screen-Lock': this.screenLockHeaderParam.toString()
    };

    this.apiSubscription = this.http.get(this.url, { headers: headers }).subscribe(() => {});
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,B],encapsulation:2,changeDetection:1})}return o})();var G=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-doc`]],standalone:!1,decls:97,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-http-request-interceptor-service`,1,`docs-api-class-name`],[1,`doc-code`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoHttpRequestModule } from '@po-ui/ng-components';`),Kg()(),_u(4,`div`,2),Jc(5,`h3`,3),Mk(6,`Services`),Kg(),Jc(7,`h4`,4)(8,`code`,5),Mk(9,`PoHttpRequestInterceptorService`),Kg()(),Jc(10,`div`,2)(11,`p`),Mk(12,`O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.`),Kg(),Jc(13,`p`),Mk(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Jc(15,`code`),Mk(16,`X-PO-No-Count-Pending-Requests`),Kg(),Mk(17,`. Para isso deve ser informado no cabeçalho da requisição com o valor `),Jc(18,`code`),Mk(19,`'true'`),Kg(),Mk(20,`,
por exemplo:`),Kg(),Jc(21,`pre`)(22,`code`),Mk(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),Kg()(),Jc(24,`p`),Mk(25,`Para obter a quantidade de requisições pendentes, deve inscrever-se no método `),Jc(26,`code`),Mk(27,`getCountPendingRequests`),Kg(),Mk(28,` do
servi\xE7o `),Jc(29,`code`),Mk(30,`PoHttpRequestInterceptorService`),Kg(),Mk(31,`, com isso, ao realizar requisições utilizando `),Jc(32,`code`),Mk(33,`HttpClient`),Kg(),Mk(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),Kg(),Jc(35,`p`),Mk(36,`Também existe a possibildade de travar a tela e mostrar uma imagem de `),Jc(37,`em`),Mk(38,`loading`),Kg(),Mk(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Jc(40,`code`),Mk(41,`X-PO-Screen-Lock`),Kg(),Mk(42,` no cabeçalho da requisição com valor `),Jc(43,`code`),Mk(44,`'true'`),Kg(),Mk(45,`.`),Kg(),Jc(46,`p`),Mk(47,`por exemplo:`),Kg(),Jc(48,`pre`)(49,`code`),Mk(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),Kg()(),Jc(51,`blockquote`)(52,`p`),Mk(53,`Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.`),Kg()(),Jc(54,`h2`),Mk(55,`Configuração`),Kg(),Jc(56,`p`),Mk(57,`É necessário configurar o `),Jc(58,`code`),Mk(59,`HttpClient`),Kg(),Mk(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Jc(61,`code`),Mk(62,`provideHttpClient(withInterceptorsFromDi())`),Kg(),Mk(63,`.`),Kg(),Jc(64,`h3`),Mk(65,`1) NgModule`),Kg(),Jc(66,`pre`)(67,`code`),Mk(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),Kg()(),Jc(69,`p`),Mk(70,`Ao importar o módulo `),Jc(71,`code`),Mk(72,`PoModule`),Kg(),Mk(73,` na aplicação, o `),Jc(74,`code`),Mk(75,`po-http-request-interceptor`),Kg(),Mk(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),Kg(),Jc(77,`h3`),Mk(78,`2) Standalone`),Kg(),Jc(79,`p`),Mk(80,`No arquivo contendo a configuração da aplicação (geralmente `),Jc(81,`code`),Mk(82,`src/app/app.config.ts`),Kg(),Mk(83,`), adicione os providers e configure o `),Jc(84,`code`),Mk(85,`HttpClient`),Kg(),Mk(86,`,
como no exemplo abaixo:`),Kg(),Jc(87,`pre`)(88,`code`),Mk(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoHttpRequestModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      PoHttpRequestModule
    ]),
    ...
  ]
};
`),Kg()(),Jc(90,`h2`),Mk(91,`Como usar`),Kg(),Jc(92,`p`),Mk(93,`Segue abaixo um exemplo de uso:`),Kg(),Jc(94,`pre`)(95,`code`),Mk(96,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
 providedIn: 'root'
})
export class CustomersService {

 headers = { 'X-PO-No-Count-Pending-Requests': true, 'X-PO-Screen-Lock': 'true' }
 pendingRequests: number = 0;
 subscription: Subscription;

 constructor(
   private http: HttpClient,
   private httpRequestInterceptor: PoHttpRequestInterceptorService) { }

 ngOnDestroy(): void {
   this.subscription.unsubscribe();
 }

 ngOnInit(): void {
   this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
     this.pendingRequests = data;
   });
 }

 getCustomers() {
   return this.http.get(\`/customers/1\`, { headers: headers });
 }

 ...

}
`),Kg()()()())},encapsulation:2,changeDetection:1})}return o})();function $(o,te){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-http-request-interceptor-labs-view`),Kg()),o&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;title=`Http Request Interceptor`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Http Request Interceptor · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0),LO(1,$,2,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-http-request-interceptor-doc`),Kg()()),i&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,U,G],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(ee),GV]})}return o})();var Re=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,K]})}return o})();export{Re as DocPoHttpRequestInterceptorModule};