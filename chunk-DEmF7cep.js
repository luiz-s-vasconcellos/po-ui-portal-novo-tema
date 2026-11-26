import{m as P,p as M}from"./main-OAHE3DMQ.js";import{A as Goe,Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,It as by,Ji as ar,Ki as _u,Lr as Jn,Mi as WL,Mt as Zte,Pr as I,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ca as ge,ea as de$1,er as Ab,fn as oi,jr as H_,li as QL,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var Z=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Info`,`p-value`,`Value`]],template:function(i,a){i&1&&_u(0,`po-info`,0)},dependencies:[Joe],encapsulation:2,changeDetection:1})}return o})();var ee=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-info-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-info-basic/sample-po-info-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-info-basic/sample-po-info-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Info Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-info-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-info-basic/sample-po-info-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-info-basic/sample-po-info-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Z],encapsulation:2,changeDetection:1})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:`Horizontal`,value:by.Horizontal},{label:`Vertical`,value:by.Vertical}];ngOnInit(){this.restore()}restore(){this.label=`PO Info`,this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-labs`]],standalone:!1,decls:13,vars:11,consts:[[`f`,`ngForm`],[3,`p-label`,`p-label-size`,`p-orientation`,`p-url`,`p-value`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`Url`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelSize`,`p-clean`,``,`p-label`,`Label size`,`p-max`,`11`,`p-min`,`1`,1,`po-lg-2`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let C=KO();_u(0,`po-info`,1)(1,`po-divider`),Jc(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),G0(),Zb(`ngModelChange`,function(p){return U_(C),Rk(a.label,p)||(a.label=p),H_(p)}),Kg(),Jc(6,`po-input`,4),G0(),Zb(`ngModelChange`,function(p){return U_(C),Rk(a.value,p)||(a.value=p),H_(p)}),Kg()(),Jc(7,`div`,2)(8,`po-input`,5),G0(),Zb(`ngModelChange`,function(p){return U_(C),Rk(a.url,p)||(a.url=p),H_(p)}),Kg(),Jc(9,`po-number`,6),G0(),Zb(`ngModelChange`,function(p){return U_(C),Rk(a.labelSize,p)||(a.labelSize=p),H_(p)}),Kg(),Jc(10,`po-radio-group`,7),G0(),Zb(`ngModelChange`,function(p){return U_(C),Rk(a.orientation,p)||(a.orientation=p),H_(p)}),Kg()(),Jc(11,`div`,2)(12,`po-button`,8),_t(`p-click`,function(){return a.restore()}),Kg()()()}i&2&&(Ab(`p-label`,a.label)(`p-label-size`,a.labelSize)(`p-orientation`,a.orientation)(`p-url`,a.url)(`p-value`,a.value),wg(5),Kb(`ngModel`,a.label),q0(),wg(),Kb(`ngModel`,a.value),q0(),wg(2),Kb(`ngModel`,a.url),q0(),wg(),Kb(`ngModel`,a.labelSize),q0(),wg(),Kb(`ngModel`,a.orientation),Ab(`p-options`,a.orientationOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,j4,Goe,Zte,Joe],encapsulation:2,changeDetection:1})}return o})();var ne=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-info-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-info-labs/sample-po-info-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-info-labs/sample-po-info-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Info Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-info-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-info-labs/sample-po-info-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
</po-info>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="url" [(ngModel)]="url" p-clean p-label="Url"> </po-input>

    <po-number
      class="po-lg-2 po-md-6"
      name="labelSize"
      [(ngModel)]="labelSize"
      p-clean
      p-label="Label size"
      p-max="11"
      p-min="1"
    >
    </po-number>

    <po-radio-group
      class="po-lg-6 po-md-12"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-info-labs/sample-po-info-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoInfoOrientation, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-info-labs',
  templateUrl: './sample-po-info-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoLabsComponent implements OnInit {
  label: string;
  labelSize: number;
  orientation: PoInfoOrientation;
  url: string;
  value: string;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoInfoOrientation.Horizontal },
    { label: 'Vertical', value: PoInfoOrientation.Vertical }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = 'PO Info';
    this.labelSize = undefined;
    this.orientation = undefined;
    this.url = undefined;
    this.value = undefined;
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,te],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-doc`]],standalone:!1,decls:223,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-info-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-label-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/guides/grid-system`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoInfoOrientation`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-url`,1,`docs-api-properties-row`],[`id`,`prop-p-value`,1,`docs-api-properties-row`],[`id`,`enum-po-info-orientation`,1,`docs-api-class-name`],[`id`,`enum-po-info-orientation-horizontal`,1,`docs-api-properties-row`],[`id`,`enum-po-info-orientation-vertical`,1,`docs-api-properties-row`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoInfoModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-info.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoInfoComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),Kg()(),Jc(15,`div`,6)(16,`h4`,7),Mk(17,`Seletor`),Kg(),Jc(18,`pre`,8),Mk(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),Kg()(),Jc(20,`h4`,9),Mk(21,`Propriedades`),Kg(),Jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),Mk(25,`Nome`),Kg(),Jc(26,`th`,12),Mk(27,`Tipo`),Kg(),Jc(28,`th`,12),Mk(29,`Padrão`),Kg(),Jc(30,`th`,12),Mk(31,`Descrição`),Kg()(),Jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),Mk(36,` p-label`),_u(37,`br`),Kg()()(),Jc(38,`td`,17)(39,`code`,18),Mk(40,`string`),Kg()(),Jc(41,`td`,19),Mk(42,`-`),Kg(),Jc(43,`td`,20)(44,`p`),Mk(45,`Valor do rótulo a ser exibido.`),Kg()()(),Jc(46,`tr`,21)(47,`td`,14)(48,`div`,15)(49,`span`,16),Mk(50,` p-label-size`),_u(51,`br`),Kg()()(),Jc(52,`td`,17)(53,`code`,22),Mk(54,`number`),Kg()(),Jc(55,`td`,19),Mk(56,`-`),Kg(),Jc(57,`td`,20)(58,`em`)(59,`strong`),Mk(60,`(opcional)`),Kg()(),Jc(61,`p`),Mk(62,`Quantidade de `),Jc(63,`a`,23),Mk(64,`colunas`),Kg(),Mk(65,` usadas para a exibição da `),Jc(66,`code`),Mk(67,`p-label`),Kg(),Mk(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),Kg(),Jc(69,`p`),Mk(70,`Valores válidos:`),Kg(),Jc(71,`ul`)(72,`li`)(73,`code`),Mk(74,`[1 .. 11]`),Kg()()(),Jc(75,`blockquote`)(76,`p`),Mk(77,`A propriedade `),Jc(78,`code`),Mk(79,`p-value`),Kg(),Mk(80,` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.`),Kg()()()(),Jc(81,`tr`,24)(82,`td`,14)(83,`div`,15)(84,`span`,16),Mk(85,` p-orientation`),_u(86,`br`),Kg()()(),Jc(87,`td`,17)(88,`code`,25),Mk(89,`PoInfoOrientation`),Kg()(),Jc(90,`td`,19)(91,`p`)(92,`code`),Mk(93,`vertical`),Kg()()(),Jc(94,`td`,20)(95,`em`)(96,`strong`),Mk(97,`(opcional)`),Kg()(),Jc(98,`p`),Mk(99,`Define o layout de exibição.`),Kg(),Jc(100,`blockquote`)(101,`p`),Mk(102,`Quando definido na horizontal, pode-se utilizar a propriedade `),Jc(103,`code`),Mk(104,`p-label-size`),Kg(),Mk(105,` para um maior controle das informações exibidas.`),Kg()()()(),Jc(106,`tr`,26)(107,`td`,14)(108,`div`,15)(109,`span`,16),Mk(110,` p-size`),_u(111,`br`),Kg()()(),Jc(112,`td`,17)(113,`code`,18),Mk(114,`string`),Kg()(),Jc(115,`td`,19)(116,`p`)(117,`code`),Mk(118,`medium`),Kg()()(),Jc(119,`td`,20)(120,`em`)(121,`strong`),Mk(122,`(opcional)`),Kg()(),Jc(123,`p`),Mk(124,`Define o tamanho do componente entre `),Jc(125,`code`),Mk(126,`small`),Kg(),Mk(127,` ou `),Jc(128,`code`),Mk(129,`medium`),Kg(),Mk(130,`.`),Kg(),Jc(131,`blockquote`)(132,`p`),Mk(133,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(134,`code`),Mk(135,`medium`),Kg(),Mk(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(137,`a`,27),Mk(138,`po-theme`),Kg(),Mk(139,`.`),Kg()()()(),Jc(140,`tr`,28)(141,`td`,14)(142,`div`,15)(143,`span`,16),Mk(144,` p-url`),_u(145,`br`),Kg()()(),Jc(146,`td`,17)(147,`code`,18),Mk(148,`string`),Kg()(),Jc(149,`td`,19),Mk(150,`-`),Kg(),Jc(151,`td`,20)(152,`em`)(153,`strong`),Mk(154,`(opcional)`),Kg()(),Jc(155,`p`),Mk(156,`Ao informar uma URL, o conteúdo será exibido na forma de um `),Jc(157,`em`),Mk(158,`link`),Kg(),Mk(159,` e ao ser clicado será redirecionado para a URL informada.`),Kg(),Jc(160,`blockquote`)(161,`p`),Mk(162,`Caso informar `),Jc(163,`code`),Mk(164,`http://`),Kg(),Mk(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Jc(166,`code`),Mk(167,`/customers`),Kg(),Mk(168,`, será aberto na aba atual.`),Kg()()()(),Jc(169,`tr`,29)(170,`td`,14)(171,`div`,15)(172,`span`,16),Mk(173,` p-value`),_u(174,`br`),Kg()()(),Jc(175,`td`,17)(176,`code`,18),Mk(177,`string`),Kg()(),Jc(178,`td`,19),Mk(179,`-`),Kg(),Jc(180,`td`,20)(181,`em`)(182,`strong`),Mk(183,`(opcional)`),Kg()(),Jc(184,`p`),Mk(185,`Valor do conteúdo a ser exibido.`),Kg()()()(),Jc(186,`h3`),Mk(187,`Enums`),Kg(),Jc(188,`h4`,30)(189,`code`,5),Mk(190,`PoInfoOrientation`),Kg()(),Jc(191,`div`,2)(192,`p`),Mk(193,`Define os tipos de orientações disponíveis para o `),Jc(194,`code`),Mk(195,`po-info`),Kg(),Mk(196,`.`),Kg()(),Jc(197,`h4`,9),Mk(198,`Propriedades`),Kg(),Jc(199,`table`,10)(200,`tr`,11)(201,`th`,12),Mk(202,`Nome`),Kg(),Jc(203,`th`,12),Mk(204,`Descrição`),Kg()(),Jc(205,`tr`,31)(206,`td`,14)(207,`div`,15)(208,`span`,16),Mk(209,` Horizontal`),_u(210,`br`),Kg()()(),Jc(211,`td`,20)(212,`p`),Mk(213,`O valor será exibido na horizontal, ao lado direito em relação ao label.`),Kg()()(),Jc(214,`tr`,32)(215,`td`,14)(216,`div`,15)(217,`span`,16),Mk(218,` Vertical`),_u(219,`br`),Kg()()(),Jc(220,`td`,20)(221,`p`),Mk(222,`Exibe o valor na vertical, ou seja, abaixo do label.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function de(o,ue){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-info-basic-view`)(2,`sample-po-info-labs-view`),Kg()),o&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var ce=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;title=`Info`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Info · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0),LO(1,de,3,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-info-doc`),Kg()()),i&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,ee,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var ae=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[GV.forChild(ce),GV]})}return o})();var He=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,ae]})}return o})();export{He as DocPoInfoModule};