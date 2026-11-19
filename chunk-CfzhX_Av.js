import{h as Cn,m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,Da as kI,G as Nf,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,ua as ge,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var ee=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}`;successMessage=`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}`;statusOptions=[{label:`200 - Success`,value:`200`},{label:`401 - Error`,value:`401`}];headerParamOptions=[{label:`X-PO-No-Message`,value:`No-Message`},{label:`X-PO-No-Error`,value:`No-Error`}];apiSubscription;constructor(a){this.http=a}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.restore()}changeOption(){this.requestMessage=this.status===`200`?this.successMessage:this.errorMessage}getParam(){return this.headerParam===`No-Message`?{"X-PO-No-Message":`true`}:this.headerParam===`No-Error`?{"X-PO-No-Error":`true`}:{}}processRequest(){let a=this.getParam(),i=JSON.parse(this.requestMessage),r={status:this.status||``};this.apiSubscription=this.http.post(`https://po-sample-api.onrender.com/v1/messages`,i,{headers:a,params:r}).subscribe()}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status=`200`}static ɵfac=function(i){return new(i||n)(I(kI))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-http-interceptor-labs`]],standalone:!1,decls:15,vars:5,consts:[[`requestForm`,`ngForm`],[1,`po-text-color-neutral-dark-40`],[`p-height`,`330`,`p-theme`,`vs-dark`,3,`ngModelChange`,`ngModel`],[1,`po-row`],[`name`,`status`,`p-label`,`Http Status`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`headerParam`,`p-label`,`Disables Notifications`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Process Request`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,r){if(i&1){let h=YO();Qc(0,`h2`),Sk(1,`Process request with Http Interceptor`),Kg(),Qc(2,`p`,1),Sk(3,`Edit response object by server with pattern expected by Http Interceptor:`),Kg(),Qc(4,`po-code-editor`,2),z0(),Kb(`ngModelChange`,function(p){return B_(h),Tk(r.requestMessage,p)||(r.requestMessage=p),U_(p)}),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0)(8,`div`,3)(9,`po-radio-group`,4),z0(),Kb(`ngModelChange`,function(p){return B_(h),Tk(r.status,p)||(r.status=p),U_(p)}),vt(`p-change`,function(){return r.changeOption()}),Kg(),Qc(10,`po-radio-group`,5),z0(),Kb(`ngModelChange`,function(p){return B_(h),Tk(r.headerParam,p)||(r.headerParam=p),U_(p)}),Kg()(),Qc(11,`div`,6)(12,`po-button`,7),vt(`p-click`,function(){return r.processRequest()}),Kg()(),Qc(13,`div`,6)(14,`po-button`,8),vt(`p-click`,function(){return r.restore()}),Kg()()()}i&2&&(wg(4),Yb(`ngModel`,r.requestMessage),W0(),wg(5),Yb(`ngModel`,r.status),Rb(`p-options`,r.statusOptions),W0(),wg(),Yb(`ngModel`,r.headerParam),Rb(`p-options`,r.headerParamOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,Zte,Cn],encapsulation:2,changeDetection:1})}return n})();var ae=n=>({"docs-sample-code-tabs":n});var te=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-http-interceptor-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-http-interceptor-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-http-interceptor-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-http-interceptor-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,r){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Http Interceptor Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return r.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-http-interceptor-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<h2>Process request with Http Interceptor</h2>
<p class="po-text-color-neutral-dark-40">Edit response object by server with pattern expected by Http Interceptor:</p>

<po-code-editor [(ngModel)]="requestMessage" p-height="330" p-theme="vs-dark"> </po-code-editor>

<po-divider />

<form #requestForm="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="status"
      [(ngModel)]="status"
      p-label="Http Status"
      [p-options]="statusOptions"
      (p-change)="changeOption()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="headerParam"
      [(ngModel)]="headerParam"
      p-label="Disables Notifications"
      [p-options]="headerParamOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Process Request" (p-click)="processRequest()"> </po-button>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-http-interceptor-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sample-po-http-interceptor-labs',
  templateUrl: './sample-po-http-interceptor-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHttpInterceptorLabsComponent implements OnDestroy, OnInit {
  headerParam: string;
  requestMessage: string;
  status: string;

  errorMessage = \`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}\`;

  successMessage = \`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}\`;

  readonly statusOptions: Array<PoRadioGroupOption> = [
    { label: '200 - Success', value: '200' },
    { label: '401 - Error', value: '401' }
  ];

  readonly headerParamOptions: Array<PoRadioGroupOption> = [
    { label: 'X-PO-No-Message', value: 'No-Message' },
    { label: 'X-PO-No-Error', value: 'No-Error' }
  ];

  private apiSubscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnDestroy() {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.restore();
  }

  changeOption() {
    this.requestMessage = this.status === '200' ? this.successMessage : this.errorMessage;
  }

  getParam() {
    return this.headerParam === 'No-Message'
      ? { 'X-PO-No-Message': 'true' }
      : this.headerParam === 'No-Error'
        ? { 'X-PO-No-Error': 'true' }
        : {};
  }

  processRequest() {
    const headers = this.getParam();
    const body = JSON.parse(this.requestMessage);
    const params = { status: this.status || '' };

    this.apiSubscription = this.http
      .post(\`https://po-sample-api.onrender.com/v1/messages\`, body, { headers, params })
      .subscribe();
  }

  restore() {
    this.headerParam = undefined;
    this.requestMessage = this.successMessage;
    this.status = '200';
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-http-interceptor-labs`),Kg(),vu(25,`hr`)),i&2&&(wg(5),gk(`po-icon `+r.sampleCodeButtonIcon),wg(),tm(` `,r.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ae,r.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ee],encapsulation:2,changeDetection:1})}return n})();var oe=(()=>{class n{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-http-interceptor-doc`]],standalone:!1,decls:184,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-http-interceptor-service`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`]],template:function(i,r){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoHttpInterceptorModule } from '@po-ui/ng-components';`),Kg()(),vu(4,`div`,2),Qc(5,`h3`,3),Sk(6,`Services`),Kg(),Qc(7,`h4`,4)(8,`code`,5),Sk(9,`PoHttpInterceptorService`),Kg()(),Qc(10,`div`,2)(11,`p`),Sk(12,`O `),Qc(13,`em`),Sk(14,`interceptor`),Kg(),Sk(15,` tem a finalidade de exibir notificações com mensagens na tela, baseado nas respostas das requisições HTTP.`),Kg(),Qc(16,`p`),Sk(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),Kg(),Qc(18,`h2`),Sk(19,`Configuração`),Kg(),Qc(20,`p`),Sk(21,`Para o correto funcionamento do interceptor `),Qc(22,`code`),Sk(23,`po-http-interceptor`),Kg(),Sk(24,`, é necessário configurar o `),Qc(25,`code`),Sk(26,`HttpClient`),Kg(),Sk(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Qc(28,`code`),Sk(29,`provideHttpClient(withInterceptorsFromDi())`),Kg(),Sk(30,`.`),Kg(),Qc(31,`h3`),Sk(32,`1) NgModule`),Kg(),Qc(33,`p`),Sk(34,`No módulo principal da aplicação (geralmente `),Qc(35,`code`),Sk(36,`AppModule`),Kg(),Sk(37,`), configure o `),Qc(38,`code`),Sk(39,`HttpClient`),Kg(),Sk(40,`,
como no exemplo abaixo:`),Kg(),Qc(41,`pre`)(42,`code`),Sk(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
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
`),Kg()(),Qc(44,`p`),Sk(45,`Ao importar o módulo `),Qc(46,`code`),Sk(47,`PoModule`),Kg(),Sk(48,` na aplicação, o `),Qc(49,`code`),Sk(50,`po-http-interceptor`),Kg(),Sk(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),Kg(),Qc(52,`h3`),Sk(53,`2) Standalone`),Kg(),Qc(54,`p`),Sk(55,`No arquivo contendo a configuração da aplicação (geralmente `),Qc(56,`code`),Sk(57,`src/app/app.config.ts`),Kg(),Sk(58,`), adicione os providers e configure o `),Qc(59,`code`),Sk(60,`HttpClient`),Kg(),Sk(61,`,
como no exemplo abaixo:`),Kg(),Qc(62,`pre`)(63,`code`),Sk(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoHttpInterceptorModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      PoHttpInterceptorModule
    ]),
    ...
  ]
};
`),Kg()(),Qc(65,`h2`),Sk(66,`Como usar`),Kg(),Qc(67,`p`),Sk(68,`Ao realizar requisições utilize o `),Qc(69,`code`),Sk(70,`HttpClient`),Kg(),Sk(71,`, conforme exemplo abaixo:`),Kg(),Qc(72,`pre`)(73,`code`),Sk(74,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/api/users');
  }

  ...

}
`),Kg()(),Qc(75,`p`),Sk(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),Kg(),Qc(77,`h3`),Sk(78,`Estrutura das mensagens`),Kg(),Qc(79,`h4`),Sk(80,`Mensagens de sucesso `),Qc(81,`code`),Sk(82,`2xx`),Kg()(),Qc(83,`p`),Sk(84,`Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade `),Qc(85,`code`),Sk(86,`_messages`),Kg(),Sk(87,` no objeto de retorno.
Por exemplo:`),Kg(),Qc(88,`pre`)(89,`code`),Sk(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),Kg()(),Qc(91,`h4`),Sk(92,`Mensagens de erro `),Qc(93,`code`),Sk(94,`4xx`),Kg(),Sk(95,` ou `),Qc(96,`code`),Sk(97,`5xx`),Kg()(),Qc(98,`p`),Sk(99,`Ao retornar erro, o objeto não necessita ter `),Qc(100,`code`),Sk(101,`_messages`),Kg(),Sk(102,`, deve-se retornar o objeto diretamente:`),Kg(),Qc(103,`pre`)(104,`code`),Sk(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),Kg()(),Qc(106,`p`),Sk(107,`Também é possível informar as seguintes propriedades:`),Kg(),Qc(108,`ul`)(109,`li`)(110,`code`),Sk(111,`helpUrl`),Kg(),Sk(112,`: link para a documentação do erro;`),Qc(113,`ul`)(114,`li`),Sk(115,`Caso for informado, será exibido uma ação de "Ajuda" na notificação, para isso não deverá ter a propriedade `),Qc(116,`code`),Sk(117,`detailedMessage`),Kg(),Sk(118,`.`),Kg()()(),Qc(119,`li`)(120,`code`),Sk(121,`type`),Kg(),Sk(122,`: É possível informar `),Qc(123,`code`),Sk(124,`error`),Kg(),Sk(125,`, `),Qc(126,`code`),Sk(127,`warning`),Kg(),Sk(128,` e `),Qc(129,`code`),Sk(130,`information`),Kg(),Sk(131,`, sendo `),Qc(132,`code`),Sk(133,`error`),Kg(),Sk(134,` o valor padrão.`),Kg(),Qc(135,`li`)(136,`code`),Sk(137,`details`),Kg(),Sk(138,`: Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal.`),Kg(),Qc(139,`li`)(140,`code`),Sk(141,`detailTitle`),Kg(),Sk(142,`: caso for informado, será apresentado como título dos detalhes substituindo o padrão `),Qc(143,`code`),Sk(144,`code - message`),Kg()()(),Qc(145,`blockquote`)(146,`p`),Sk(147,`Veja o `),Qc(148,`a`,6),Sk(149,`Guia de implementação de APIs`),Kg(),Sk(150,` para mais detalhes sobre a estrutura das mensagens.`),Kg()(),Qc(151,`h3`),Sk(152,`Cabeçalho`),Kg(),Qc(153,`p`),Sk(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Qc(155,`code`),Sk(156,`true`),Kg(),Sk(157,`:`),Kg(),Qc(158,`ul`)(159,`li`)(160,`p`)(161,`code`),Sk(162,`X-PO-No-Message`),Kg(),Sk(163,`: Não exibe notificações de erro e/ou sucesso.`),Kg()(),Qc(164,`li`)(165,`p`)(166,`code`),Sk(167,`X-PO-No-Error`),Kg(),Sk(168,`: Não mostra notificações de erro com códigos `),Qc(169,`code`),Sk(170,`4xx`),Kg(),Sk(171,` e `),Qc(172,`code`),Sk(173,`5xx`),Kg(),Sk(174,`.`),Kg()()(),Qc(175,`pre`)(176,`code`),Sk(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),Kg()(),Qc(178,`blockquote`)(179,`p`),Sk(180,`Após a validação no `),Qc(181,`em`),Sk(182,`interceptor`),Kg(),Sk(183,`, os parâmetros serão removidos do cabeçalho da requisição. `),Kg()()()())},encapsulation:2,changeDetection:1})}return n})();function le(n,de){if(n&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let r=ek();return U_(r.changeTab(`web`))}),vu(1,`sample-po-http-interceptor-labs-view`),Kg()}if(n&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var me=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Http Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,r){i&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,le,2,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return r.changeTab(`doc`)}),vu(4,`sample-po-http-interceptor-doc`),Kg()()()),i&2&&(Rb(`p-actions`,r.actions),wg(2),VO(r.hidePoWebSample?-1:2),wg(),Rb(`p-active`,r.activeTab===`doc`))},dependencies:[Mze,tre,are,te,oe],encapsulation:2,changeDetection:1})}return n})()}];var ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(me),GV]})}return n})();var Fe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,ie]})}return n})();export{Fe as DocPoHttpInterceptorModule};