import{$n as Ak,Ar as Ig,Cn as oi,Ei as WV,En as pte,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,Ti as W0,Vi as _u,Xt as ere,Yi as eF,b as Fu,bi as Uk,ca as jk,di as RZ,ea as ge,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de$1,qr as NZ,rt as Qae,va as nk,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var ue=()=>({label:`Po Portal`,link:`portal`});var be=()=>({label:`Po Breadcrumb`,link:`breadcrumb`});var Se=(n,W)=>[n,W];var oe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-items`]],template:function(a,o){a&1&&_u(0,`po-breadcrumb`,0),a&2&&Rb(`p-items`,Uk(3,Se,jk(1,ue),jk(2,be)))},dependencies:[pte],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Breadcrumb Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-breadcrumb-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ve,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,oe],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{poNotification=p(Fu);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore()}addBreadcrumb(){let r=Object.assign({},this.breadcrumbItem);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,r],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(r){this.poNotification.success(`Breadcrumb clicked: ${r}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-labs`]],standalone:!1,decls:19,vars:11,consts:[[`breadcrumbForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-favorite-service`,`p-items`,`p-params-service`],[1,`po-row`],[`name`,`breadcrumbAction`,`p-label`,`Breadcrumb action`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLabel`,`p-label`,`Breadcrumb label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLink`,`p-label`,`Breadcrumb link`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`favoriteService`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Favorite service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`paramsService`,`p-clean`,``,`p-help`,`Ex.: { id: 14, user: 'dev.po' }`,`p-label`,`Params service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let s=ZO();_u(0,`po-breadcrumb`,2)(1,`po-divider`),Jc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(o.breadcrumbItem.action,l)||(o.breadcrumbItem.action=l),H_(l)}),Zg(),Jc(6,`po-input`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(o.breadcrumbItem.label,l)||(o.breadcrumbItem.label=l),H_(l)}),Zg(),Jc(7,`po-input`,6),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(o.breadcrumbItem.link,l)||(o.breadcrumbItem.link=l),H_(l)}),Zg()(),Jc(8,`div`,3)(9,`po-button`,7),vt(`p-click`,function(){return o.addBreadcrumb()}),Zg()()(),_u(10,`po-divider`),Jc(11,`form`,null,1)(13,`div`,3)(14,`po-input`,8),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(o.favoriteService,l)||(o.favoriteService=l),H_(l)}),Zg(),Jc(15,`po-input`,9),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(o.paramsService,l)||(o.paramsService=l),H_(l)}),Zg()(),_u(16,`po-divider`),Jc(17,`div`,3)(18,`po-button`,10),vt(`p-click`,function(){U_(s);let l=sk(3),se=sk(12);return l.reset(),se.reset(),H_(o.restore())}),Zg()()()}if(a&2){let s=sk(3);Rb(`p-favorite-service`,o.favoriteService)(`p-items`,o.breadcrumbItems)(`p-params-service`,o.paramsService),Ig(5),Yb(`ngModel`,o.breadcrumbItem.action),Y0(),Ig(),Yb(`ngModel`,o.breadcrumbItem.label),Y0(),Ig(),Yb(`ngModel`,o.breadcrumbItem.link),Y0(),Ig(2),Rb(`p-disabled`,s.invalid),Ig(5),Yb(`ngModel`,o.favoriteService),Rb(`p-disabled`,!o.breadcrumbItems?.length),Y0(),Ig(),Yb(`ngModel`,o.paramsService),Rb(`p-disabled`,!o.breadcrumbItems?.length),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,pte,oi,Lf,U4],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Breadcrumb Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
</po-breadcrumb>

<po-divider />

<form #breadcrumbForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="breadcrumbAction" [(ngModel)]="breadcrumbItem.action" p-label="Breadcrumb action">
    </po-input>

    <po-input
      class="po-md-4"
      name="breadcrumbLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-label="Breadcrumb label"
      p-required
    >
    </po-input>

    <po-input class="po-md-4" name="breadcrumbLink" [(ngModel)]="breadcrumbItem.link" p-label="Breadcrumb link">
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Add breadcrumb"
      [p-disabled]="breadcrumbForm.invalid"
      (p-click)="addBreadcrumb()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="favoriteService"
      [(ngModel)]="favoriteService"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/favorite"
      p-label="Favorite service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="paramsService"
      [(ngModel)]="paramsService"
      p-clean
      p-help="Ex.: { id: 14, user: 'dev.po' }"
      p-label="Params service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>
  </div>

  <po-divider />

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="breadcrumbForm.reset(); propertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumbItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-breadcrumb-labs',
  templateUrl: './sample-po-breadcrumb-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbItems: Array<PoBreadcrumbItem>;
  favoriteService: string;
  paramsService: object;

  ngOnInit() {
    this.restore();
  }

  addBreadcrumb() {
    const breadcrumbItem: PoBreadcrumbItem = Object.assign({}, this.breadcrumbItem);
    breadcrumbItem.action = breadcrumbItem.action ? this.showAction.bind(this, breadcrumbItem.action) : undefined;

    this.breadcrumbItems = [...this.breadcrumbItems, breadcrumbItem];

    this.restoreBreadcrumbItemForm();
  }

  restore() {
    this.favoriteService = undefined;
    this.paramsService = undefined;
    this.breadcrumbItems = [];
    this.restoreBreadcrumbItemForm();
  }

  restoreBreadcrumbItemForm() {
    this.breadcrumbItem = { action: undefined, label: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Breadcrumb clicked: \${action}\`);
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-breadcrumb-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,xe,o.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return n})();var de=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-doc`]],standalone:!1,decls:379,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumbItem[]`],[`pan`,``,1,`docs-api-property-type`,`object`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`]],template:function(a,o){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoBreadcrumbModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-breadcrumb.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoBreadcrumbComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),Zg(),Jc(15,`p`),Tk(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),Zg(),Jc(17,`p`),Tk(18,`Caso um endereço seja especificado na propriedade `),Jc(19,`code`),Tk(20,`p-favorite-service`),Zg(),Tk(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),Zg(),Jc(22,`p`),Tk(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Jc(24,`code`),Tk(25,`p-params-service`),Zg(),Tk(26,` que recebe um objeto contendo as informações.`),Zg(),Jc(27,`h4`),Tk(28,`Tokens customizáveis`),Zg(),Jc(29,`p`),Tk(30,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(31,`blockquote`)(32,`p`),Tk(33,`Para maiores informações, acesse o guia `),Jc(34,`a`,6),Tk(35,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(36,`.`),Zg()(),Jc(37,`table`)(38,`thead`)(39,`tr`)(40,`th`),Tk(41,`Propriedade`),Zg(),Jc(42,`th`),Tk(43,`Descrição`),Zg(),Jc(44,`th`),Tk(45,`Valor Padrão`),Zg()()(),Jc(46,`tbody`)(47,`tr`)(48,`td`)(49,`strong`),Tk(50,`Default Values`),Zg()(),_u(51,`td`)(52,`td`),Zg(),Jc(53,`tr`)(54,`td`)(55,`code`),Tk(56,`--font-family`),Zg()(),Jc(57,`td`),Tk(58,`Família tipográfica usada \xA0`),Zg(),Jc(59,`td`)(60,`code`),Tk(61,`var(--font-family-theme)`),Zg()()(),Jc(62,`tr`)(63,`td`)(64,`code`),Tk(65,`--color`),Zg()(),Jc(66,`td`),Tk(67,`Cor principal do icone de lista`),Zg(),Jc(68,`td`)(69,`code`),Tk(70,`var(--color-action-default)`),Zg()()(),Jc(71,`tr`)(72,`td`)(73,`code`),Tk(74,`--color-icon`),Zg()(),Jc(75,`td`),Tk(76,`Cor do icone ">"`),Zg(),Jc(77,`td`)(78,`code`),Tk(79,`var(--color-neutral-mid-60)`),Zg()()(),Jc(80,`tr`)(81,`td`)(82,`code`),Tk(83,`--color-current-page`),Zg(),Tk(84,` \xA0`),Zg(),Jc(85,`td`),Tk(86,`Cor do pagina atual`),Zg(),Jc(87,`td`)(88,`code`),Tk(89,`var(--color-neutral-mid-60)`),Zg()()()()()(),Jc(90,`div`,7)(91,`h4`,8),Tk(92,`Seletor`),Zg(),Jc(93,`pre`,9),Tk(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),Zg()(),Jc(95,`h4`,10),Tk(96,`Propriedades`),Zg(),Jc(97,`table`,11)(98,`tr`,12)(99,`th`,13),Tk(100,`Nome`),Zg(),Jc(101,`th`,13),Tk(102,`Tipo`),Zg(),Jc(103,`th`,13),Tk(104,`Padrão`),Zg(),Jc(105,`th`,13),Tk(106,`Descrição`),Zg()(),Jc(107,`tr`,14)(108,`td`,15)(109,`div`,16)(110,`span`,17),Tk(111,` p-favorite-service`),_u(112,`br`),Zg()()(),Jc(113,`td`,18)(114,`code`,19),Tk(115,`string`),Zg()(),Jc(116,`td`,20),Tk(117,`-`),Zg(),Jc(118,`td`,21)(119,`em`)(120,`strong`),Tk(121,`(opcional)`),Zg()(),Jc(122,`p`),Tk(123,`Permite definir uma URL no componente `),Jc(124,`code`),Tk(125,`po-breadcrumb`),Zg(),Tk(126,` para favoritar ou desfavoritar.`),Zg(),Jc(127,`blockquote`)(128,`p`),Tk(129,`Para utilizar esta propriedade, o último `),Jc(130,`code`),Tk(131,`PoBreadcrumbItem`),Zg(),Tk(132,` da lista de items da propriedade `),Jc(133,`code`),Tk(134,`p-items`),Zg(),Tk(135,` deve ter um link informado.`),Zg()(),Jc(136,`blockquote`)(137,`p`),Tk(138,`A API deve estar preparada para retornar um objeto no formato `),Jc(139,`code`),Tk(140,`{ isFavorite: boolean }`),Zg(),Tk(141,`.`),Zg()(),Jc(142,`p`),Tk(143,`Ao iniciar, o `),Jc(144,`code`),Tk(145,`po-breadcrumb`),Zg(),Tk(146,` faz um GET na URL definida na propriedade `),Jc(147,`code`),Tk(148,`p-favorite-service`),Zg(),Tk(149,` e deve retornar a propriedade
`),Jc(150,`code`),Tk(151,`{ isFavorite: boolean }`),Zg(),Tk(152,` do último `),Jc(153,`code`),Tk(154,`PoBreadcrumbItem`),Zg(),Tk(155,` definido na lista de itens da propriedade `),Jc(156,`code`),Tk(157,`p-items`),Zg(),Tk(158,`.`),Zg(),Jc(159,`p`),Tk(160,`Ao clicar em favoritar ou desfavoritar o `),Jc(161,`code`),Tk(162,`po-breadcrumb`),Zg(),Tk(163,` faz um POST com o link e a propriedade `),Jc(164,`code`),Tk(165,`{ isFavorite: boolean }`),Zg(),Tk(166,`
definidos no \xFAltimo item da propriedade `),Jc(167,`code`),Tk(168,`p-items`),Zg(),Tk(169,`.`),Zg(),Jc(170,`blockquote`)(171,`p`),Tk(172,`Caso algum parâmetro seja definido na propriedade `),Jc(173,`code`),Tk(174,`p-params-service`),Zg(),Tk(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),Zg()(),Jc(176,`p`),Tk(177,`Exemplo de URL contendo o serviço de favoritar ou desfavoritar:`),Zg(),Jc(178,`pre`)(179,`code`),Tk(180,`https://po-ui.io/sample/api/favorite
`),Zg()(),Jc(181,`p`),Tk(182,`Ao fazer o GET o `),Jc(183,`code`),Tk(184,`po-breadcrumb`),Zg(),Tk(185,` concatena o link com a URL de serviço. Exemplo:`),Zg(),Jc(186,`pre`)(187,`code`),Tk(188,`GET http://<domain>/api/favorite?url=/example
`),Zg()(),Jc(189,`pre`)(190,`code`),Tk(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),Zg()(),Jc(192,`pre`)(193,`code`),Tk(194,`POST
payload: { isFavorite: true, url: '/example' }
`),Zg()(),Jc(195,`p`),Tk(196,`Caso possua parâmetros definidos na propriedade `),Jc(197,`code`),Tk(198,`p-params-service`),Zg(),Tk(199,`:`),Zg(),Jc(200,`pre`)(201,`code`),Tk(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),Zg()(),Jc(203,`p`),Tk(204,`Exemplos de retorno:`),Zg(),Jc(205,`pre`)(206,`code`),Tk(207,`{ isFavorite: true, url: "/example" }
`),Zg()(),Jc(208,`pre`)(209,`code`),Tk(210,`{ isFavorite: false, url: "/example" }
`),Zg()(),Jc(211,`pre`)(212,`code`),Tk(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),Zg()()()(),Jc(214,`tr`,14)(215,`td`,15)(216,`div`,16)(217,`span`,17),Tk(218,` p-items`),_u(219,`br`),Zg()()(),Jc(220,`td`,18)(221,`code`,22),Tk(222,`PoBreadcrumbItem[]`),Zg()(),Jc(223,`td`,20),Tk(224,`-`),Zg(),Jc(225,`td`,21)(226,`p`),Tk(227,`Lista de itens do `),Jc(228,`em`),Tk(229,`breadcrumb`),Zg(),Tk(230,`.`),Zg(),Jc(231,`p`)(232,`strong`),Tk(233,`Exemplo:`),Zg()(),Jc(234,`pre`)(235,`code`),Tk(236,`{ label: 'Po Portal', link: 'portal' }
`),Zg()()()(),Jc(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),Tk(241,` p-params-service`),_u(242,`br`),Zg()()(),Jc(243,`td`,18)(244,`code`,23),Tk(245,`object`),Zg()(),Jc(246,`td`,20),Tk(247,`-`),Zg(),Jc(248,`td`,21)(249,`em`)(250,`strong`),Tk(251,`(opcional)`),Zg()(),Jc(252,`p`),Tk(253,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Zg()()(),Jc(254,`tr`,14)(255,`td`,15)(256,`div`,16)(257,`span`,17),Tk(258,` p-size`),_u(259,`br`),Zg()()(),Jc(260,`td`,18)(261,`code`,19),Tk(262,`string`),Zg()(),Jc(263,`td`,20)(264,`p`)(265,`code`),Tk(266,`medium`),Zg()()(),Jc(267,`td`,21)(268,`em`)(269,`strong`),Tk(270,`(opcional)`),Zg()(),Jc(271,`p`),Tk(272,`Define o tamanho do componente entre `),Jc(273,`code`),Tk(274,`small`),Zg(),Tk(275,` ou `),Jc(276,`code`),Tk(277,`medium`),Zg(),Tk(278,`.`),Zg(),Jc(279,`blockquote`)(280,`p`),Tk(281,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(282,`code`),Tk(283,`medium`),Zg(),Tk(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(285,`a`,24),Tk(286,`po-theme`),Zg(),Tk(287,`.`),Zg()()()()(),Jc(288,`h3`),Tk(289,`Interfaces`),Zg(),Jc(290,`h4`,25)(291,`code`,5),Tk(292,`PoBreadcrumbItem`),Zg()(),Jc(293,`div`,2)(294,`p`),Tk(295,`Interface que define cada item do componente `),Jc(296,`strong`),Tk(297,`po-breadcrumb`),Zg(),Tk(298,`.`),Zg()(),Jc(299,`h4`,10),Tk(300,`Propriedades`),Zg(),Jc(301,`table`,11)(302,`tr`,12)(303,`th`,13),Tk(304,`Nome`),Zg(),Jc(305,`th`,13),Tk(306,`Tipo`),Zg(),Jc(307,`th`,13),Tk(308,`Descrição`),Zg()(),Jc(309,`tr`,14)(310,`td`,15)(311,`div`,16)(312,`span`,17),Tk(313,` action`),_u(314,`br`),Zg()()(),Jc(315,`td`,18)(316,`code`,26),Tk(317,`Function`),Zg()(),Jc(318,`td`,21)(319,`em`)(320,`strong`),Tk(321,`(opcional)`),Zg()(),Jc(322,`p`),Tk(323,`Ação executada ao clicar no item.`),Zg(),Jc(324,`blockquote`)(325,`p`),Tk(326,`A função atribuída a esta propriedade receberá o `),Jc(327,`em`),Tk(328,`label`),Zg(),Tk(329,` do item como parâmetro para execução.`),Zg()()()(),Jc(330,`tr`,14)(331,`td`,15)(332,`div`,16)(333,`span`,17),Tk(334,` label`),_u(335,`br`),Zg()()(),Jc(336,`td`,18)(337,`code`,19),Tk(338,`string`),Zg()(),Jc(339,`td`,21)(340,`p`),Tk(341,`Rótulo do item.`),Zg()()(),Jc(342,`tr`,14)(343,`td`,15)(344,`div`,16)(345,`span`,17),Tk(346,` link`),_u(347,`br`),Zg()()(),Jc(348,`td`,18)(349,`code`,19),Tk(350,`string`),Zg()(),Jc(351,`td`,21)(352,`em`)(353,`strong`),Tk(354,`(opcional)`),Zg()(),Jc(355,`p`),Tk(356,`Url do item.`),Zg(),Jc(357,`blockquote`)(358,`p`),Tk(359,`Caso o item também contenha uma `),Jc(360,`em`),Tk(361,`action`),Zg(),Tk(362,` definida, a preferência de execução será do `),Jc(363,`em`),Tk(364,`link`),Zg(),Tk(365,`.`),Zg()(),Jc(366,`blockquote`)(367,`p`),Tk(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(369,`strong`)(370,`a`,27),Tk(371,`Veja um exemplo de como criar rotas aqui`),Zg()(),Tk(372,`.`),Zg()(),Jc(373,`blockquote`)(374,`p`),Tk(375,`Esta propriedade é necessária para que a propriedade `),Jc(376,`code`),Tk(377,`p-favorite-service`),Zg(),Tk(378,` consiga favoritar ou desfavoritar.`),Zg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Be(n,W){if(n&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-breadcrumb-basic-view`)(2,`sample-po-breadcrumb-labs-view`),Zg()}if(n&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var ye=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Breadcrumb`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Be,3,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-breadcrumb-doc`),Zg()()()),a&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Tze,Qae,ere,re,le,de],encapsulation:2,changeDetection:1})}return n})()}];var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[WV.forChild(ye),WV]})}return n})();var Xe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,ce]})}return n})();export{Xe as DocPoBreadcrumbModule};