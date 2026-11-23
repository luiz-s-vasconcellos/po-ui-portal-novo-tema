import{m as P,p as M}from"./main-RBGX2DMP.js";import{Ar as I,F as Joe,Gi as Yb,Ha as p,Ir as Kb,Ka as qI,Lr as Kg,Oa as kI,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,W as Mze,Wr as MZ,_o as z0,ao as vu,ar as An,bn as oi,ca as ek,da as ge,et as Q5,gi as Rb,io as vt,li as Qc,ra as de,si as QL,sn as j4,so as wg,tt as R4,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-BQDTQO8h.js";var B=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url=``;subscription;apiSubscription;constructor(r,i){this.http=r,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(r=>{this.pendingRequests=r})}getRequest(){let r={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:r}).subscribe(()=>{})}static ɵfac=function(i){return new(i||o)(I(kI),I(Q5))};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-labs`]],standalone:!1,decls:9,vars:5,consts:[[1,`po-row`],[`p-label`,`Pending Requests`,1,`po-lg-12`,3,`p-value`],[`name`,`url`,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`URL`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`countPendingRequestHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-No-Count-Pending-Requests`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`screenLockHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-Screen-Lock`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Get request`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,a){i&1&&(Qc(0,`div`,0),vu(1,`po-info`,1),Kg(),Qc(2,`div`,0)(3,`po-input`,2),z0(),Kb(`ngModelChange`,function(p){return Tk(a.url,p)||(a.url=p),p}),Kg()(),Qc(4,`div`,0)(5,`po-switch`,3),z0(),Kb(`ngModelChange`,function(p){return Tk(a.countPendingRequestHeaderParam,p)||(a.countPendingRequestHeaderParam=p),p}),Kg(),Qc(6,`po-switch`,4),z0(),Kb(`ngModelChange`,function(p){return Tk(a.screenLockHeaderParam,p)||(a.screenLockHeaderParam=p),p}),Kg()(),Qc(7,`div`,0)(8,`po-button`,5),vt(`p-click`,function(){return a.getRequest()}),Kg()()),i&2&&(wg(),Rb(`p-value`,a.pendingRequests),wg(2),Yb(`ngModel`,a.url),W0(),wg(2),Yb(`ngModel`,a.countPendingRequestHeaderParam),W0(),wg(),Yb(`ngModel`,a.screenLockHeaderParam),W0(),wg(2),Rb(`p-disabled`,!a.url))},dependencies:[qI,MZ,QL,oi,j4,R4,Joe],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-http-request-interceptor-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-http-request-interceptor-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-http-request-interceptor-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Http Request Interceptor Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-http-request-interceptor-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-http-request-interceptor-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-http-request-interceptor-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,B],encapsulation:2,changeDetection:1})}return o})();var G=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-doc`]],standalone:!1,decls:97,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-http-request-interceptor-service`,1,`docs-api-class-name`],[1,`doc-code`]],template:function(i,a){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoHttpRequestModule } from '@po-ui/ng-components';`),Kg()(),vu(4,`div`,2),Qc(5,`h3`,3),Sk(6,`Services`),Kg(),Qc(7,`h4`,4)(8,`code`,5),Sk(9,`PoHttpRequestInterceptorService`),Kg()(),Qc(10,`div`,2)(11,`p`),Sk(12,`O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.`),Kg(),Qc(13,`p`),Sk(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Qc(15,`code`),Sk(16,`X-PO-No-Count-Pending-Requests`),Kg(),Sk(17,`. Para isso deve ser informado no cabeçalho da requisição com o valor `),Qc(18,`code`),Sk(19,`'true'`),Kg(),Sk(20,`,
por exemplo:`),Kg(),Qc(21,`pre`)(22,`code`),Sk(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),Kg()(),Qc(24,`p`),Sk(25,`Para obter a quantidade de requisições pendentes, deve inscrever-se no método `),Qc(26,`code`),Sk(27,`getCountPendingRequests`),Kg(),Sk(28,` do
servi\xE7o `),Qc(29,`code`),Sk(30,`PoHttpRequestInterceptorService`),Kg(),Sk(31,`, com isso, ao realizar requisições utilizando `),Qc(32,`code`),Sk(33,`HttpClient`),Kg(),Sk(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),Kg(),Qc(35,`p`),Sk(36,`Também existe a possibildade de travar a tela e mostrar uma imagem de `),Qc(37,`em`),Sk(38,`loading`),Kg(),Sk(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Qc(40,`code`),Sk(41,`X-PO-Screen-Lock`),Kg(),Sk(42,` no cabeçalho da requisição com valor `),Qc(43,`code`),Sk(44,`'true'`),Kg(),Sk(45,`.`),Kg(),Qc(46,`p`),Sk(47,`por exemplo:`),Kg(),Qc(48,`pre`)(49,`code`),Sk(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),Kg()(),Qc(51,`blockquote`)(52,`p`),Sk(53,`Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.`),Kg()(),Qc(54,`h2`),Sk(55,`Configuração`),Kg(),Qc(56,`p`),Sk(57,`É necessário configurar o `),Qc(58,`code`),Sk(59,`HttpClient`),Kg(),Sk(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Qc(61,`code`),Sk(62,`provideHttpClient(withInterceptorsFromDi())`),Kg(),Sk(63,`.`),Kg(),Qc(64,`h3`),Sk(65,`1) NgModule`),Kg(),Qc(66,`pre`)(67,`code`),Sk(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),Kg()(),Qc(69,`p`),Sk(70,`Ao importar o módulo `),Qc(71,`code`),Sk(72,`PoModule`),Kg(),Sk(73,` na aplicação, o `),Qc(74,`code`),Sk(75,`po-http-request-interceptor`),Kg(),Sk(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),Kg(),Qc(77,`h3`),Sk(78,`2) Standalone`),Kg(),Qc(79,`p`),Sk(80,`No arquivo contendo a configuração da aplicação (geralmente `),Qc(81,`code`),Sk(82,`src/app/app.config.ts`),Kg(),Sk(83,`), adicione os providers e configure o `),Qc(84,`code`),Sk(85,`HttpClient`),Kg(),Sk(86,`,
como no exemplo abaixo:`),Kg(),Qc(87,`pre`)(88,`code`),Sk(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),Kg()(),Qc(90,`h2`),Sk(91,`Como usar`),Kg(),Qc(92,`p`),Sk(93,`Segue abaixo um exemplo de uso:`),Kg(),Qc(94,`pre`)(95,`code`),Sk(96,`import { HttpClient } from '@angular/common/http';

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
`),Kg()()()())},encapsulation:2,changeDetection:1})}return o})();function $(o,te){if(o&1&&(Qc(0,`div`,1),vu(1,`sample-po-http-request-interceptor-labs-view`),Kg()),o&2){let r=ek();Rb(`hidden`,r.activeTab!==`web`)}}var ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;title=`Http Request Interceptor`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Http Request Interceptor · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(i,a){i&1&&(Qc(0,`po-page-default`,0),FO(1,$,2,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-http-request-interceptor-doc`),Kg()()),i&2&&(Rb(`p-title`,a.title)(`p-actions`,a.actions),wg(),VO(a.hidePoWebSample?-1:1),wg(),Rb(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,U,G],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(ee),GV]})}return o})();var Re=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,K]})}return o})();export{Re as DocPoHttpRequestInterceptorModule};