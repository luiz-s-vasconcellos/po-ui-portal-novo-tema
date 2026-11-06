import{$n as Ak,Ar as Ig,B as L4,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Oa as qI,Ri as Zg,Rr as Kb,Ti as W0,Vi as _u,Xt as ere,Yi as eF,da as kI,ea as ge,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,rt as Qae,t as $5,va as nk,xi as VO,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var Y=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url=``;subscription;apiSubscription;constructor(r,i){this.http=r,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(r=>{this.pendingRequests=r})}getRequest(){let r={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:r}).subscribe(()=>{})}static ɵfac=function(i){return new(i||o)(I(kI),I($5))};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-labs`]],standalone:!1,decls:9,vars:5,consts:[[1,`po-row`],[`p-label`,`Pending Requests`,1,`po-lg-12`,3,`p-value`],[`name`,`url`,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`URL`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`countPendingRequestHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-No-Count-Pending-Requests`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`screenLockHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-Screen-Lock`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Get request`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,a){i&1&&(Jc(0,`div`,0),_u(1,`po-info`,1),Zg(),Jc(2,`div`,0)(3,`po-input`,2),W0(),Kb(`ngModelChange`,function(l){return Ak(a.url,l)||(a.url=l),l}),Zg()(),Jc(4,`div`,0)(5,`po-switch`,3),W0(),Kb(`ngModelChange`,function(l){return Ak(a.countPendingRequestHeaderParam,l)||(a.countPendingRequestHeaderParam=l),l}),Zg(),Jc(6,`po-switch`,4),W0(),Kb(`ngModelChange`,function(l){return Ak(a.screenLockHeaderParam,l)||(a.screenLockHeaderParam=l),l}),Zg()(),Jc(7,`div`,0)(8,`po-button`,5),vt(`p-click`,function(){return a.getRequest()}),Zg()()),i&2&&(Ig(),Rb(`p-value`,a.pendingRequests),Ig(2),Yb(`ngModel`,a.url),Y0(),Ig(2),Yb(`ngModel`,a.countPendingRequestHeaderParam),Y0(),Ig(),Yb(`ngModel`,a.screenLockHeaderParam),Y0(),Ig(2),Rb(`p-disabled`,!a.url))},dependencies:[qI,TZ,JL,oi,U4,L4,Yoe],encapsulation:2,changeDetection:1})}return o})();var oe=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Http Request Interceptor Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-http-request-interceptor-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-http-request-interceptor-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-http-request-interceptor-labs`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,oe,a.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Y],encapsulation:2,changeDetection:1})}return o})();var $=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-http-request-interceptor-doc`]],standalone:!1,decls:97,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoHttpRequestModule } from '@po-ui/ng-components';`),Zg()(),_u(4,`div`,2),Jc(5,`h3`,3),Tk(6,`Services`),Zg(),Jc(7,`h4`,4)(8,`code`,5),Tk(9,`PoHttpRequestInterceptorService`),Zg()(),Jc(10,`div`,2)(11,`p`),Tk(12,`O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.`),Zg(),Jc(13,`p`),Tk(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Jc(15,`code`),Tk(16,`X-PO-No-Count-Pending-Requests`),Zg(),Tk(17,`. Para isso deve ser informado no cabeçalho da requisição com o valor `),Jc(18,`code`),Tk(19,`'true'`),Zg(),Tk(20,`,
por exemplo:`),Zg(),Jc(21,`pre`)(22,`code`),Tk(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),Zg()(),Jc(24,`p`),Tk(25,`Para obter a quantidade de requisições pendentes, deve inscrever-se no método `),Jc(26,`code`),Tk(27,`getCountPendingRequests`),Zg(),Tk(28,` do
servi\xE7o `),Jc(29,`code`),Tk(30,`PoHttpRequestInterceptorService`),Zg(),Tk(31,`, com isso, ao realizar requisições utilizando `),Jc(32,`code`),Tk(33,`HttpClient`),Zg(),Tk(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),Zg(),Jc(35,`p`),Tk(36,`Também existe a possibildade de travar a tela e mostrar uma imagem de `),Jc(37,`em`),Tk(38,`loading`),Zg(),Tk(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Jc(40,`code`),Tk(41,`X-PO-Screen-Lock`),Zg(),Tk(42,` no cabeçalho da requisição com valor `),Jc(43,`code`),Tk(44,`'true'`),Zg(),Tk(45,`.`),Zg(),Jc(46,`p`),Tk(47,`por exemplo:`),Zg(),Jc(48,`pre`)(49,`code`),Tk(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),Zg()(),Jc(51,`blockquote`)(52,`p`),Tk(53,`Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.`),Zg()(),Jc(54,`h2`),Tk(55,`Configuração`),Zg(),Jc(56,`p`),Tk(57,`É necessário configurar o `),Jc(58,`code`),Tk(59,`HttpClient`),Zg(),Tk(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Jc(61,`code`),Tk(62,`provideHttpClient(withInterceptorsFromDi())`),Zg(),Tk(63,`.`),Zg(),Jc(64,`h3`),Tk(65,`1) NgModule`),Zg(),Jc(66,`pre`)(67,`code`),Tk(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),Zg()(),Jc(69,`p`),Tk(70,`Ao importar o módulo `),Jc(71,`code`),Tk(72,`PoModule`),Zg(),Tk(73,` na aplicação, o `),Jc(74,`code`),Tk(75,`po-http-request-interceptor`),Zg(),Tk(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),Zg(),Jc(77,`h3`),Tk(78,`2) Standalone`),Zg(),Jc(79,`p`),Tk(80,`No arquivo contendo a configuração da aplicação (geralmente `),Jc(81,`code`),Tk(82,`src/app/app.config.ts`),Zg(),Tk(83,`), adicione os providers e configure o `),Jc(84,`code`),Tk(85,`HttpClient`),Zg(),Tk(86,`,
como no exemplo abaixo:`),Zg(),Jc(87,`pre`)(88,`code`),Tk(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),Zg()(),Jc(90,`h2`),Tk(91,`Como usar`),Zg(),Jc(92,`p`),Tk(93,`Segue abaixo um exemplo de uso:`),Zg(),Jc(94,`pre`)(95,`code`),Tk(96,`import { HttpClient } from '@angular/common/http';

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
`),Zg()()()())},encapsulation:2,changeDetection:1})}return o})();function ae(o,se){if(o&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let a=nk();return H_(a.changeTab(`web`))}),_u(1,`sample-po-http-request-interceptor-labs-view`),Zg()}if(o&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var pe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Http Request Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,ae,2,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),_u(4,`sample-po-http-request-interceptor-doc`),Zg()()()),i&2&&(Rb(`p-actions`,a.actions),Ig(2),BO(a.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Z,$],encapsulation:2,changeDetection:1})}return o})()}];var te=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(pe),WV]})}return o})();var De=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,te]})}return o})();export{De as DocPoHttpRequestInterceptorModule};