import{$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Yi as eF,da as kI,di as RZ,ea as ge,er as An,fi as Rb,gi as Tk,hi as TZ,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,va as nk,vn as oi,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,r as Cn,t as M}from"./main-3VBI2GXJ.js";var $=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:`200 - Success`,value:`200`},{label:`401 - Error`,value:`401`}];headerParamOptions=[{label:`X-PO-No-Message`,value:`No-Message`},{label:`X-PO-No-Error`,value:`No-Error`}];apiSubscription;constructor(r){this.http=r}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.restore()}changeOption(){this.requestMessage=this.status===`200`?this.successMessage:this.errorMessage}getParam(){return this.headerParam===`No-Message`?{"X-PO-No-Message":`true`}:this.headerParam===`No-Error`?{"X-PO-No-Error":`true`}:{}}processRequest(){let r=this.getParam(),i=JSON.parse(this.requestMessage),a={status:this.status||``};this.apiSubscription=this.http.post(`https://po-sample-api.onrender.com/v1/messages`,i,{headers:r,params:a}).subscribe()}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status=`200`}static ɵfac=function(i){return new(i||n)(I(kI))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-http-interceptor-labs`]],standalone:!1,decls:15,vars:5,consts:[[`requestForm`,`ngForm`],[1,`po-text-color-neutral-dark-40`],[`p-height`,`330`,`p-theme`,`vs-dark`,3,`ngModelChange`,`ngModel`],[1,`po-row`],[`name`,`status`,`p-label`,`Http Status`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`headerParam`,`p-label`,`Disables Notifications`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Process Request`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let h=ZO();Jc(0,`h2`),Tk(1,`Process request with Http Interceptor`),Zg(),Jc(2,`p`,1),Tk(3,`Edit response object by server with pattern expected by Http Interceptor:`),Zg(),Jc(4,`po-code-editor`,2),W0(),Kb(`ngModelChange`,function(p){return U_(h),Ak(a.requestMessage,p)||(a.requestMessage=p),H_(p)}),Zg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`div`,3)(9,`po-radio-group`,4),W0(),Kb(`ngModelChange`,function(p){return U_(h),Ak(a.status,p)||(a.status=p),H_(p)}),vt(`p-change`,function(){return a.changeOption()}),Zg(),Jc(10,`po-radio-group`,5),W0(),Kb(`ngModelChange`,function(p){return U_(h),Ak(a.headerParam,p)||(a.headerParam=p),H_(p)}),Zg()(),Jc(11,`div`,6)(12,`po-button`,7),vt(`p-click`,function(){return a.processRequest()}),Zg()(),Jc(13,`div`,6)(14,`po-button`,8),vt(`p-click`,function(){return a.restore()}),Zg()()()}i&2&&(Ig(4),Yb(`ngModel`,a.requestMessage),Y0(),Ig(5),Yb(`ngModel`,a.status),Rb(`p-options`,a.statusOptions),Y0(),Ig(),Yb(`ngModel`,a.headerParam),Rb(`p-options`,a.headerParamOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,Zte,Cn],encapsulation:2,changeDetection:1})}return n})();var ae=n=>({"docs-sample-code-tabs":n});var ee=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-http-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Http Interceptor Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return a.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-http-interceptor-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<h2>Process request with Http Interceptor</h2>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-http-interceptor-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-http-interceptor-labs`),Zg(),_u(23,`hr`)),i&2&&(Ig(5),yk(`po-icon `+a.sampleCodeButtonIcon),Ig(),nm(` `,a.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ae,a.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,$],encapsulation:2,changeDetection:1})}return n})();var te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-http-interceptor-doc`]],standalone:!1,decls:184,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoHttpInterceptorModule } from '@po-ui/ng-components';`),Zg()(),_u(4,`div`,2),Jc(5,`h3`,3),Tk(6,`Services`),Zg(),Jc(7,`h4`,4)(8,`code`,5),Tk(9,`PoHttpInterceptorService`),Zg()(),Jc(10,`div`,2)(11,`p`),Tk(12,`O `),Jc(13,`em`),Tk(14,`interceptor`),Zg(),Tk(15,` tem a finalidade de exibir notificações com mensagens na tela, baseado nas respostas das requisições HTTP.`),Zg(),Jc(16,`p`),Tk(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),Zg(),Jc(18,`h2`),Tk(19,`Configuração`),Zg(),Jc(20,`p`),Tk(21,`Para o correto funcionamento do interceptor `),Jc(22,`code`),Tk(23,`po-http-interceptor`),Zg(),Tk(24,`, é necessário configurar o `),Jc(25,`code`),Tk(26,`HttpClient`),Zg(),Tk(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Jc(28,`code`),Tk(29,`provideHttpClient(withInterceptorsFromDi())`),Zg(),Tk(30,`.`),Zg(),Jc(31,`h3`),Tk(32,`1) NgModule`),Zg(),Jc(33,`p`),Tk(34,`No módulo principal da aplicação (geralmente `),Jc(35,`code`),Tk(36,`AppModule`),Zg(),Tk(37,`), configure o `),Jc(38,`code`),Tk(39,`HttpClient`),Zg(),Tk(40,`,
como no exemplo abaixo:`),Zg(),Jc(41,`pre`)(42,`code`),Tk(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),Zg()(),Jc(44,`p`),Tk(45,`Ao importar o módulo `),Jc(46,`code`),Tk(47,`PoModule`),Zg(),Tk(48,` na aplicação, o `),Jc(49,`code`),Tk(50,`po-http-interceptor`),Zg(),Tk(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),Zg(),Jc(52,`h3`),Tk(53,`2) Standalone`),Zg(),Jc(54,`p`),Tk(55,`No arquivo contendo a configuração da aplicação (geralmente `),Jc(56,`code`),Tk(57,`src/app/app.config.ts`),Zg(),Tk(58,`), adicione os providers e configure o `),Jc(59,`code`),Tk(60,`HttpClient`),Zg(),Tk(61,`,
como no exemplo abaixo:`),Zg(),Jc(62,`pre`)(63,`code`),Tk(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),Zg()(),Jc(65,`h2`),Tk(66,`Como usar`),Zg(),Jc(67,`p`),Tk(68,`Ao realizar requisições utilize o `),Jc(69,`code`),Tk(70,`HttpClient`),Zg(),Tk(71,`, conforme exemplo abaixo:`),Zg(),Jc(72,`pre`)(73,`code`),Tk(74,`import { HttpClient } from '@angular/common/http';

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
`),Zg()(),Jc(75,`p`),Tk(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),Zg(),Jc(77,`h3`),Tk(78,`Estrutura das mensagens`),Zg(),Jc(79,`h4`),Tk(80,`Mensagens de sucesso `),Jc(81,`code`),Tk(82,`2xx`),Zg()(),Jc(83,`p`),Tk(84,`Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade `),Jc(85,`code`),Tk(86,`_messages`),Zg(),Tk(87,` no objeto de retorno.
Por exemplo:`),Zg(),Jc(88,`pre`)(89,`code`),Tk(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),Zg()(),Jc(91,`h4`),Tk(92,`Mensagens de erro `),Jc(93,`code`),Tk(94,`4xx`),Zg(),Tk(95,` ou `),Jc(96,`code`),Tk(97,`5xx`),Zg()(),Jc(98,`p`),Tk(99,`Ao retornar erro, o objeto não necessita ter `),Jc(100,`code`),Tk(101,`_messages`),Zg(),Tk(102,`, deve-se retornar o objeto diretamente:`),Zg(),Jc(103,`pre`)(104,`code`),Tk(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),Zg()(),Jc(106,`p`),Tk(107,`Também é possível informar as seguintes propriedades:`),Zg(),Jc(108,`ul`)(109,`li`)(110,`code`),Tk(111,`helpUrl`),Zg(),Tk(112,`: link para a documentação do erro;`),Jc(113,`ul`)(114,`li`),Tk(115,`Caso for informado, será exibido uma ação de "Ajuda" na notificação, para isso não deverá ter a propriedade `),Jc(116,`code`),Tk(117,`detailedMessage`),Zg(),Tk(118,`.`),Zg()()(),Jc(119,`li`)(120,`code`),Tk(121,`type`),Zg(),Tk(122,`: É possível informar `),Jc(123,`code`),Tk(124,`error`),Zg(),Tk(125,`, `),Jc(126,`code`),Tk(127,`warning`),Zg(),Tk(128,` e `),Jc(129,`code`),Tk(130,`information`),Zg(),Tk(131,`, sendo `),Jc(132,`code`),Tk(133,`error`),Zg(),Tk(134,` o valor padrão.`),Zg(),Jc(135,`li`)(136,`code`),Tk(137,`details`),Zg(),Tk(138,`: Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal.`),Zg(),Jc(139,`li`)(140,`code`),Tk(141,`detailTitle`),Zg(),Tk(142,`: caso for informado, será apresentado como título dos detalhes substituindo o padrão `),Jc(143,`code`),Tk(144,`code - message`),Zg()()(),Jc(145,`blockquote`)(146,`p`),Tk(147,`Veja o `),Jc(148,`a`,6),Tk(149,`Guia de implementação de APIs`),Zg(),Tk(150,` para mais detalhes sobre a estrutura das mensagens.`),Zg()(),Jc(151,`h3`),Tk(152,`Cabeçalho`),Zg(),Jc(153,`p`),Tk(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Jc(155,`code`),Tk(156,`true`),Zg(),Tk(157,`:`),Zg(),Jc(158,`ul`)(159,`li`)(160,`p`)(161,`code`),Tk(162,`X-PO-No-Message`),Zg(),Tk(163,`: Não exibe notificações de erro e/ou sucesso.`),Zg()(),Jc(164,`li`)(165,`p`)(166,`code`),Tk(167,`X-PO-No-Error`),Zg(),Tk(168,`: Não mostra notificações de erro com códigos `),Jc(169,`code`),Tk(170,`4xx`),Zg(),Tk(171,` e `),Jc(172,`code`),Tk(173,`5xx`),Zg(),Tk(174,`.`),Zg()()(),Jc(175,`pre`)(176,`code`),Tk(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),Zg()(),Jc(178,`blockquote`)(179,`p`),Tk(180,`Após a validação no `),Jc(181,`em`),Tk(182,`interceptor`),Zg(),Tk(183,`, os parâmetros serão removidos do cabeçalho da requisição. `),Zg()()()())},encapsulation:2,changeDetection:1})}return n})();function pe(n,me){if(n&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let a=nk();return H_(a.changeTab(`web`))}),_u(1,`sample-po-http-interceptor-labs-view`),Zg()}if(n&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var le=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Http Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,pe,2,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return a.changeTab(`doc`)}),_u(4,`sample-po-http-interceptor-doc`),Zg()()()),i&2&&(Rb(`p-actions`,a.actions),Ig(2),BO(a.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,a.activeTab===`doc`))},dependencies:[Mze,tre,are,ee,te],encapsulation:2,changeDetection:1})}return n})()}];var ne=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[WV.forChild(le),WV]})}return n})();var Te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,ne]})}return n})();export{Te as DocPoHttpInterceptorModule};