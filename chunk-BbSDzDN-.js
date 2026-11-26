import{m as P,p as M}from"./main-KBK5JSBU.js";import{Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Mi as WL,Na as ok,Oi as Vk,Pr as I,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ca as ge,cn as mte,cr as Bk,ea as de,er as Ab,fn as oi,it as Ru,jr as H_,li as QL,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var le=()=>({label:`Po Portal`,link:`portal`});var pe=()=>({label:`Po Breadcrumb`,link:`breadcrumb`});var ce=(n,V)=>[n,V];var ee=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-items`]],template:function(o,r){o&1&&_u(0,`po-breadcrumb`,0),o&2&&Ab(`p-items`,Bk(3,ce,Vk(1,le),Vk(2,pe)))},dependencies:[mte],encapsulation:2,changeDetection:1})}return n})();var ie=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-breadcrumb-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,r){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Breadcrumb Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-breadcrumb-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ee],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{poNotification=p(Ru);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore()}addBreadcrumb(){let a=Object.assign({},this.breadcrumbItem);a.action=a.action?this.showAction.bind(this,a.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,a],this.restoreBreadcrumbItemForm()}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm()}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0}}showAction(a){this.poNotification.success(`Breadcrumb clicked: ${a}`)}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-labs`]],standalone:!1,decls:19,vars:11,consts:[[`breadcrumbForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-favorite-service`,`p-items`,`p-params-service`],[1,`po-row`],[`name`,`breadcrumbAction`,`p-label`,`Breadcrumb action`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLabel`,`p-label`,`Breadcrumb label`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbLink`,`p-label`,`Breadcrumb link`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`favoriteService`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Favorite service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`paramsService`,`p-clean`,``,`p-help`,`Ex.: { id: 14, user: 'dev.po' }`,`p-label`,`Params service`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,r){if(o&1){let s=KO();_u(0,`po-breadcrumb`,2)(1,`po-divider`),Jc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(r.breadcrumbItem.action,d)||(r.breadcrumbItem.action=d),H_(d)}),Kg(),Jc(6,`po-input`,5),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(r.breadcrumbItem.label,d)||(r.breadcrumbItem.label=d),H_(d)}),Kg(),Jc(7,`po-input`,6),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(r.breadcrumbItem.link,d)||(r.breadcrumbItem.link=d),H_(d)}),Kg()(),Jc(8,`div`,3)(9,`po-button`,7),_t(`p-click`,function(){return r.addBreadcrumb()}),Kg()()(),_u(10,`po-divider`),Jc(11,`form`,null,1)(13,`div`,3)(14,`po-input`,8),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(r.favoriteService,d)||(r.favoriteService=d),H_(d)}),Kg(),Jc(15,`po-input`,9),G0(),Zb(`ngModelChange`,function(d){return U_(s),Rk(r.paramsService,d)||(r.paramsService=d),H_(d)}),Kg()(),_u(16,`po-divider`),Jc(17,`div`,3)(18,`po-button`,10),_t(`p-click`,function(){U_(s);let d=ok(3),de=ok(12);return d.reset(),de.reset(),H_(r.restore())}),Kg()()()}if(o&2){let s=ok(3);Ab(`p-favorite-service`,r.favoriteService)(`p-items`,r.breadcrumbItems)(`p-params-service`,r.paramsService),wg(5),Kb(`ngModel`,r.breadcrumbItem.action),q0(),wg(),Kb(`ngModel`,r.breadcrumbItem.label),q0(),wg(),Kb(`ngModel`,r.breadcrumbItem.link),q0(),wg(2),Ab(`p-disabled`,s.invalid),wg(5),Kb(`ngModel`,r.favoriteService),Ab(`p-disabled`,!r.breadcrumbItems?.length),q0(),wg(),Kb(`ngModel`,r.paramsService),Ab(`p-disabled`,!r.breadcrumbItems?.length),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,mte,oi,Nf,j4],encapsulation:2,changeDetection:1})}return n})();var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-breadcrumb-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,r){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Breadcrumb Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-breadcrumb-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ne],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-breadcrumb-doc`]],standalone:!1,decls:379,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-breadcrumb-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-favorite-service`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumbItem[]`],[`id`,`prop-p-params-service`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`]],template:function(o,r){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoBreadcrumbModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-breadcrumb.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoBreadcrumbComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),Kg(),Jc(15,`p`),Mk(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),Kg(),Jc(17,`p`),Mk(18,`Caso um endereço seja especificado na propriedade `),Jc(19,`code`),Mk(20,`p-favorite-service`),Kg(),Mk(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),Kg(),Jc(22,`p`),Mk(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Jc(24,`code`),Mk(25,`p-params-service`),Kg(),Mk(26,` que recebe um objeto contendo as informações.`),Kg(),Jc(27,`h4`),Mk(28,`Tokens customizáveis`),Kg(),Jc(29,`p`),Mk(30,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(31,`blockquote`)(32,`p`),Mk(33,`Para maiores informações, acesse o guia `),Jc(34,`a`,6),Mk(35,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(36,`.`),Kg()(),Jc(37,`table`)(38,`thead`)(39,`tr`)(40,`th`),Mk(41,`Propriedade`),Kg(),Jc(42,`th`),Mk(43,`Descrição`),Kg(),Jc(44,`th`),Mk(45,`Valor Padrão`),Kg()()(),Jc(46,`tbody`)(47,`tr`)(48,`td`)(49,`strong`),Mk(50,`Default Values`),Kg()(),_u(51,`td`)(52,`td`),Kg(),Jc(53,`tr`)(54,`td`)(55,`code`),Mk(56,`--font-family`),Kg()(),Jc(57,`td`),Mk(58,`Família tipográfica usada \xA0`),Kg(),Jc(59,`td`)(60,`code`),Mk(61,`var(--font-family-theme)`),Kg()()(),Jc(62,`tr`)(63,`td`)(64,`code`),Mk(65,`--color`),Kg()(),Jc(66,`td`),Mk(67,`Cor principal do icone de lista`),Kg(),Jc(68,`td`)(69,`code`),Mk(70,`var(--color-action-default)`),Kg()()(),Jc(71,`tr`)(72,`td`)(73,`code`),Mk(74,`--color-icon`),Kg()(),Jc(75,`td`),Mk(76,`Cor do icone ">"`),Kg(),Jc(77,`td`)(78,`code`),Mk(79,`var(--color-neutral-mid-60)`),Kg()()(),Jc(80,`tr`)(81,`td`)(82,`code`),Mk(83,`--color-current-page`),Kg(),Mk(84,` \xA0`),Kg(),Jc(85,`td`),Mk(86,`Cor do pagina atual`),Kg(),Jc(87,`td`)(88,`code`),Mk(89,`var(--color-neutral-mid-60)`),Kg()()()()()(),Jc(90,`div`,7)(91,`h4`,8),Mk(92,`Seletor`),Kg(),Jc(93,`pre`,9),Mk(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),Kg()(),Jc(95,`h4`,10),Mk(96,`Propriedades`),Kg(),Jc(97,`table`,11)(98,`tr`,12)(99,`th`,13),Mk(100,`Nome`),Kg(),Jc(101,`th`,13),Mk(102,`Tipo`),Kg(),Jc(103,`th`,13),Mk(104,`Padrão`),Kg(),Jc(105,`th`,13),Mk(106,`Descrição`),Kg()(),Jc(107,`tr`,14)(108,`td`,15)(109,`div`,16)(110,`span`,17),Mk(111,` p-favorite-service`),_u(112,`br`),Kg()()(),Jc(113,`td`,18)(114,`code`,19),Mk(115,`string`),Kg()(),Jc(116,`td`,20),Mk(117,`-`),Kg(),Jc(118,`td`,21)(119,`em`)(120,`strong`),Mk(121,`(opcional)`),Kg()(),Jc(122,`p`),Mk(123,`Permite definir uma URL no componente `),Jc(124,`code`),Mk(125,`po-breadcrumb`),Kg(),Mk(126,` para favoritar ou desfavoritar.`),Kg(),Jc(127,`blockquote`)(128,`p`),Mk(129,`Para utilizar esta propriedade, o último `),Jc(130,`code`),Mk(131,`PoBreadcrumbItem`),Kg(),Mk(132,` da lista de items da propriedade `),Jc(133,`code`),Mk(134,`p-items`),Kg(),Mk(135,` deve ter um link informado.`),Kg()(),Jc(136,`blockquote`)(137,`p`),Mk(138,`A API deve estar preparada para retornar um objeto no formato `),Jc(139,`code`),Mk(140,`{ isFavorite: boolean }`),Kg(),Mk(141,`.`),Kg()(),Jc(142,`p`),Mk(143,`Ao iniciar, o `),Jc(144,`code`),Mk(145,`po-breadcrumb`),Kg(),Mk(146,` faz um GET na URL definida na propriedade `),Jc(147,`code`),Mk(148,`p-favorite-service`),Kg(),Mk(149,` e deve retornar a propriedade
`),Jc(150,`code`),Mk(151,`{ isFavorite: boolean }`),Kg(),Mk(152,` do último `),Jc(153,`code`),Mk(154,`PoBreadcrumbItem`),Kg(),Mk(155,` definido na lista de itens da propriedade `),Jc(156,`code`),Mk(157,`p-items`),Kg(),Mk(158,`.`),Kg(),Jc(159,`p`),Mk(160,`Ao clicar em favoritar ou desfavoritar o `),Jc(161,`code`),Mk(162,`po-breadcrumb`),Kg(),Mk(163,` faz um POST com o link e a propriedade `),Jc(164,`code`),Mk(165,`{ isFavorite: boolean }`),Kg(),Mk(166,`
definidos no \xFAltimo item da propriedade `),Jc(167,`code`),Mk(168,`p-items`),Kg(),Mk(169,`.`),Kg(),Jc(170,`blockquote`)(171,`p`),Mk(172,`Caso algum parâmetro seja definido na propriedade `),Jc(173,`code`),Mk(174,`p-params-service`),Kg(),Mk(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),Kg()(),Jc(176,`p`),Mk(177,`Exemplo de URL contendo o serviço de favoritar ou desfavoritar:`),Kg(),Jc(178,`pre`)(179,`code`),Mk(180,`https://po-ui.io/sample/api/favorite
`),Kg()(),Jc(181,`p`),Mk(182,`Ao fazer o GET o `),Jc(183,`code`),Mk(184,`po-breadcrumb`),Kg(),Mk(185,` concatena o link com a URL de serviço. Exemplo:`),Kg(),Jc(186,`pre`)(187,`code`),Mk(188,`GET http://<domain>/api/favorite?url=/example
`),Kg()(),Jc(189,`pre`)(190,`code`),Mk(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),Kg()(),Jc(192,`pre`)(193,`code`),Mk(194,`POST
payload: { isFavorite: true, url: '/example' }
`),Kg()(),Jc(195,`p`),Mk(196,`Caso possua parâmetros definidos na propriedade `),Jc(197,`code`),Mk(198,`p-params-service`),Kg(),Mk(199,`:`),Kg(),Jc(200,`pre`)(201,`code`),Mk(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),Kg()(),Jc(203,`p`),Mk(204,`Exemplos de retorno:`),Kg(),Jc(205,`pre`)(206,`code`),Mk(207,`{ isFavorite: true, url: "/example" }
`),Kg()(),Jc(208,`pre`)(209,`code`),Mk(210,`{ isFavorite: false, url: "/example" }
`),Kg()(),Jc(211,`pre`)(212,`code`),Mk(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),Kg()()()(),Jc(214,`tr`,22)(215,`td`,15)(216,`div`,16)(217,`span`,17),Mk(218,` p-items`),_u(219,`br`),Kg()()(),Jc(220,`td`,18)(221,`code`,23),Mk(222,`PoBreadcrumbItem[]`),Kg()(),Jc(223,`td`,20),Mk(224,`-`),Kg(),Jc(225,`td`,21)(226,`p`),Mk(227,`Lista de itens do `),Jc(228,`em`),Mk(229,`breadcrumb`),Kg(),Mk(230,`.`),Kg(),Jc(231,`p`)(232,`strong`),Mk(233,`Exemplo:`),Kg()(),Jc(234,`pre`)(235,`code`),Mk(236,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Jc(237,`tr`,24)(238,`td`,15)(239,`div`,16)(240,`span`,17),Mk(241,` p-params-service`),_u(242,`br`),Kg()()(),Jc(243,`td`,18)(244,`code`,25),Mk(245,`object`),Kg()(),Jc(246,`td`,20),Mk(247,`-`),Kg(),Jc(248,`td`,21)(249,`em`)(250,`strong`),Mk(251,`(opcional)`),Kg()(),Jc(252,`p`),Mk(253,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()(),Jc(254,`tr`,26)(255,`td`,15)(256,`div`,16)(257,`span`,17),Mk(258,` p-size`),_u(259,`br`),Kg()()(),Jc(260,`td`,18)(261,`code`,19),Mk(262,`string`),Kg()(),Jc(263,`td`,20)(264,`p`)(265,`code`),Mk(266,`medium`),Kg()()(),Jc(267,`td`,21)(268,`em`)(269,`strong`),Mk(270,`(opcional)`),Kg()(),Jc(271,`p`),Mk(272,`Define o tamanho do componente entre `),Jc(273,`code`),Mk(274,`small`),Kg(),Mk(275,` ou `),Jc(276,`code`),Mk(277,`medium`),Kg(),Mk(278,`.`),Kg(),Jc(279,`blockquote`)(280,`p`),Mk(281,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(282,`code`),Mk(283,`medium`),Kg(),Mk(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(285,`a`,27),Mk(286,`po-theme`),Kg(),Mk(287,`.`),Kg()()()()(),Jc(288,`h3`),Mk(289,`Interfaces`),Kg(),Jc(290,`h4`,28)(291,`code`,5),Mk(292,`PoBreadcrumbItem`),Kg()(),Jc(293,`div`,2)(294,`p`),Mk(295,`Interface que define cada item do componente `),Jc(296,`strong`),Mk(297,`po-breadcrumb`),Kg(),Mk(298,`.`),Kg()(),Jc(299,`h4`,10),Mk(300,`Propriedades`),Kg(),Jc(301,`table`,11)(302,`tr`,12)(303,`th`,13),Mk(304,`Nome`),Kg(),Jc(305,`th`,13),Mk(306,`Tipo`),Kg(),Jc(307,`th`,13),Mk(308,`Descrição`),Kg()(),Jc(309,`tr`,29)(310,`td`,15)(311,`div`,16)(312,`span`,17),Mk(313,` action`),_u(314,`br`),Kg()()(),Jc(315,`td`,18)(316,`code`,30),Mk(317,`Function`),Kg()(),Jc(318,`td`,21)(319,`em`)(320,`strong`),Mk(321,`(opcional)`),Kg()(),Jc(322,`p`),Mk(323,`Ação executada ao clicar no item.`),Kg(),Jc(324,`blockquote`)(325,`p`),Mk(326,`A função atribuída a esta propriedade receberá o `),Jc(327,`em`),Mk(328,`label`),Kg(),Mk(329,` do item como parâmetro para execução.`),Kg()()()(),Jc(330,`tr`,31)(331,`td`,15)(332,`div`,16)(333,`span`,17),Mk(334,` label`),_u(335,`br`),Kg()()(),Jc(336,`td`,18)(337,`code`,19),Mk(338,`string`),Kg()(),Jc(339,`td`,21)(340,`p`),Mk(341,`Rótulo do item.`),Kg()()(),Jc(342,`tr`,32)(343,`td`,15)(344,`div`,16)(345,`span`,17),Mk(346,` link`),_u(347,`br`),Kg()()(),Jc(348,`td`,18)(349,`code`,19),Mk(350,`string`),Kg()(),Jc(351,`td`,21)(352,`em`)(353,`strong`),Mk(354,`(opcional)`),Kg()(),Jc(355,`p`),Mk(356,`Url do item.`),Kg(),Jc(357,`blockquote`)(358,`p`),Mk(359,`Caso o item também contenha uma `),Jc(360,`em`),Mk(361,`action`),Kg(),Mk(362,` definida, a preferência de execução será do `),Jc(363,`em`),Mk(364,`link`),Kg(),Mk(365,`.`),Kg()(),Jc(366,`blockquote`)(367,`p`),Mk(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(369,`strong`)(370,`a`,33),Mk(371,`Veja um exemplo de como criar rotas aqui`),Kg()(),Mk(372,`.`),Kg()(),Jc(373,`blockquote`)(374,`p`),Mk(375,`Esta propriedade é necessária para que a propriedade `),Jc(376,`code`),Mk(377,`p-favorite-service`),Kg(),Mk(378,` consiga favoritar ou desfavoritar.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function fe(n,V){if(n&1&&(Jc(0,`div`,1),_u(1,`sample-po-breadcrumb-basic-view`)(2,`sample-po-breadcrumb-labs-view`),Kg()),n&2){let a=tk();Ab(`hidden`,a.activeTab!==`web`)}}var ve=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;title=`Breadcrumb`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`,this.title=`Breadcrumb · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(o,r){o&1&&(Jc(0,`po-page-default`,0),LO(1,fe,3,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-breadcrumb-doc`),Kg()()),o&2&&(Ab(`p-title`,r.title)(`p-actions`,r.actions),wg(),jO(r.hidePoWebSample?-1:1),wg(),Ab(`hidden`,r.activeTab!==`doc`))},dependencies:[Mze,ie,oe,re],encapsulation:2,changeDetection:1})}return n})()}];var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(ve),GV]})}return n})();var Qe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,me]})}return n})();export{Qe as DocPoBreadcrumbModule};