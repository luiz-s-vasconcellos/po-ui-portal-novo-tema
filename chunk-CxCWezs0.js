import{Cn as oi,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Mr as I1,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,ai as Sn,dr as DO,gr as Dx,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,xi as Ww,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,r as Cn,t as M}from"./main-CK5CTZT7.js";var $=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:`200 - Success`,value:`200`},{label:`401 - Error`,value:`401`}];headerParamOptions=[{label:`X-PO-No-Message`,value:`No-Message`},{label:`X-PO-No-Error`,value:`No-Error`}];apiSubscription;constructor(r){this.http=r}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.restore()}changeOption(){this.requestMessage=this.status===`200`?this.successMessage:this.errorMessage}getParam(){return this.headerParam===`No-Message`?{"X-PO-No-Message":`true`}:this.headerParam===`No-Error`?{"X-PO-No-Error":`true`}:{}}processRequest(){let r=this.getParam(),i=JSON.parse(this.requestMessage),a={status:this.status||``};this.apiSubscription=this.http.post(`https://po-sample-api.onrender.com/v1/messages`,i,{headers:r,params:a}).subscribe()}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status=`200`}static ɵfac=function(i){return new(i||n)(b(Ww))};static ɵcmp=Zn({type:n,selectors:[[`sample-po-http-interceptor-labs`]],standalone:!1,decls:15,vars:5,consts:[[`requestForm`,`ngForm`],[1,`po-text-color-neutral-dark-40`],[`p-height`,`330`,`p-theme`,`vs-dark`,3,`ngModelChange`,`ngModel`],[1,`po-row`],[`name`,`status`,`p-label`,`Http Status`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`headerParam`,`p-label`,`Disables Notifications`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Process Request`,1,`po-md-3`,3,`p-click`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let h=Ax();jc(0,`h2`),lO(1,`Process request with Http Interceptor`),wg(),jc(2,`p`,1),lO(3,`Edit response object by server with pattern expected by Http Interceptor:`),wg(),jc(4,`po-code-editor`,2),r0(),ab(`ngModelChange`,function(p){return v_(h),uO(a.requestMessage,p)||(a.requestMessage=p),__(p)}),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`div`,3)(9,`po-radio-group`,4),r0(),ab(`ngModelChange`,function(p){return v_(h),uO(a.status,p)||(a.status=p),__(p)}),mt(`p-change`,function(){return a.changeOption()}),wg(),jc(10,`po-radio-group`,5),r0(),ab(`ngModelChange`,function(p){return v_(h),uO(a.headerParam,p)||(a.headerParam=p),__(p)}),wg()(),jc(11,`div`,6)(12,`po-button`,7),mt(`p-click`,function(){return a.processRequest()}),wg()(),jc(13,`div`,6)(14,`po-button`,8),mt(`p-click`,function(){return a.restore()}),wg()()()}i&2&&(rg(4),sb(`ngModel`,a.requestMessage),o0(),rg(5),sb(`ngModel`,a.status),UE(`p-options`,a.statusOptions),o0(),rg(),sb(`ngModel`,a.headerParam),UE(`p-options`,a.headerParamOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,Gte,Cn],encapsulation:2,changeDetection:1})}return n})();var ae=n=>({"docs-sample-code-tabs":n});var ee=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-http-interceptor-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Http Interceptor Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-http-interceptor-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<h2>Process request with Http Interceptor</h2>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-http-interceptor-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-http-interceptor-labs`),wg(),nu(23,`hr`)),i&2&&(rg(5),Xx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ae,a.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,$],encapsulation:2,changeDetection:1})}return n})();var te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-http-interceptor-doc`]],standalone:!1,decls:184,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`]],template:function(i,a){i&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoHttpInterceptorModule } from '@po-ui/ng-components';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),lO(6,`Services`),wg(),jc(7,`h4`,4)(8,`code`,5),lO(9,`PoHttpInterceptorService`),wg()(),jc(10,`div`,2)(11,`p`),lO(12,`O `),jc(13,`em`),lO(14,`interceptor`),wg(),lO(15,` tem a finalidade de exibir notificações com mensagens na tela, baseado nas respostas das requisições HTTP.`),wg(),jc(16,`p`),lO(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),wg(),jc(18,`h2`),lO(19,`Configuração`),wg(),jc(20,`p`),lO(21,`Para o correto funcionamento do interceptor `),jc(22,`code`),lO(23,`po-http-interceptor`),wg(),lO(24,`, é necessário configurar o `),jc(25,`code`),lO(26,`HttpClient`),wg(),lO(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),jc(28,`code`),lO(29,`provideHttpClient(withInterceptorsFromDi())`),wg(),lO(30,`.`),wg(),jc(31,`h3`),lO(32,`1) NgModule`),wg(),jc(33,`p`),lO(34,`No módulo principal da aplicação (geralmente `),jc(35,`code`),lO(36,`AppModule`),wg(),lO(37,`), configure o `),jc(38,`code`),lO(39,`HttpClient`),wg(),lO(40,`,
como no exemplo abaixo:`),wg(),jc(41,`pre`)(42,`code`),lO(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),wg()(),jc(44,`p`),lO(45,`Ao importar o módulo `),jc(46,`code`),lO(47,`PoModule`),wg(),lO(48,` na aplicação, o `),jc(49,`code`),lO(50,`po-http-interceptor`),wg(),lO(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),wg(),jc(52,`h3`),lO(53,`2) Standalone`),wg(),jc(54,`p`),lO(55,`No arquivo contendo a configuração da aplicação (geralmente `),jc(56,`code`),lO(57,`src/app/app.config.ts`),wg(),lO(58,`), adicione os providers e configure o `),jc(59,`code`),lO(60,`HttpClient`),wg(),lO(61,`,
como no exemplo abaixo:`),wg(),jc(62,`pre`)(63,`code`),lO(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),wg()(),jc(65,`h2`),lO(66,`Como usar`),wg(),jc(67,`p`),lO(68,`Ao realizar requisições utilize o `),jc(69,`code`),lO(70,`HttpClient`),wg(),lO(71,`, conforme exemplo abaixo:`),wg(),jc(72,`pre`)(73,`code`),lO(74,`import { HttpClient } from '@angular/common/http';

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
`),wg()(),jc(75,`p`),lO(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),wg(),jc(77,`h3`),lO(78,`Estrutura das mensagens`),wg(),jc(79,`h4`),lO(80,`Mensagens de sucesso `),jc(81,`code`),lO(82,`2xx`),wg()(),jc(83,`p`),lO(84,`Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade `),jc(85,`code`),lO(86,`_messages`),wg(),lO(87,` no objeto de retorno.
Por exemplo:`),wg(),jc(88,`pre`)(89,`code`),lO(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),wg()(),jc(91,`h4`),lO(92,`Mensagens de erro `),jc(93,`code`),lO(94,`4xx`),wg(),lO(95,` ou `),jc(96,`code`),lO(97,`5xx`),wg()(),jc(98,`p`),lO(99,`Ao retornar erro, o objeto não necessita ter `),jc(100,`code`),lO(101,`_messages`),wg(),lO(102,`, deve-se retornar o objeto diretamente:`),wg(),jc(103,`pre`)(104,`code`),lO(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),wg()(),jc(106,`p`),lO(107,`Também é possível informar as seguintes propriedades:`),wg(),jc(108,`ul`)(109,`li`)(110,`code`),lO(111,`helpUrl`),wg(),lO(112,`: link para a documentação do erro;`),jc(113,`ul`)(114,`li`),lO(115,`Caso for informado, será exibido uma ação de "Ajuda" na notificação, para isso não deverá ter a propriedade `),jc(116,`code`),lO(117,`detailedMessage`),wg(),lO(118,`.`),wg()()(),jc(119,`li`)(120,`code`),lO(121,`type`),wg(),lO(122,`: É possível informar `),jc(123,`code`),lO(124,`error`),wg(),lO(125,`, `),jc(126,`code`),lO(127,`warning`),wg(),lO(128,` e `),jc(129,`code`),lO(130,`information`),wg(),lO(131,`, sendo `),jc(132,`code`),lO(133,`error`),wg(),lO(134,` o valor padrão.`),wg(),jc(135,`li`)(136,`code`),lO(137,`details`),wg(),lO(138,`: Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal.`),wg(),jc(139,`li`)(140,`code`),lO(141,`detailTitle`),wg(),lO(142,`: caso for informado, será apresentado como título dos detalhes substituindo o padrão `),jc(143,`code`),lO(144,`code - message`),wg()()(),jc(145,`blockquote`)(146,`p`),lO(147,`Veja o `),jc(148,`a`,6),lO(149,`Guia de implementação de APIs`),wg(),lO(150,` para mais detalhes sobre a estrutura das mensagens.`),wg()(),jc(151,`h3`),lO(152,`Cabeçalho`),wg(),jc(153,`p`),lO(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),jc(155,`code`),lO(156,`true`),wg(),lO(157,`:`),wg(),jc(158,`ul`)(159,`li`)(160,`p`)(161,`code`),lO(162,`X-PO-No-Message`),wg(),lO(163,`: Não exibe notificações de erro e/ou sucesso.`),wg()(),jc(164,`li`)(165,`p`)(166,`code`),lO(167,`X-PO-No-Error`),wg(),lO(168,`: Não mostra notificações de erro com códigos `),jc(169,`code`),lO(170,`4xx`),wg(),lO(171,` e `),jc(172,`code`),lO(173,`5xx`),wg(),lO(174,`.`),wg()()(),jc(175,`pre`)(176,`code`),lO(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),wg()(),jc(178,`blockquote`)(179,`p`),lO(180,`Após a validação no `),jc(181,`em`),lO(182,`interceptor`),wg(),lO(183,`, os parâmetros serão removidos do cabeçalho da requisição. `),wg()()()())},encapsulation:2,changeDetection:1})}return n})();function pe(n,me){if(n&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let a=Fx();return __(a.changeTab(`web`))}),nu(1,`sample-po-http-interceptor-labs-view`),wg()}if(n&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var le=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Http Interceptor`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,a){i&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,pe,2,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return a.changeTab(`doc`)}),nu(4,`sample-po-http-interceptor-doc`),wg()()()),i&2&&(UE(`p-actions`,a.actions),rg(2),Dx(a.hidePoWebSample?-1:2),rg(),UE(`p-active`,a.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ee,te],encapsulation:2,changeDetection:1})}return n})()}];var ne=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[I1.forChild(le),I1]})}return n})();var Te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=pe$1({type:n});static ɵinj=ue({imports:[M,ne]})}return n})();export{Te as DocPoHttpInterceptorModule};