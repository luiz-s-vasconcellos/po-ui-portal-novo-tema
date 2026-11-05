import{B as L4,Ca as oI,Cn as oi,Ct as Yoe,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,Ha as v_,Ia as sb,Ii as b,La as uO,Mr as I1,Na as r0,Ra as ue,Sa as o0,Si as Xx,Xt as ere,Ya as wg,Za as xF,ai as Sn,dr as DO,gr as Dx,ht as U4,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,nr as Ag,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,t as $5,ui as UE,va as mt,wr as Fx,xa as nu,xi as Ww}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var Y=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url=``;subscription;apiSubscription;constructor(r,i){this.http=r,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(r=>{this.pendingRequests=r})}getRequest(){let r={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:r}).subscribe(()=>{})}static ɵfac=function(i){return new(i||o)(b(Ww),b($5))};static ɵcmp=Zn({type:o,selectors:[[`sample-po-http-request-interceptor-labs`]],standalone:!1,decls:9,vars:5,consts:[[1,`po-row`],[`p-label`,`Pending Requests`,1,`po-lg-12`,3,`p-value`],[`name`,`url`,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`URL`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`countPendingRequestHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-No-Count-Pending-Requests`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`screenLockHeaderParam`,`p-help`,`Enable/disable the sent param in header of request`,`p-label`,`X-PO-Screen-Lock`,`p-label-off`,`Disable`,`p-label-on`,`Enable`,`ngDefaultControl`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Get request`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,a){i&1&&(jc(0,`div`,0),nu(1,`po-info`,1),wg(),jc(2,`div`,0)(3,`po-input`,2),r0(),ab(`ngModelChange`,function(l){return uO(a.url,l)||(a.url=l),l}),wg()(),jc(4,`div`,0)(5,`po-switch`,3),r0(),ab(`ngModelChange`,function(l){return uO(a.countPendingRequestHeaderParam,l)||(a.countPendingRequestHeaderParam=l),l}),wg(),jc(6,`po-switch`,4),r0(),ab(`ngModelChange`,function(l){return uO(a.screenLockHeaderParam,l)||(a.screenLockHeaderParam=l),l}),wg()(),jc(7,`div`,0)(8,`po-button`,5),mt(`p-click`,function(){return a.getRequest()}),wg()()),i&2&&(rg(),UE(`p-value`,a.pendingRequests),rg(2),sb(`ngModel`,a.url),o0(),rg(2),sb(`ngModel`,a.countPendingRequestHeaderParam),o0(),rg(),sb(`ngModel`,a.screenLockHeaderParam),o0(),rg(2),UE(`p-disabled`,!a.url))},dependencies:[oI,SK,xF,oi,U4,L4,Yoe],encapsulation:2,changeDetection:1})}return o})();var oe=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-http-request-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Http Request Interceptor Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-http-request-interceptor-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-http-request-interceptor-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-http-request-interceptor-labs`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,oe,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Y],encapsulation:2,changeDetection:1})}return o})();var $=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-http-request-interceptor-doc`]],standalone:!1,decls:97,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`]],template:function(i,a){i&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoHttpRequestModule } from '@po-ui/ng-components';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),lO(6,`Services`),wg(),jc(7,`h4`,4)(8,`code`,5),lO(9,`PoHttpRequestInterceptorService`),wg()(),jc(10,`div`,2)(11,`p`),lO(12,`O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.`),wg(),jc(13,`p`),lO(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),jc(15,`code`),lO(16,`X-PO-No-Count-Pending-Requests`),wg(),lO(17,`. Para isso deve ser informado no cabeçalho da requisição com o valor `),jc(18,`code`),lO(19,`'true'`),wg(),lO(20,`,
por exemplo:`),wg(),jc(21,`pre`)(22,`code`),lO(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),wg()(),jc(24,`p`),lO(25,`Para obter a quantidade de requisições pendentes, deve inscrever-se no método `),jc(26,`code`),lO(27,`getCountPendingRequests`),wg(),lO(28,` do
servi\xE7o `),jc(29,`code`),lO(30,`PoHttpRequestInterceptorService`),wg(),lO(31,`, com isso, ao realizar requisições utilizando `),jc(32,`code`),lO(33,`HttpClient`),wg(),lO(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),wg(),jc(35,`p`),lO(36,`Também existe a possibildade de travar a tela e mostrar uma imagem de `),jc(37,`em`),lO(38,`loading`),wg(),lO(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),jc(40,`code`),lO(41,`X-PO-Screen-Lock`),wg(),lO(42,` no cabeçalho da requisição com valor `),jc(43,`code`),lO(44,`'true'`),wg(),lO(45,`.`),wg(),jc(46,`p`),lO(47,`por exemplo:`),wg(),jc(48,`pre`)(49,`code`),lO(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),wg()(),jc(51,`blockquote`)(52,`p`),lO(53,`Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.`),wg()(),jc(54,`h2`),lO(55,`Configuração`),wg(),jc(56,`p`),lO(57,`É necessário configurar o `),jc(58,`code`),lO(59,`HttpClient`),wg(),lO(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),jc(61,`code`),lO(62,`provideHttpClient(withInterceptorsFromDi())`),wg(),lO(63,`.`),wg(),jc(64,`h3`),lO(65,`1) NgModule`),wg(),jc(66,`pre`)(67,`code`),lO(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),wg()(),jc(69,`p`),lO(70,`Ao importar o módulo `),jc(71,`code`),lO(72,`PoModule`),wg(),lO(73,` na aplicação, o `),jc(74,`code`),lO(75,`po-http-request-interceptor`),wg(),lO(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),wg(),jc(77,`h3`),lO(78,`2) Standalone`),wg(),jc(79,`p`),lO(80,`No arquivo contendo a configuração da aplicação (geralmente `),jc(81,`code`),lO(82,`src/app/app.config.ts`),wg(),lO(83,`), adicione os providers e configure o `),jc(84,`code`),lO(85,`HttpClient`),wg(),lO(86,`,
como no exemplo abaixo:`),wg(),jc(87,`pre`)(88,`code`),lO(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),wg()(),jc(90,`h2`),lO(91,`Como usar`),wg(),jc(92,`p`),lO(93,`Segue abaixo um exemplo de uso:`),wg(),jc(94,`pre`)(95,`code`),lO(96,`import { HttpClient } from '@angular/common/http';

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
`),wg()()()())},encapsulation:2,changeDetection:1})}return o})();function ae(o,se){if(o&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let a=Fx();return __(a.changeTab(`web`))}),nu(1,`sample-po-http-request-interceptor-labs-view`),wg()}if(o&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var pe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Http Request Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,ae,2,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return a.changeTab(`doc`)}),nu(4,`sample-po-http-request-interceptor-doc`),wg()()()),i&2&&(UE(`p-actions`,a.actions),rg(2),Dx(a.hidePoWebSample?-1:2),rg(),UE(`p-active`,a.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Z,$],encapsulation:2,changeDetection:1})}return o})()}];var te=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[I1.forChild(pe),I1]})}return o})();var De=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[M,te]})}return o})();export{De as DocPoHttpRequestInterceptorModule};