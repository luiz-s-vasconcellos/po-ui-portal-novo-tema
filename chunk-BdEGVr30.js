import{h as Cn,m as P,p as M}from"./main-6GCKJMTQ.js";import{Ar as G0,At as Zte,Ba as p,Br as Jn,Fr as H_,G as Nf,Hr as KO,Ki as Zb,Li as WL,Lr as I,Pn as tre,Pt as are,Si as Rk,Ti as TZ,Ur as Kb,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,ar as Ab,bn as oi,co as wg,da as ge,eo as tk,jr as GV,ki as U_,oo as vt,or as An,pi as QL,qr as LO,ra as de,si as PI,ti as NZ,xi as RZ,ya as jO,zr as Jc}from"./chunk-t_lpM8Oc.js";var Q=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:`200 - Success`,value:`200`},{label:`401 - Error`,value:`401`}];headerParamOptions=[{label:`X-PO-No-Message`,value:`No-Message`},{label:`X-PO-No-Error`,value:`No-Error`}];apiSubscription;constructor(r){this.http=r}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.restore()}changeOption(){this.requestMessage=this.status===`200`?this.successMessage:this.errorMessage}getParam(){return this.headerParam===`No-Message`?{"X-PO-No-Message":`true`}:this.headerParam===`No-Error`?{"X-PO-No-Error":`true`}:{}}processRequest(){let r=this.getParam(),i=JSON.parse(this.requestMessage),a={status:this.status||``};this.apiSubscription=this.http.post(`https://po-sample-api.onrender.com/v1/messages`,i,{headers:r,params:a}).subscribe()}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status=`200`}static ɵfac=function(i){return new(i||n)(I(PI))};static ɵcmp=Jn({type:n,selectors:[[`sample-po-http-interceptor-labs`]],standalone:!1,decls:15,vars:5,consts:[[`requestForm`,`ngForm`],[1,`po-text-color-neutral-dark-40`],[`p-height`,`330`,`p-theme`,`vs-dark`,3,`ngModelChange`,`ngModel`],[1,`po-row`],[`name`,`status`,`p-label`,`Http Status`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`headerParam`,`p-label`,`Disables Notifications`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Process Request`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let w=KO();Jc(0,`h2`),Mk(1,`Process request with Http Interceptor`),Kg(),Jc(2,`p`,1),Mk(3,`Edit response object by server with pattern expected by Http Interceptor:`),Kg(),Jc(4,`po-code-editor`,2),G0(),Zb(`ngModelChange`,function(s){return U_(w),Rk(a.requestMessage,s)||(a.requestMessage=s),H_(s)}),Kg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`div`,3)(9,`po-radio-group`,4),G0(),Zb(`ngModelChange`,function(s){return U_(w),Rk(a.status,s)||(a.status=s),H_(s)}),vt(`p-change`,function(){return a.changeOption()}),Kg(),Jc(10,`po-radio-group`,5),G0(),Zb(`ngModelChange`,function(s){return U_(w),Rk(a.headerParam,s)||(a.headerParam=s),H_(s)}),Kg()(),Jc(11,`div`,6)(12,`po-button`,7),vt(`p-click`,function(){return a.processRequest()}),Kg()(),Jc(13,`div`,6)(14,`po-button`,8),vt(`p-click`,function(){return a.restore()}),Kg()()()}i&2&&(wg(4),Kb(`ngModel`,a.requestMessage),q0(),wg(5),Kb(`ngModel`,a.status),Ab(`p-options`,a.statusOptions),q0(),wg(),Kb(`ngModel`,a.headerParam),Ab(`p-options`,a.headerParamOptions),q0())},dependencies:[NZ,TZ,RZ,QL,WL,oi,Nf,Zte,Cn],encapsulation:2,changeDetection:1})}return n})();var Y=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-http-interceptor-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-http-interceptor-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-http-interceptor-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-http-interceptor-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Http Interceptor Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-http-interceptor-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-http-interceptor-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<h2>Process request with Http Interceptor</h2>
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
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-http-interceptor-labs.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Q],encapsulation:2,changeDetection:1})}return n})();var Z=(()=>{class n{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-http-interceptor-doc`]],standalone:!1,decls:184,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-http-interceptor-service`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoHttpInterceptorModule } from '@po-ui/ng-components';`),Kg()(),_u(4,`div`,2),Jc(5,`h3`,3),Mk(6,`Services`),Kg(),Jc(7,`h4`,4)(8,`code`,5),Mk(9,`PoHttpInterceptorService`),Kg()(),Jc(10,`div`,2)(11,`p`),Mk(12,`O `),Jc(13,`em`),Mk(14,`interceptor`),Kg(),Mk(15,` tem a finalidade de exibir notificações com mensagens na tela, baseado nas respostas das requisições HTTP.`),Kg(),Jc(16,`p`),Mk(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),Kg(),Jc(18,`h2`),Mk(19,`Configuração`),Kg(),Jc(20,`p`),Mk(21,`Para o correto funcionamento do interceptor `),Jc(22,`code`),Mk(23,`po-http-interceptor`),Kg(),Mk(24,`, é necessário configurar o `),Jc(25,`code`),Mk(26,`HttpClient`),Kg(),Mk(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Jc(28,`code`),Mk(29,`provideHttpClient(withInterceptorsFromDi())`),Kg(),Mk(30,`.`),Kg(),Jc(31,`h3`),Mk(32,`1) NgModule`),Kg(),Jc(33,`p`),Mk(34,`No módulo principal da aplicação (geralmente `),Jc(35,`code`),Mk(36,`AppModule`),Kg(),Mk(37,`), configure o `),Jc(38,`code`),Mk(39,`HttpClient`),Kg(),Mk(40,`,
como no exemplo abaixo:`),Kg(),Jc(41,`pre`)(42,`code`),Mk(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),Kg()(),Jc(44,`p`),Mk(45,`Ao importar o módulo `),Jc(46,`code`),Mk(47,`PoModule`),Kg(),Mk(48,` na aplicação, o `),Jc(49,`code`),Mk(50,`po-http-interceptor`),Kg(),Mk(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),Kg(),Jc(52,`h3`),Mk(53,`2) Standalone`),Kg(),Jc(54,`p`),Mk(55,`No arquivo contendo a configuração da aplicação (geralmente `),Jc(56,`code`),Mk(57,`src/app/app.config.ts`),Kg(),Mk(58,`), adicione os providers e configure o `),Jc(59,`code`),Mk(60,`HttpClient`),Kg(),Mk(61,`,
como no exemplo abaixo:`),Kg(),Jc(62,`pre`)(63,`code`),Mk(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),Kg()(),Jc(65,`h2`),Mk(66,`Como usar`),Kg(),Jc(67,`p`),Mk(68,`Ao realizar requisições utilize o `),Jc(69,`code`),Mk(70,`HttpClient`),Kg(),Mk(71,`, conforme exemplo abaixo:`),Kg(),Jc(72,`pre`)(73,`code`),Mk(74,`import { HttpClient } from '@angular/common/http';

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
`),Kg()(),Jc(75,`p`),Mk(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),Kg(),Jc(77,`h3`),Mk(78,`Estrutura das mensagens`),Kg(),Jc(79,`h4`),Mk(80,`Mensagens de sucesso `),Jc(81,`code`),Mk(82,`2xx`),Kg()(),Jc(83,`p`),Mk(84,`Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade `),Jc(85,`code`),Mk(86,`_messages`),Kg(),Mk(87,` no objeto de retorno.
Por exemplo:`),Kg(),Jc(88,`pre`)(89,`code`),Mk(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),Kg()(),Jc(91,`h4`),Mk(92,`Mensagens de erro `),Jc(93,`code`),Mk(94,`4xx`),Kg(),Mk(95,` ou `),Jc(96,`code`),Mk(97,`5xx`),Kg()(),Jc(98,`p`),Mk(99,`Ao retornar erro, o objeto não necessita ter `),Jc(100,`code`),Mk(101,`_messages`),Kg(),Mk(102,`, deve-se retornar o objeto diretamente:`),Kg(),Jc(103,`pre`)(104,`code`),Mk(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),Kg()(),Jc(106,`p`),Mk(107,`Também é possível informar as seguintes propriedades:`),Kg(),Jc(108,`ul`)(109,`li`)(110,`code`),Mk(111,`helpUrl`),Kg(),Mk(112,`: link para a documentação do erro;`),Jc(113,`ul`)(114,`li`),Mk(115,`Caso for informado, será exibido uma ação de "Ajuda" na notificação, para isso não deverá ter a propriedade `),Jc(116,`code`),Mk(117,`detailedMessage`),Kg(),Mk(118,`.`),Kg()()(),Jc(119,`li`)(120,`code`),Mk(121,`type`),Kg(),Mk(122,`: É possível informar `),Jc(123,`code`),Mk(124,`error`),Kg(),Mk(125,`, `),Jc(126,`code`),Mk(127,`warning`),Kg(),Mk(128,` e `),Jc(129,`code`),Mk(130,`information`),Kg(),Mk(131,`, sendo `),Jc(132,`code`),Mk(133,`error`),Kg(),Mk(134,` o valor padrão.`),Kg(),Jc(135,`li`)(136,`code`),Mk(137,`details`),Kg(),Mk(138,`: Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal.`),Kg(),Jc(139,`li`)(140,`code`),Mk(141,`detailTitle`),Kg(),Mk(142,`: caso for informado, será apresentado como título dos detalhes substituindo o padrão `),Jc(143,`code`),Mk(144,`code - message`),Kg()()(),Jc(145,`blockquote`)(146,`p`),Mk(147,`Veja o `),Jc(148,`a`,6),Mk(149,`Guia de implementação de APIs`),Kg(),Mk(150,` para mais detalhes sobre a estrutura das mensagens.`),Kg()(),Jc(151,`h3`),Mk(152,`Cabeçalho`),Kg(),Jc(153,`p`),Mk(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Jc(155,`code`),Mk(156,`true`),Kg(),Mk(157,`:`),Kg(),Jc(158,`ul`)(159,`li`)(160,`p`)(161,`code`),Mk(162,`X-PO-No-Message`),Kg(),Mk(163,`: Não exibe notificações de erro e/ou sucesso.`),Kg()(),Jc(164,`li`)(165,`p`)(166,`code`),Mk(167,`X-PO-No-Error`),Kg(),Mk(168,`: Não mostra notificações de erro com códigos `),Jc(169,`code`),Mk(170,`4xx`),Kg(),Mk(171,` e `),Jc(172,`code`),Mk(173,`5xx`),Kg(),Mk(174,`.`),Kg()()(),Jc(175,`pre`)(176,`code`),Mk(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),Kg()(),Jc(178,`blockquote`)(179,`p`),Mk(180,`Após a validação no `),Jc(181,`em`),Mk(182,`interceptor`),Kg(),Mk(183,`, os parâmetros serão removidos do cabeçalho da requisição. `),Kg()()()())},encapsulation:2,changeDetection:1})}return n})();function ie(n,ae){if(n&1&&(Jc(0,`div`,1),_u(1,`sample-po-http-interceptor-labs-view`),Kg()),n&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var re=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;title=`Http Interceptor`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Http Interceptor · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0),LO(1,ie,2,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-http-interceptor-doc`),Kg()()),i&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,Y,Z],encapsulation:2,changeDetection:1})}return n})()}];var ee=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(re),GV]})}return n})();var _e=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,ee]})}return n})();export{_e as DocPoHttpInterceptorModule};