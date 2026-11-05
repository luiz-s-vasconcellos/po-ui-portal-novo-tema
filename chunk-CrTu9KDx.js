import{$r as RK,$t as hte,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Ia as rg,Ii as ab,Jr as Ok,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Sn as ri,Tr as Fx,Ua as v_,Xa as wg,Yn as zu,_r as Dx,_t as Vze,aa as ir,ca as jc,di as UE,ea as h,fr as DO,ha as lO,ii as SK,ir as Ax,ji as _O,ln as lre,lr as CO,oi as Sn,ri as SF,rr as Ag,sr as Bx,x as Ff,ya as mt,za as ue$1}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var ue=()=>({label:`Po Portal`,link:`portal`});var be=()=>({label:`Po Breadcrumb`,link:`breadcrumb`});var Se=(n,W)=>[n,W];var oe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-items`]],template:function(a,o){a&1&&nu(0,`po-breadcrumb`,0),a&2&&UE(`p-items`,CO(3,Se,_O(1,ue),_O(2,be)))},dependencies:[hte],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Breadcrumb Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-breadcrumb-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ve,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,oe],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{poNotification=h(zu);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore()}addBreadcrumb(){let r=Object.assign({},this.breadcrumbItem);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,r],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(r){this.poNotification.success(`Breadcrumb clicked: ${r}`)}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-labs`]],standalone:!1,decls:19,vars:11,consts:[[`breadcrumbForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-favorite-service`,`p-items`,`p-params-service`],[1,`po-row`],[`name`,`breadcrumbAction`,`p-label`,`Breadcrumb action`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLabel`,`p-label`,`Breadcrumb label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLink`,`p-label`,`Breadcrumb link`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`favoriteService`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Favorite service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`paramsService`,`p-clean`,``,`p-help`,`Ex.: { id: 14, user: 'dev.po' }`,`p-label`,`Params service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,o){if(a&1){let s=Ax();nu(0,`po-breadcrumb`,2)(1,`po-divider`),jc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(o.breadcrumbItem.action,l)||(o.breadcrumbItem.action=l),__(l)}),wg(),jc(6,`po-input`,5),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(o.breadcrumbItem.label,l)||(o.breadcrumbItem.label=l),__(l)}),wg(),jc(7,`po-input`,6),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(o.breadcrumbItem.link,l)||(o.breadcrumbItem.link=l),__(l)}),wg()(),jc(8,`div`,3)(9,`po-button`,7),mt(`p-click`,function(){return o.addBreadcrumb()}),wg()()(),nu(10,`po-divider`),jc(11,`form`,null,1)(13,`div`,3)(14,`po-input`,8),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(o.favoriteService,l)||(o.favoriteService=l),__(l)}),wg(),jc(15,`po-input`,9),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(o.paramsService,l)||(o.paramsService=l),__(l)}),wg()(),nu(16,`po-divider`),jc(17,`div`,3)(18,`po-button`,10),mt(`p-click`,function(){v_(s);let l=Bx(3),se=Bx(12);return l.reset(),se.reset(),__(o.restore())}),wg()()()}if(a&2){let s=Bx(3);UE(`p-favorite-service`,o.favoriteService)(`p-items`,o.breadcrumbItems)(`p-params-service`,o.paramsService),rg(5),sb(`ngModel`,o.breadcrumbItem.action),o0(),rg(),sb(`ngModel`,o.breadcrumbItem.label),o0(),rg(),sb(`ngModel`,o.breadcrumbItem.link),o0(),rg(2),UE(`p-disabled`,s.invalid),rg(5),sb(`ngModel`,o.favoriteService),UE(`p-disabled`,!o.breadcrumbItems?.length),o0(),rg(),sb(`ngModel`,o.paramsService),UE(`p-disabled`,!o.breadcrumbItems?.length),o0()}},dependencies:[RK,SK,MK,xF,SF,hte,ri,Ff,G4],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Breadcrumb Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-breadcrumb-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,xe,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,me],encapsulation:2,changeDetection:1})}return n})();var de=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-breadcrumb-doc`]],standalone:!1,decls:379,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumbItem[]`],[`pan`,``,1,`docs-api-property-type`,`object`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoBreadcrumbModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-breadcrumb.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoBreadcrumbComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),wg(),jc(15,`p`),lO(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),wg(),jc(17,`p`),lO(18,`Caso um endereço seja especificado na propriedade `),jc(19,`code`),lO(20,`p-favorite-service`),wg(),lO(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),wg(),jc(22,`p`),lO(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),jc(24,`code`),lO(25,`p-params-service`),wg(),lO(26,` que recebe um objeto contendo as informações.`),wg(),jc(27,`h4`),lO(28,`Tokens customizáveis`),wg(),jc(29,`p`),lO(30,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(31,`blockquote`)(32,`p`),lO(33,`Para maiores informações, acesse o guia `),jc(34,`a`,6),lO(35,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(36,`.`),wg()(),jc(37,`table`)(38,`thead`)(39,`tr`)(40,`th`),lO(41,`Propriedade`),wg(),jc(42,`th`),lO(43,`Descrição`),wg(),jc(44,`th`),lO(45,`Valor Padrão`),wg()()(),jc(46,`tbody`)(47,`tr`)(48,`td`)(49,`strong`),lO(50,`Default Values`),wg()(),nu(51,`td`)(52,`td`),wg(),jc(53,`tr`)(54,`td`)(55,`code`),lO(56,`--font-family`),wg()(),jc(57,`td`),lO(58,`Família tipográfica usada \xA0`),wg(),jc(59,`td`)(60,`code`),lO(61,`var(--font-family-theme)`),wg()()(),jc(62,`tr`)(63,`td`)(64,`code`),lO(65,`--color`),wg()(),jc(66,`td`),lO(67,`Cor principal do icone de lista`),wg(),jc(68,`td`)(69,`code`),lO(70,`var(--color-action-default)`),wg()()(),jc(71,`tr`)(72,`td`)(73,`code`),lO(74,`--color-icon`),wg()(),jc(75,`td`),lO(76,`Cor do icone ">"`),wg(),jc(77,`td`)(78,`code`),lO(79,`var(--color-neutral-mid-60)`),wg()()(),jc(80,`tr`)(81,`td`)(82,`code`),lO(83,`--color-current-page`),wg(),lO(84,` \xA0`),wg(),jc(85,`td`),lO(86,`Cor do pagina atual`),wg(),jc(87,`td`)(88,`code`),lO(89,`var(--color-neutral-mid-60)`),wg()()()()()(),jc(90,`div`,7)(91,`h4`,8),lO(92,`Seletor`),wg(),jc(93,`pre`,9),lO(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),wg()(),jc(95,`h4`,10),lO(96,`Propriedades`),wg(),jc(97,`table`,11)(98,`tr`,12)(99,`th`,13),lO(100,`Nome`),wg(),jc(101,`th`,13),lO(102,`Tipo`),wg(),jc(103,`th`,13),lO(104,`Padrão`),wg(),jc(105,`th`,13),lO(106,`Descrição`),wg()(),jc(107,`tr`,14)(108,`td`,15)(109,`div`,16)(110,`span`,17),lO(111,` p-favorite-service`),nu(112,`br`),wg()()(),jc(113,`td`,18)(114,`code`,19),lO(115,`string`),wg()(),jc(116,`td`,20),lO(117,`-`),wg(),jc(118,`td`,21)(119,`em`)(120,`strong`),lO(121,`(opcional)`),wg()(),jc(122,`p`),lO(123,`Permite definir uma URL no componente `),jc(124,`code`),lO(125,`po-breadcrumb`),wg(),lO(126,` para favoritar ou desfavoritar.`),wg(),jc(127,`blockquote`)(128,`p`),lO(129,`Para utilizar esta propriedade, o último `),jc(130,`code`),lO(131,`PoBreadcrumbItem`),wg(),lO(132,` da lista de items da propriedade `),jc(133,`code`),lO(134,`p-items`),wg(),lO(135,` deve ter um link informado.`),wg()(),jc(136,`blockquote`)(137,`p`),lO(138,`A API deve estar preparada para retornar um objeto no formato `),jc(139,`code`),lO(140,`{ isFavorite: boolean }`),wg(),lO(141,`.`),wg()(),jc(142,`p`),lO(143,`Ao iniciar, o `),jc(144,`code`),lO(145,`po-breadcrumb`),wg(),lO(146,` faz um GET na URL definida na propriedade `),jc(147,`code`),lO(148,`p-favorite-service`),wg(),lO(149,` e deve retornar a propriedade
`),jc(150,`code`),lO(151,`{ isFavorite: boolean }`),wg(),lO(152,` do último `),jc(153,`code`),lO(154,`PoBreadcrumbItem`),wg(),lO(155,` definido na lista de itens da propriedade `),jc(156,`code`),lO(157,`p-items`),wg(),lO(158,`.`),wg(),jc(159,`p`),lO(160,`Ao clicar em favoritar ou desfavoritar o `),jc(161,`code`),lO(162,`po-breadcrumb`),wg(),lO(163,` faz um POST com o link e a propriedade `),jc(164,`code`),lO(165,`{ isFavorite: boolean }`),wg(),lO(166,`
definidos no \xFAltimo item da propriedade `),jc(167,`code`),lO(168,`p-items`),wg(),lO(169,`.`),wg(),jc(170,`blockquote`)(171,`p`),lO(172,`Caso algum parâmetro seja definido na propriedade `),jc(173,`code`),lO(174,`p-params-service`),wg(),lO(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),wg()(),jc(176,`p`),lO(177,`Exemplo de URL contendo o serviço de favoritar ou desfavoritar:`),wg(),jc(178,`pre`)(179,`code`),lO(180,`https://po-ui.io/sample/api/favorite
`),wg()(),jc(181,`p`),lO(182,`Ao fazer o GET o `),jc(183,`code`),lO(184,`po-breadcrumb`),wg(),lO(185,` concatena o link com a URL de serviço. Exemplo:`),wg(),jc(186,`pre`)(187,`code`),lO(188,`GET http://<domain>/api/favorite?url=/example
`),wg()(),jc(189,`pre`)(190,`code`),lO(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),wg()(),jc(192,`pre`)(193,`code`),lO(194,`POST
payload: { isFavorite: true, url: '/example' }
`),wg()(),jc(195,`p`),lO(196,`Caso possua parâmetros definidos na propriedade `),jc(197,`code`),lO(198,`p-params-service`),wg(),lO(199,`:`),wg(),jc(200,`pre`)(201,`code`),lO(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),wg()(),jc(203,`p`),lO(204,`Exemplos de retorno:`),wg(),jc(205,`pre`)(206,`code`),lO(207,`{ isFavorite: true, url: "/example" }
`),wg()(),jc(208,`pre`)(209,`code`),lO(210,`{ isFavorite: false, url: "/example" }
`),wg()(),jc(211,`pre`)(212,`code`),lO(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),wg()()()(),jc(214,`tr`,14)(215,`td`,15)(216,`div`,16)(217,`span`,17),lO(218,` p-items`),nu(219,`br`),wg()()(),jc(220,`td`,18)(221,`code`,22),lO(222,`PoBreadcrumbItem[]`),wg()(),jc(223,`td`,20),lO(224,`-`),wg(),jc(225,`td`,21)(226,`p`),lO(227,`Lista de itens do `),jc(228,`em`),lO(229,`breadcrumb`),wg(),lO(230,`.`),wg(),jc(231,`p`)(232,`strong`),lO(233,`Exemplo:`),wg()(),jc(234,`pre`)(235,`code`),lO(236,`{ label: 'Po Portal', link: 'portal' }
`),wg()()()(),jc(237,`tr`,14)(238,`td`,15)(239,`div`,16)(240,`span`,17),lO(241,` p-params-service`),nu(242,`br`),wg()()(),jc(243,`td`,18)(244,`code`,23),lO(245,`object`),wg()(),jc(246,`td`,20),lO(247,`-`),wg(),jc(248,`td`,21)(249,`em`)(250,`strong`),lO(251,`(opcional)`),wg()(),jc(252,`p`),lO(253,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),wg()()(),jc(254,`tr`,14)(255,`td`,15)(256,`div`,16)(257,`span`,17),lO(258,` p-size`),nu(259,`br`),wg()()(),jc(260,`td`,18)(261,`code`,19),lO(262,`string`),wg()(),jc(263,`td`,20)(264,`p`)(265,`code`),lO(266,`medium`),wg()()(),jc(267,`td`,21)(268,`em`)(269,`strong`),lO(270,`(opcional)`),wg()(),jc(271,`p`),lO(272,`Define o tamanho do componente entre `),jc(273,`code`),lO(274,`small`),wg(),lO(275,` ou `),jc(276,`code`),lO(277,`medium`),wg(),lO(278,`.`),wg(),jc(279,`blockquote`)(280,`p`),lO(281,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(282,`code`),lO(283,`medium`),wg(),lO(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(285,`a`,24),lO(286,`po-theme`),wg(),lO(287,`.`),wg()()()()(),jc(288,`h3`),lO(289,`Interfaces`),wg(),jc(290,`h4`,25)(291,`code`,5),lO(292,`PoBreadcrumbItem`),wg()(),jc(293,`div`,2)(294,`p`),lO(295,`Interface que define cada item do componente `),jc(296,`strong`),lO(297,`po-breadcrumb`),wg(),lO(298,`.`),wg()(),jc(299,`h4`,10),lO(300,`Propriedades`),wg(),jc(301,`table`,11)(302,`tr`,12)(303,`th`,13),lO(304,`Nome`),wg(),jc(305,`th`,13),lO(306,`Tipo`),wg(),jc(307,`th`,13),lO(308,`Descrição`),wg()(),jc(309,`tr`,14)(310,`td`,15)(311,`div`,16)(312,`span`,17),lO(313,` action`),nu(314,`br`),wg()()(),jc(315,`td`,18)(316,`code`,26),lO(317,`Function`),wg()(),jc(318,`td`,21)(319,`em`)(320,`strong`),lO(321,`(opcional)`),wg()(),jc(322,`p`),lO(323,`Ação executada ao clicar no item.`),wg(),jc(324,`blockquote`)(325,`p`),lO(326,`A função atribuída a esta propriedade receberá o `),jc(327,`em`),lO(328,`label`),wg(),lO(329,` do item como parâmetro para execução.`),wg()()()(),jc(330,`tr`,14)(331,`td`,15)(332,`div`,16)(333,`span`,17),lO(334,` label`),nu(335,`br`),wg()()(),jc(336,`td`,18)(337,`code`,19),lO(338,`string`),wg()(),jc(339,`td`,21)(340,`p`),lO(341,`Rótulo do item.`),wg()()(),jc(342,`tr`,14)(343,`td`,15)(344,`div`,16)(345,`span`,17),lO(346,` link`),nu(347,`br`),wg()()(),jc(348,`td`,18)(349,`code`,19),lO(350,`string`),wg()(),jc(351,`td`,21)(352,`em`)(353,`strong`),lO(354,`(opcional)`),wg()(),jc(355,`p`),lO(356,`Url do item.`),wg(),jc(357,`blockquote`)(358,`p`),lO(359,`Caso o item também contenha uma `),jc(360,`em`),lO(361,`action`),wg(),lO(362,` definida, a preferência de execução será do `),jc(363,`em`),lO(364,`link`),wg(),lO(365,`.`),wg()(),jc(366,`blockquote`)(367,`p`),lO(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),jc(369,`strong`)(370,`a`,27),lO(371,`Veja um exemplo de como criar rotas aqui`),wg()(),lO(372,`.`),wg()(),jc(373,`blockquote`)(374,`p`),lO(375,`Esta propriedade é necessária para que a propriedade `),jc(376,`code`),lO(377,`p-favorite-service`),wg(),lO(378,` consiga favoritar ou desfavoritar.`),wg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Be(n,W){if(n&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let o=Fx();return __(o.changeTab(`web`))}),nu(1,`sample-po-breadcrumb-basic-view`)(2,`sample-po-breadcrumb-labs-view`),wg()}if(n&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var ye=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Breadcrumb`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Be,3,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-breadcrumb-doc`),wg()()()),a&2&&(UE(`p-actions`,o.actions),rg(2),Dx(o.hidePoWebSample?-1:2),rg(),UE(`p-active`,o.activeTab===`doc`))},dependencies:[Vze,lre,ure,re,le,de],encapsulation:2,changeDetection:1})}return n})()}];var ce=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue$1({imports:[I1.forChild(ye),I1]})}return n})();var Xe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=pe({type:n});static ɵinj=ue$1({imports:[M,ce]})}return n})();export{Xe as DocPoBreadcrumbModule};