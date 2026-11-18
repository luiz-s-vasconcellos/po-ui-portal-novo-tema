import{m as P,p as M}from"./main-FL7X32TP.js";import{Ar as I,Da as kI,F as Joe,Ga as qI,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bn as oi,ci as QP,cr as B_,da as gk,et as Q5,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,sa as ek,si as QL,sn as j4,tt as R4,ua as ge,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var Z=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url=``;subscription;apiSubscription;constructor(r,i){this.http=r,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(r=>{this.pendingRequests=r})}getRequest(){let r={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:r}).subscribe(()=>{})}static ɵfac=function(i){return new(i||o)(I(kI),I(Q5))};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-labs`]],standalone:!1,decls:9,vars:5,consts:[[1,`po-row`],[`p-label`,`Pending Requests`,1,`po-lg-12`,3,`p-value`],[`name`,`url`,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`URL`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`countPendingRequestHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-No-Count-Pending-Requests`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`screenLockHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-Screen-Lock`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Get request`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,a){i&1&&(Qc(0,`div`,0),vu(1,`po-info`,1),Kg(),Qc(2,`div`,0)(3,`po-input`,2),z0(),Kb(`ngModelChange`,function(l){return Tk(a.url,l)||(a.url=l),l}),Kg()(),Qc(4,`div`,0)(5,`po-switch`,3),z0(),Kb(`ngModelChange`,function(l){return Tk(a.countPendingRequestHeaderParam,l)||(a.countPendingRequestHeaderParam=l),l}),Kg(),Qc(6,`po-switch`,4),z0(),Kb(`ngModelChange`,function(l){return Tk(a.screenLockHeaderParam,l)||(a.screenLockHeaderParam=l),l}),Kg()(),Qc(7,`div`,0)(8,`po-button`,5),vt(`p-click`,function(){return a.getRequest()}),Kg()()),i&2&&(wg(),Rb(`p-value`,a.pendingRequests),wg(2),Yb(`ngModel`,a.url),W0(),wg(2),Yb(`ngModel`,a.countPendingRequestHeaderParam),W0(),wg(),Yb(`ngModel`,a.screenLockHeaderParam),W0(),wg(2),Rb(`p-disabled`,!a.url))},dependencies:[qI,MZ,QL,oi,j4,R4,Joe],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o});var $=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-http-request-interceptor-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Http Request Interceptor Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-http-request-interceptor-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-http-request-interceptor-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-http-request-interceptor-labs`),Kg(),vu(23,`hr`)),i&2&&(wg(5),gk(`po-icon `+a.sampleCodeButtonIcon),wg(),tm(` `,a.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ie,a.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Z],encapsulation:2,changeDetection:1})}return o})();var ee=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-doc`]],standalone:!1,decls:97,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-http-request-interceptor-service`,1,`docs-api-class-name`],[1,`doc-code`]],template:function(i,a){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoHttpRequestModule } from '@po-ui/ng-components';`),Kg()(),vu(4,`div`,2),Qc(5,`h3`,3),Sk(6,`Services`),Kg(),Qc(7,`h4`,4)(8,`code`,5),Sk(9,`PoHttpRequestInterceptorService`),Kg()(),Qc(10,`div`,2)(11,`p`),Sk(12,`O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.`),Kg(),Qc(13,`p`),Sk(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
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
`),Kg()()()())},encapsulation:2,changeDetection:1})}return o})();function pe(o,le){if(o&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let a=ek();return U_(a.changeTab(`web`))}),vu(1,`sample-po-http-request-interceptor-labs-view`),Kg()}if(o&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var se=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Http Request Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,pe,2,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),vu(4,`sample-po-http-request-interceptor-doc`),Kg()()()),i&2&&(Rb(`p-actions`,a.actions),wg(2),VO(a.hidePoWebSample?-1:2),wg(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,$,ee],encapsulation:2,changeDetection:1})}return o})()}];var ne=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(se),GV]})}return o})();var Le=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,ne]})}return o})();export{Le as DocPoHttpRequestInterceptorModule};