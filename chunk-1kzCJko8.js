import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ta as jk,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,gn as mte,go as z0,io as vu,ji as Vk,li as Qc,na as de$1,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var ue=()=>({label:`Po Portal`,link:`portal`});var be=()=>({label:`Po Breadcrumb`,link:`breadcrumb`});var Se=(n,W)=>[n,W];var oe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-items`]],template:function(a,o){a&1&&vu(0,`po-breadcrumb`,0),a&2&&Rb(`p-items`,jk(3,Se,Lk(1,ue),Lk(2,be)))},dependencies:[mte],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-breadcrumb-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Breadcrumb Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-breadcrumb-basic`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ve,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,oe],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{poNotification=p(Ru);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore()}addBreadcrumb(){let r=Object.assign({},this.breadcrumbItem);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,r],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(r){this.poNotification.success(`Breadcrumb clicked: ${r}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-labs`]],standalone:!1,decls:19,vars:11,consts:[[`breadcrumbForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-favorite-service`,`p-items`,`p-params-service`],[1,`po-row`],[`name`,`breadcrumbAction`,`p-label`,`Breadcrumb action`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLabel`,`p-label`,`Breadcrumb label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLink`,`p-label`,`Breadcrumb link`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`favoriteService`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Favorite service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`paramsService`,`p-clean`,``,`p-help`,`Ex.: { id: 14, user: 'dev.po' }`,`p-label`,`Params service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let s=YO();vu(0,`po-breadcrumb`,2)(1,`po-divider`),Qc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),U_(d)}),Kg(),Qc(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),U_(d)}),Kg(),Qc(7,`po-input`,6),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),U_(d)}),Kg()(),Qc(8,`div`,3)(9,`po-button`,7),vt(`p-click`,function(){return o.addBreadcrumb()}),Kg()()(),vu(10,`po-divider`),Qc(11,`form`,null,1)(13,`div`,3)(14,`po-input`,8),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(o.favoriteService,d)||(o.favoriteService=d),U_(d)}),Kg(),Qc(15,`po-input`,9),z0(),Kb(`ngModelChange`,function(d){return B_(s),Tk(o.paramsService,d)||(o.paramsService=d),U_(d)}),Kg()(),vu(16,`po-divider`),Qc(17,`div`,3)(18,`po-button`,10),vt(`p-click`,function(){B_(s);let d=ik(3),se=ik(12);return d.reset(),se.reset(),U_(o.restore())}),Kg()()()}if(a&2){let s=ik(3);Rb(`p-favorite-service`,o.favoriteService)(`p-items`,o.breadcrumbItems)(`p-params-service`,o.paramsService),wg(5),Yb(`ngModel`,o.breadcrumbItem.action),W0(),wg(),Yb(`ngModel`,o.breadcrumbItem.label),W0(),wg(),Yb(`ngModel`,o.breadcrumbItem.link),W0(),wg(2),Rb(`p-disabled`,s.invalid),wg(5),Yb(`ngModel`,o.favoriteService),Rb(`p-disabled`,!o.breadcrumbItems?.length),W0(),wg(),Yb(`ngModel`,o.paramsService),Rb(`p-disabled`,!o.breadcrumbItems?.length),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,mte,oi,Nf,j4],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-breadcrumb-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Breadcrumb Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-breadcrumb-labs`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+o.sampleCodeButtonIcon),wg(),tm(` `,o.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,xe,o.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,me],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-doc`]],standalone:!1,decls:379,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-breadcrumb-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-favorite-service`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumbItem[]`],[`id`,`prop-p-params-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`]],template:function(a,o){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoBreadcrumbModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-breadcrumb.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoBreadcrumbComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),Kg(),Qc(15,`p`),Sk(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),Kg(),Qc(17,`p`),Sk(18,`Caso um endereço seja especificado na propriedade `),Qc(19,`code`),Sk(20,`p-favorite-service`),Kg(),Sk(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),Kg(),Qc(22,`p`),Sk(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Qc(24,`code`),Sk(25,`p-params-service`),Kg(),Sk(26,` que recebe um objeto contendo as informações.`),Kg(),Qc(27,`h4`),Sk(28,`Tokens customizáveis`),Kg(),Qc(29,`p`),Sk(30,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(31,`blockquote`)(32,`p`),Sk(33,`Para maiores informações, acesse o guia `),Qc(34,`a`,6),Sk(35,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(36,`.`),Kg()(),Qc(37,`table`)(38,`thead`)(39,`tr`)(40,`th`),Sk(41,`Propriedade`),Kg(),Qc(42,`th`),Sk(43,`Descrição`),Kg(),Qc(44,`th`),Sk(45,`Valor Padrão`),Kg()()(),Qc(46,`tbody`)(47,`tr`)(48,`td`)(49,`strong`),Sk(50,`Default Values`),Kg()(),vu(51,`td`)(52,`td`),Kg(),Qc(53,`tr`)(54,`td`)(55,`code`),Sk(56,`--font-family`),Kg()(),Qc(57,`td`),Sk(58,`Família tipográfica usada \xA0`),Kg(),Qc(59,`td`)(60,`code`),Sk(61,`var(--font-family-theme)`),Kg()()(),Qc(62,`tr`)(63,`td`)(64,`code`),Sk(65,`--color`),Kg()(),Qc(66,`td`),Sk(67,`Cor principal do icone de lista`),Kg(),Qc(68,`td`)(69,`code`),Sk(70,`var(--color-action-default)`),Kg()()(),Qc(71,`tr`)(72,`td`)(73,`code`),Sk(74,`--color-icon`),Kg()(),Qc(75,`td`),Sk(76,`Cor do icone ">"`),Kg(),Qc(77,`td`)(78,`code`),Sk(79,`var(--color-neutral-mid-60)`),Kg()()(),Qc(80,`tr`)(81,`td`)(82,`code`),Sk(83,`--color-current-page`),Kg(),Sk(84,` \xA0`),Kg(),Qc(85,`td`),Sk(86,`Cor do pagina atual`),Kg(),Qc(87,`td`)(88,`code`),Sk(89,`var(--color-neutral-mid-60)`),Kg()()()()()(),Qc(90,`div`,7)(91,`h4`,8),Sk(92,`Seletor`),Kg(),Qc(93,`pre`,9),Sk(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),Kg()(),Qc(95,`h4`,10),Sk(96,`Propriedades`),Kg(),Qc(97,`table`,11)(98,`tr`,12)(99,`th`,13),Sk(100,`Nome`),Kg(),Qc(101,`th`,13),Sk(102,`Tipo`),Kg(),Qc(103,`th`,13),Sk(104,`Padrão`),Kg(),Qc(105,`th`,13),Sk(106,`Descrição`),Kg()(),Qc(107,`tr`,14)(108,`td`,15)(109,`div`,16)(110,`span`,17),Sk(111,` p-favorite-service`),vu(112,`br`),Kg()()(),Qc(113,`td`,18)(114,`code`,19),Sk(115,`string`),Kg()(),Qc(116,`td`,20),Sk(117,`-`),Kg(),Qc(118,`td`,21)(119,`em`)(120,`strong`),Sk(121,`(opcional)`),Kg()(),Qc(122,`p`),Sk(123,`Permite definir uma URL no componente `),Qc(124,`code`),Sk(125,`po-breadcrumb`),Kg(),Sk(126,` para favoritar ou desfavoritar.`),Kg(),Qc(127,`blockquote`)(128,`p`),Sk(129,`Para utilizar esta propriedade, o último `),Qc(130,`code`),Sk(131,`PoBreadcrumbItem`),Kg(),Sk(132,` da lista de items da propriedade `),Qc(133,`code`),Sk(134,`p-items`),Kg(),Sk(135,` deve ter um link informado.`),Kg()(),Qc(136,`blockquote`)(137,`p`),Sk(138,`A API deve estar preparada para retornar um objeto no formato `),Qc(139,`code`),Sk(140,`{ isFavorite: boolean }`),Kg(),Sk(141,`.`),Kg()(),Qc(142,`p`),Sk(143,`Ao iniciar, o `),Qc(144,`code`),Sk(145,`po-breadcrumb`),Kg(),Sk(146,` faz um GET na URL definida na propriedade `),Qc(147,`code`),Sk(148,`p-favorite-service`),Kg(),Sk(149,` e deve retornar a propriedade
`),Qc(150,`code`),Sk(151,`{ isFavorite: boolean }`),Kg(),Sk(152,` do último `),Qc(153,`code`),Sk(154,`PoBreadcrumbItem`),Kg(),Sk(155,` definido na lista de itens da propriedade `),Qc(156,`code`),Sk(157,`p-items`),Kg(),Sk(158,`.`),Kg(),Qc(159,`p`),Sk(160,`Ao clicar em favoritar ou desfavoritar o `),Qc(161,`code`),Sk(162,`po-breadcrumb`),Kg(),Sk(163,` faz um POST com o link e a propriedade `),Qc(164,`code`),Sk(165,`{ isFavorite: boolean }`),Kg(),Sk(166,`
definidos no \xFAltimo item da propriedade `),Qc(167,`code`),Sk(168,`p-items`),Kg(),Sk(169,`.`),Kg(),Qc(170,`blockquote`)(171,`p`),Sk(172,`Caso algum parâmetro seja definido na propriedade `),Qc(173,`code`),Sk(174,`p-params-service`),Kg(),Sk(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),Kg()(),Qc(176,`p`),Sk(177,`Exemplo de URL contendo o serviço de favoritar ou desfavoritar:`),Kg(),Qc(178,`pre`)(179,`code`),Sk(180,`https://po-ui.io/sample/api/favorite
`),Kg()(),Qc(181,`p`),Sk(182,`Ao fazer o GET o `),Qc(183,`code`),Sk(184,`po-breadcrumb`),Kg(),Sk(185,` concatena o link com a URL de serviço. Exemplo:`),Kg(),Qc(186,`pre`)(187,`code`),Sk(188,`GET http://<domain>/api/favorite?url=/example
`),Kg()(),Qc(189,`pre`)(190,`code`),Sk(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),Kg()(),Qc(192,`pre`)(193,`code`),Sk(194,`POST
payload: { isFavorite: true, url: '/example' }
`),Kg()(),Qc(195,`p`),Sk(196,`Caso possua parâmetros definidos na propriedade `),Qc(197,`code`),Sk(198,`p-params-service`),Kg(),Sk(199,`:`),Kg(),Qc(200,`pre`)(201,`code`),Sk(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),Kg()(),Qc(203,`p`),Sk(204,`Exemplos de retorno:`),Kg(),Qc(205,`pre`)(206,`code`),Sk(207,`{ isFavorite: true, url: "/example" }
`),Kg()(),Qc(208,`pre`)(209,`code`),Sk(210,`{ isFavorite: false, url: "/example" }
`),Kg()(),Qc(211,`pre`)(212,`code`),Sk(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),Kg()()()(),Qc(214,`tr`,22)(215,`td`,15)(216,`div`,16)(217,`span`,17),Sk(218,` p-items`),vu(219,`br`),Kg()()(),Qc(220,`td`,18)(221,`code`,23),Sk(222,`PoBreadcrumbItem[]`),Kg()(),Qc(223,`td`,20),Sk(224,`-`),Kg(),Qc(225,`td`,21)(226,`p`),Sk(227,`Lista de itens do `),Qc(228,`em`),Sk(229,`breadcrumb`),Kg(),Sk(230,`.`),Kg(),Qc(231,`p`)(232,`strong`),Sk(233,`Exemplo:`),Kg()(),Qc(234,`pre`)(235,`code`),Sk(236,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Qc(237,`tr`,24)(238,`td`,15)(239,`div`,16)(240,`span`,17),Sk(241,` p-params-service`),vu(242,`br`),Kg()()(),Qc(243,`td`,18)(244,`code`,25),Sk(245,`object`),Kg()(),Qc(246,`td`,20),Sk(247,`-`),Kg(),Qc(248,`td`,21)(249,`em`)(250,`strong`),Sk(251,`(opcional)`),Kg()(),Qc(252,`p`),Sk(253,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()(),Qc(254,`tr`,26)(255,`td`,15)(256,`div`,16)(257,`span`,17),Sk(258,` p-size`),vu(259,`br`),Kg()()(),Qc(260,`td`,18)(261,`code`,19),Sk(262,`string`),Kg()(),Qc(263,`td`,20)(264,`p`)(265,`code`),Sk(266,`medium`),Kg()()(),Qc(267,`td`,21)(268,`em`)(269,`strong`),Sk(270,`(opcional)`),Kg()(),Qc(271,`p`),Sk(272,`Define o tamanho do componente entre `),Qc(273,`code`),Sk(274,`small`),Kg(),Sk(275,` ou `),Qc(276,`code`),Sk(277,`medium`),Kg(),Sk(278,`.`),Kg(),Qc(279,`blockquote`)(280,`p`),Sk(281,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(282,`code`),Sk(283,`medium`),Kg(),Sk(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(285,`a`,27),Sk(286,`po-theme`),Kg(),Sk(287,`.`),Kg()()()()(),Qc(288,`h3`),Sk(289,`Interfaces`),Kg(),Qc(290,`h4`,28)(291,`code`,5),Sk(292,`PoBreadcrumbItem`),Kg()(),Qc(293,`div`,2)(294,`p`),Sk(295,`Interface que define cada item do componente `),Qc(296,`strong`),Sk(297,`po-breadcrumb`),Kg(),Sk(298,`.`),Kg()(),Qc(299,`h4`,10),Sk(300,`Propriedades`),Kg(),Qc(301,`table`,11)(302,`tr`,12)(303,`th`,13),Sk(304,`Nome`),Kg(),Qc(305,`th`,13),Sk(306,`Tipo`),Kg(),Qc(307,`th`,13),Sk(308,`Descrição`),Kg()(),Qc(309,`tr`,29)(310,`td`,15)(311,`div`,16)(312,`span`,17),Sk(313,` action`),vu(314,`br`),Kg()()(),Qc(315,`td`,18)(316,`code`,30),Sk(317,`Function`),Kg()(),Qc(318,`td`,21)(319,`em`)(320,`strong`),Sk(321,`(opcional)`),Kg()(),Qc(322,`p`),Sk(323,`Ação executada ao clicar no item.`),Kg(),Qc(324,`blockquote`)(325,`p`),Sk(326,`A função atribuída a esta propriedade receberá o `),Qc(327,`em`),Sk(328,`label`),Kg(),Sk(329,` do item como parâmetro para execução.`),Kg()()()(),Qc(330,`tr`,31)(331,`td`,15)(332,`div`,16)(333,`span`,17),Sk(334,` label`),vu(335,`br`),Kg()()(),Qc(336,`td`,18)(337,`code`,19),Sk(338,`string`),Kg()(),Qc(339,`td`,21)(340,`p`),Sk(341,`Rótulo do item.`),Kg()()(),Qc(342,`tr`,32)(343,`td`,15)(344,`div`,16)(345,`span`,17),Sk(346,` link`),vu(347,`br`),Kg()()(),Qc(348,`td`,18)(349,`code`,19),Sk(350,`string`),Kg()(),Qc(351,`td`,21)(352,`em`)(353,`strong`),Sk(354,`(opcional)`),Kg()(),Qc(355,`p`),Sk(356,`Url do item.`),Kg(),Qc(357,`blockquote`)(358,`p`),Sk(359,`Caso o item também contenha uma `),Qc(360,`em`),Sk(361,`action`),Kg(),Sk(362,` definida, a preferência de execução será do `),Qc(363,`em`),Sk(364,`link`),Kg(),Sk(365,`.`),Kg()(),Qc(366,`blockquote`)(367,`p`),Sk(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Qc(369,`strong`)(370,`a`,33),Sk(371,`Veja um exemplo de como criar rotas aqui`),Kg()(),Sk(372,`.`),Kg()(),Qc(373,`blockquote`)(374,`p`),Sk(375,`Esta propriedade é necessária para que a propriedade `),Qc(376,`code`),Sk(377,`p-favorite-service`),Kg(),Sk(378,` consiga favoritar ou desfavoritar.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Be(n,W){if(n&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let o=ek();return U_(o.changeTab(`web`))}),vu(1,`sample-po-breadcrumb-basic-view`)(2,`sample-po-breadcrumb-labs-view`),Kg()}if(n&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var ye=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Breadcrumb`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Be,3,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),vu(4,`sample-po-breadcrumb-doc`),Kg()()()),a&2&&(Rb(`p-actions`,o.actions),wg(2),VO(o.hidePoWebSample?-1:2),wg(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,re,de,le],encapsulation:2,changeDetection:1})}return n})()}];var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[GV.forChild(ye),GV]})}return n})();var Xe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de$1({imports:[M,ce]})}return n})();export{Xe as DocPoBreadcrumbModule};